import { motion } from "framer-motion";

export default function Badge({ caption }) {
  return <motion.span 
  animate={{ scale: [ 1, 2, 1 ] }}
  transition={{ duration: 0.5 }}
  className="badge"
  >
    {caption}</motion.span>;
}
