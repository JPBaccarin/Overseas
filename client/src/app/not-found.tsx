"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-6xl mb-4 font-semibold"
      >
        404 - Page Not Found
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-2xl mb-8"
      >
        Sorry, the page you are looking for does not exist.
      </motion.p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.5 }}>
        <Link
          href="/"
          className="text-lg text-primary hover:underline border border-transparent p-2 rounded-lg hover:border-primary/50 transition-all ease-in-out"
        >
          Go back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
