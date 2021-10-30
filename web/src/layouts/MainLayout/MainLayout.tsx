import { AnimatePresence, motion } from 'framer-motion'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.main
        className="flex flex-col flex-grow items-center justify-center text-black bg-white dark:text-white dark:bg-black"
        animate="enter"
        exit="exit"
        initial="initial"
        variants={{
          initial: { opacity: 0, y: 5 },
          enter: { opacity: 1, y: 0, transition: { duration: 0.2 } },
          exit: { opacity: 0, transition: { duration: 0.1 } },
        }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  )
}

export default MainLayout
