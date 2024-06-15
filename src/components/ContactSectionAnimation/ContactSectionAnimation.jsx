import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { fadeIn } from 'utils/variant';

export const ContactSectionAnimation = ({ children, position, delay }) => {
  return (
    <motion.div
      variants={fadeIn(position, delay)}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      {children}
    </motion.div>
  );
};

ContactSectionAnimation.propTypes = {
  children: PropTypes.node,
  position: PropTypes.string,
  delay: PropTypes.number,
};
