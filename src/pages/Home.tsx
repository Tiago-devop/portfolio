export default function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

/**
 * import { motion } from "framer-motion";
import './App.css'

function TextAnimation() {
  const text = 'Hello word'
  return (
    <motion.div className="text">
      {text.split('').map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ duration: 1, delay: index * 0.1}}
          >
            {letter}
          </motion.span>
      ))}
    </motion.div>
  )
}



function App() {

  return (
    <>
      <TextAnimation />
    </>
  )
}

export default App
 */