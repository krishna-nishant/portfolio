import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedBackground from "../components/Background";

export default function ThankYouPage() {
  return (
    <>
      <AnimatedBackground />
      <div className="min-h-screen flex items-center justify-center px-4 bg-transparent">
        <div className="max-w-lg w-full space-y-10 text-center relative z-10">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-2"
          >
            <CheckCircle className="w-20 h-20 text-[#6366f1]" />
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
              Thank You!
            </h1>
            <p className="text-gray-400 text-lg">
              Your message has been received. I'll get back to you as soon as
              possible.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <a
              href="https://krishna-nishant.vercel.app/"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#6366f1]/20 active:scale-[0.98]"
            >
              Back to Home
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
}
