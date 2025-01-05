import { useState } from 'react';
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

export const Navigation: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

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
