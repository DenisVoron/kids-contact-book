import { motion } from 'framer-motion';
import { fadeIn } from 'utils/variant';
import { Pluto } from './PlutoPicture.styled';
import pluto from 'image/pluto.png';

export const PlutoPicture = () => {
  return (
    <motion.div
      variants={fadeIn('left', 0.3)}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <Pluto $pluto={pluto} />
    </motion.div>
  );
};
