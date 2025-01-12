import { useState, useContext, useCallback } from 'react';
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
  Link,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link as RouterLink } from 'react-router-dom';
import { AppContext } from '../../context/appContext';
import { AppActionKind, AppContextType } from '../../context/contextType';
import { LOCALES } from '../../const';

export const Navigation: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const { state, dispatch } = useContext(AppContext) as AppContextType;

  const setLanguage = useCallback((locale: string) => {
    dispatch({
      type: AppActionKind.SETLOCALE,
      payload: locale,
    });
  }, []);

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <ListItem disablePadding>
          <ListItemButton
            component={(props: any) => <RouterLink {...props} />}
            to="/settings"
            onClick={() => setIsDrawerOpen(false)}
          >
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { lg: 'none', xl: 'none' } }}
          >
            <MenuIcon onClick={() => setIsDrawerOpen(true)} />
          </IconButton>
          <Link
            component={(props) => <RouterLink {...props} />}
            to="/"
            sx={{ color: 'white', flexGrow: 1 }}
            underline="none"
          >
            <Typography
              variant="h6"
              component="div"
              sx={{ color: 'white', flexGrow: 1 }}
            >
              Movies recommendation
            </Typography>
          </Link>

          <Box>
            {state.locale}
            <Button
              disabled={state.locale === LOCALES.ENGLISH}
              sx={{ my: 2, color: 'white' }}
              onClick={() => setLanguage(LOCALES.ENGLISH)}
            >
              English
            </Button>
            <Button
              disabled={state.locale === LOCALES.UKRAINIAN}
              sx={{ my: 2, color: 'white' }}
              onClick={() => setLanguage(LOCALES.UKRAINIAN)}
            >
              Українська
            </Button>
          </Box>

          <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
            <Button
              component={(props: any) => <RouterLink {...props} />}
              to="/settings"
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Settings
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        disableScrollLock
      >
        {list()}
      </Drawer>
    </Box>
  );
};
