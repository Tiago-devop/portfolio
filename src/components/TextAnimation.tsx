import { motion } from "framer-motion";

export default function TextAnimation({ text, isWhite }: { text: string, isWhite?: boolean }) {
  return (
    <motion.div className={`text-7xl  font-bold ${isWhite ? 'text-white' : 'text-indigo-600'}`}>
      {text.split('').map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: index * 0.1 }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  )
}