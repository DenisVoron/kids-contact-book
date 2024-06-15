import { motion } from 'framer-motion';
import { fadeIn } from 'utils/variant';
import { WinniePooh } from './WinniePoohPicture.styled';

export const WinniePoohPicture = () => {
  return (
    <motion.div
      variants={fadeIn('down', 0.4)}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <WinniePooh />
    </motion.div>
  );
};
