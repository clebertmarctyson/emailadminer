"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Book, Shield, AlertCircle, HelpCircle } from "lucide-react";
import Link from "next/link";

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const staggerChildren: Variants = {
  animate: { transition: { staggerChildren: 0.05 } },
};

const Terms = () => {
  const termsItems = [
    {
      title: "Acceptance of Terms",
      icon: Book,
      content:
        "By accessing or using EmailAdminer, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our service.",
    },
    {
      title: "Use License",
      icon: Shield,
      content:
        "We grant you a personal, non-transferable, non-exclusive license to use EmailAdminer for your personal or business email management needs. This license does not allow you to modify or copy our service, use it for any commercial purpose, or attempt to decompile or reverse engineer any part of the software.",
    },
    {
      title: "Disclaimer",
      icon: AlertCircle,
      content:
        "EmailAdminer is provided 'as is' and 'as available' without any warranties, either express or implied. We do not guarantee that our service will always be safe, secure or error-free, or that it will always function without disruptions, delays or imperfections.",
    },
    {
      title: "Limitations",
      icon: HelpCircle,
      content:
        "In no event shall EmailAdminer be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use our service, even if we have been notified of the possibility of such damage.",
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
          Terms of Service
        </motion.h1>

        <motion.p
          className="text-lg text-gray-700 mb-8 text-center"
          variants={fadeInUp}
        >
          Last updated: {new Date().toLocaleDateString()}
        </motion.p>

        <motion.div className="space-y-8">
          {termsItems.map((item, index) => (
            <motion.section
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              variants={fadeInUp}
            >
              <div className="flex items-center mb-4">
                <item.icon className="h-8 w-8 text-blue-600 mr-4" />
                <h2 className="text-2xl font-semibold text-blue-600">
                  {item.title}
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed">{item.content}</p>
            </motion.section>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200"
          variants={fadeInUp}
        >
          <p className="text-gray-700 text-center">
            By using EmailAdminer, you acknowledge that you have read and
            understood these Terms of Service and agree to be bound by them.
          </p>
        </motion.div>

        <motion.p
          className="mt-8 text-center text-gray-600"
          variants={fadeInUp}
        >
          If you have any questions about these Terms, please contact us at{" "}
          <Link
            href="mailto:marctysonclebert9@gmail.com"
            className="text-blue-600"
          >
            marctysonclebert9@gmail.com
          </Link>{" "}
          .
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Terms;
