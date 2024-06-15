import { motion } from 'framer-motion';
import { fadeIn } from 'utils/variant';
import { WinniePooh } from './WinniePoohPicture.styled';
import winniePooh from 'image/winnie-pooh.png';

export const WinniePoohPicture = () => {
  return (
    <motion.div
      variants={fadeIn('down', 0.4)}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <WinniePooh $winniePooh={winniePooh} />
    </motion.div>
  );
};
