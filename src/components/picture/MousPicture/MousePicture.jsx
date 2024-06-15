import { motion } from 'framer-motion';
import { fadeIn } from 'utils/variant';
import { MickeyMouse } from './MousePicture.styled';

export const MousePicture = () => {
  return (
    <motion.div
      variants={fadeIn('right', 0.3)}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <MickeyMouse />
    </motion.div>
  );
};
