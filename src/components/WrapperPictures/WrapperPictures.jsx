import { Pictures } from './WrapperPictures.styled';
import { MousePicture } from 'components/picture/MousPicture';
import { PlutoPicture } from 'components/picture/PlutoPicture';
import { WinniePoohPicture } from 'components/picture/WinniePoohPicture';

export const WrapperPictures = () => (
  <Pictures>
    <MousePicture />
    <PlutoPicture />
    <WinniePoohPicture />
  </Pictures>
);
