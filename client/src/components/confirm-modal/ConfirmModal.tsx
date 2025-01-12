import { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { SocilaShare } from '../social-share/SocilaShare';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { IConfirmModalProps } from '../../types/types';
import { CONFIRM_TIMEOUT } from '../../const';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '8px',
  boxShadow: 24,
  p: 4,
};

export const ConfirmModal: React.FC<IConfirmModalProps> = ({
  open,
  url,
  title,
  onClose,
}) => {
  const [openAlert, setOpenAlert] = useState<boolean>(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    if (openAlert) {
      timer = setTimeout(() => {
        setOpenAlert(false);
      }, CONFIRM_TIMEOUT);
    }

    return () => clearTimeout(timer);
  }, [openAlert]);

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {title}
        </Typography>
        <Paper
          component="form"
          sx={{
            p: '2px 4px',
            marginTop: '24px',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="List URL"
            inputProps={{ 'aria-label': 'list URL' }}
            value={url}
          />
          <IconButton
            href={url}
            target="_blank"
            sx={{ p: '10px' }}
            aria-label="preview"
          >
            <VisibilityIcon />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <CopyToClipboard text={url} onCopy={() => setOpenAlert(true)}>
            <IconButton
              color="primary"
              sx={{ p: '10px' }}
              aria-label="copy to clipboard"
            >
              <ContentCopyIcon />
            </IconButton>
          </CopyToClipboard>
        </Paper>

        <Typography mt={2} id="modal-modal-title" variant="h6" component="h3">
          <FormattedMessage id="share_with_friends" />
        </Typography>

        <SocilaShare url={url} title={title} />

        {openAlert ? (
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpenAlert(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mt: 2 }}
          >
            <FormattedMessage id="copied" />
          </Alert>
        ) : null}
      </Box>
    </Modal>
  );
};
