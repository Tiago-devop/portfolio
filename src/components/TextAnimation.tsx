import { motion } from "framer-motion";

const customStyles = {
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent'
}

export default function TextAnimation({ text }: { text: string }) {
  return (
    <motion.div style={customStyles} className="text-4xl  font-bold text-white bg-gradient-to-r from-teal-200 to-purple-950">
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