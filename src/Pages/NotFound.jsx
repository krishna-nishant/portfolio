import { motion } from "framer-motion";
import AnimatedBackground from "../components/Background";

const NotFound = () => {
  return (
    <>
      <AnimatedBackground />
      <div className="min-h-screen flex items-center justify-center bg-transparent px-4">
        <div className="max-w-lg w-full space-y-10 text-center relative z-10">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-600"
          >
            404
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold text-white">Page Not Found</h2>
            <p className="text-gray-400">
              The page you're looking for doesn't exist or has been moved to
              another URL.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://krishna-nishant.vercel.app/"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Go Back Home
              </a>
              <a
                href="https://krishna-nishant.vercel.app/#portfolio"
                className="inline-flex items-center px-6 py-3 border border-gray-700 text-base font-medium rounded-md text-gray-200 bg-transparent hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300"
              >
                View Projects
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default NotFound;