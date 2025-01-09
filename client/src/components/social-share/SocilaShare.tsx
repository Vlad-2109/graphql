import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share';
import Stack from '@mui/material/Stack';
import { ISocialShareProps } from '../../types/types';
import { SOCIAL_BUTTON_SIZE } from '../../const';

export const SocilaShare: React.FC<ISocialShareProps> = ({ url, title }) => {
  return (
    <Stack direction="row" spacing={1}>
      <FacebookShareButton url={url} title={title}>
        <FacebookIcon round size={SOCIAL_BUTTON_SIZE} />
      </FacebookShareButton>

      <TwitterShareButton url={url} title={title}>
        <TwitterIcon round size={SOCIAL_BUTTON_SIZE} />
      </TwitterShareButton>
    </Stack>
  );
};
