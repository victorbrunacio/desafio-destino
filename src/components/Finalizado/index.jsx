import styles from "./Finalizado.module.scss"
import { motion } from "framer-motion"
import {BsFillSuitHeartFill} from "react-icons/bs"
const Finalizado = () => {
  return (
    <div className={styles.motherDiv}>
      <motion.h1
      initial={{x:-1200}}
      animate={{y:300, x:-200, rotate: 360}}
      transition={{delay:1, duration:2, type:"spring"}}
      >
        Por Favor me aprove no teste <BsFillSuitHeartFill /> !!!
      </motion.h1>

        <motion.span
        initial={{x:1200}}
        animate={{y:400, x:-700, rotate: 360}}
        transition={{delay:4, duration:2}}
        >
          Você pode pegar o urso e tacar longe.
          </motion.span>

      <motion.div className={styles.loader}
        initial={{x:-150, y:300}}
        animate={{y:80, x:-200,}}
        transition={{delay:0.5, duration:6 }}
        drag
      >
        
      </motion.div>
    </div>
  )
}

export default Finalizado