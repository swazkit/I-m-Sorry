"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function GiftBox() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex flex-col items-center">
      {/* Gift Box */}
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: open ? 0 : [0, -3, 3, -3, 3, 0] }}
        transition={{ repeat: open ? 0 : Infinity, duration: 2 }}
        onClick={() => setOpen(true)}
        className="relative h-[min(60vw,220px)] w-[min(60vw,220px)] cursor-pointer rounded-lg bg-gradient-to-br from-pink-400 to-pink-600 shadow-2xl"
      >
        {/* Stripes */}
        <div className="absolute left-[45%] top-0 h-full w-[10%] bg-white/80" />
        <div className="absolute left-0 top-[45%] h-[10%] w-full bg-white/80" />

        {/* Lid */}
        <motion.div
          animate={{ rotateX: open ? 150 : 0 }}
          transition={{ duration: 1 }}
          className="absolute -top-[25%] left-0 h-[30%] w-full origin-bottom rounded-lg bg-gradient-to-br from-pink-400 to-pink-600 shadow-md"
        >
          <div className="absolute left-[45%] h-full w-[10%] bg-white/80" />
        </motion.div>

        {/* Cute "Click Me!" Text */}
        {!open && (
          <motion.div
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: [1, 1.1, 1], opacity: [1, 0.9, 1] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
            className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white font-bold text-lg sm:text-xl pointer-events-none text-center"
          >
            Open Me!❤️
          </motion.div>
        )}
      </motion.div>

      {/* Message */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute top-full mt-6 flex flex-col items-center rounded-2xl bg-white/90 px-6 py-5 text-center shadow-2xl backdrop-blur-md"
          >
            <p className="text-lg font-semibold text-pink-600 sm:text-xl">
              I’m really sorry ❤️
            </p>
            <p className="mt-2 text-base text-gray-700 sm:text-lg">
              Please forgive me 🙏
            </p>

            <motion.a
              href="/im-sorry"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 inline-block rounded-full bg-gradient-to-r from-pink-500 to-pink-700 px-5 py-2 text-sm font-medium text-white shadow-md hover:shadow-lg"
            >
              See My Apology Letter
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
