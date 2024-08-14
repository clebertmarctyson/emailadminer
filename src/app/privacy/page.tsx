"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Shield, Lock, Eye, FileText } from "lucide-react";
import Link from "next/link";

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
};

const staggerChildren: Variants = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const Privacy = () => {
  const policies = [
    {
      title: "Information Collection",
      icon: Eye,
      content:
        "We collect personal information that you voluntarily provide to us when you use our services. This may include your name, email address, and usage data.",
    },
    {
      title: "Data Usage",
      icon: FileText,
      content:
        "We use your personal information to provide and improve our services, communicate with you, and ensure the security of our platform.",
    },
    {
      title: "Data Protection",
      icon: Lock,
      content:
        "We implement robust security measures to protect your personal information from unauthorized access, alteration, or destruction.",
    },
    {
      title: "Your Rights",
      icon: Shield,
      content:
        "You have the right to access, correct, or delete your personal information. You can also opt out of certain data collection practices.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800 py-16">
      <motion.div
        className="container mx-auto px-4 max-w-4xl"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <motion.h1
          className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          variants={fadeInUp}
        >
          Privacy Policy
        </motion.h1>

        <motion.p
          className="text-xl text-gray-700 mb-12 text-center"
          variants={fadeInUp}
        >
          At EmailAdminer, we are committed to protecting your privacy and
          ensuring the security of your personal information.
        </motion.p>

        <motion.div className="space-y-8" variants={staggerChildren}>
          {policies.map((policy, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              variants={fadeInUp}
            >
              <div className="flex items-center mb-4">
                <policy.icon className="h-8 w-8 text-blue-600 mr-4" />
                <h2 className="text-2xl font-semibold">{policy.title}</h2>
              </div>
              <p className="text-gray-700">{policy.content}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="mt-12 text-center" variants={fadeInUp}>
          <p className="text-gray-700 mb-4">
            For more detailed information about our privacy practices, please
            read our full privacy policy.
          </p>
          <Link href="/full-privacy-policy">
            <motion.button
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Read Full Policy
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Privacy;
