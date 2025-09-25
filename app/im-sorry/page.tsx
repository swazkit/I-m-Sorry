// app/im-sorry/page.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ImSorryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-100 flex flex-col items-center justify-center px-4 font-poppins pt-10 pb-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-pink-700 mb-6 pacifico">
          I’m Really Sorry 💌
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
          Sometimes words aren’t enough, but I want to try.  
          I made mistakes, and I never want to hurt you.  
          This is my way of saying I care about us more than anything.
        </p>

        {/* Cute Apology GIF */}
        <motion.img
            src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2V5eXJkbTNsczExMjZwajBmbWUxNXBuMHZ3a3M2eHBwMXE1dHA3NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/CXkNEsYZE8B6GPhQWE/giphy.gif"
            alt="Cute cat sorry gif"
            className="mx-auto rounded-2xl shadow-lg mb-8 w-full max-w-md"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
        />


        {/* Explanations */}
        <div className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-lg text-left mb-10">
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">
            From My Heart
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            I know I disappointed you, and I hate myself for that.  
            You mean the world to me, and I promise to be better.  
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Please forgive me. I’ll do everything I can to make it up to you.  
            You’re the best part of my life, and I never want to lose you. ❤️
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            I know I’ve hurt you, and I can’t express how sorry I truly am.
            Every time I think about it, I feel the weight of my mistake, and it reminds me how much I care about you.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            You mean more to me than anything in this world, and I hate the idea of causing you pain.
            I want you to know that I am willing to do whatever it takes to make things right and rebuild your trust.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Please forgive me for the times I’ve been careless or thoughtless.
            I promise to listen more, understand more, and always put us first.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            I miss your smile, your laughter, and the way your presence brightens my life.
            I hope we can move past this, stronger and closer than before.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            You’re the most important person to me, and losing you is not an option I’m willing to face.
            I am deeply sorry, and I will spend every day showing you how much you mean to me. ❤️
          </p>
          <p className="text-gray-700 leading-relaxed mb-3 text-right">
            ~ Love, Swaz ❤️
          </p>


        </div>

        <motion.img
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWR1M29vODh5ZW1sM3F0enF1bDRsajJ1N2N3eThnbGYweHMyaHNmZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IzXiddo2twMmdmU8Lv/giphy.gif"
            alt="Cute cat sorry gif"
            className="mx-auto rounded-2xl shadow-lg mb-8 w-full max-w-md"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
        />

        <div className="text-gray-500 italic mb-10 bg-amber-50/70 p-4 rounded-lg shadow-inner max-w-md mx-auto">
            Note: I wanna keep hugging you just like this forever...
        </div>
        
        <div className="w-full max-w-xl mx-auto mt-6 mb-6">
            <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/2Vv-BfVoq4g?autoplay=0&rel=0"
                title="Ed Sheeran - Perfect"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-xl shadow-lg"
            ></iframe>
        </div>

        <motion.img
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXRhb2U4b2tld2F1azZpaTVkY3ZmdjA5d3I0MW4yYmx2cXZlN2xqcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/f9EmXxglhdhAj1bo28/giphy.gif"
            alt="Cute cat sorry gif"
            className="mx-auto rounded-2xl shadow-lg mb-8 w-full max-w-md"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
        />

        {/* Button */}
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-pink-600 text-white rounded-full shadow-md hover:bg-pink-700 transition"
          >
            Back to Surprise 🎁
          </motion.button>
        </Link>
      </motion.div>

      

    </div>
  );
}
