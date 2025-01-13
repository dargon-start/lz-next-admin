import * as motion from 'motion/react-client'

export default function AnimatePage() {
  return (
    <>
      <motion.button
        className="m-4 rounded bg-blue-500 px-4 py-2 text-white"
        initial={{ scale: 0.5 }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
      >
        点击我
      </motion.button>

      <div className="mt-4 flex items-center">
        <div className="relative h-10 w-64 rounded-full bg-gray-200">
          <motion.div
            className="absolute h-full w-1/2 rounded-full bg-blue-500"
            initial={{ x: 0 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.6}
          >
            <div className="absolute inset-0 flex items-center justify-center text-white">
              <span className="text-xs">拖动 》》》</span>
            </div>
          </motion.div>
        </div>
        <div className="ml-4 text-xl">拖动按钮完成验证</div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-4">
        <motion.div
          className="bg-gray-200"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        >
          <div className="h-40 w-full rounded-lg bg-blue-500"></div>
        </motion.div>
        <motion.div
          className="bg-gray-200"
          initial={{ scale: 1 }}
          whileHover={{ scale: 0.8 }}
        >
          <div className="h-40 w-full rounded-lg bg-blue-500"></div>
        </motion.div>
        <motion.div
          className="bg-gray-200"
          initial={{ scale: 1 }}
          whileHover={{ scale: 0.8 }}
        >
          <div className="h-40 w-full rounded-lg bg-blue-500"></div>
        </motion.div>
      </div>
    </>
  )
}
