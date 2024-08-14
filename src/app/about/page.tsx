"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Mail, Github, Linkedin, Target } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
};

const staggerChildren: Variants = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800">
      <motion.main
        className="container mx-auto px-4 py-16"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <motion.section className="text-center mb-20" variants={fadeInUp}>
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 drop-shadow-sm">
            About EmailAdminer
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-700 drop-shadow-sm">
            A solo project dedicated to simplifying email management and helping
            you reclaim control of your inbox.
          </p>
        </motion.section>

        <motion.section className="my-32 relative" variants={fadeInUp}>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transform -skew-y-6 shadow-xl"></div>
          <div className="relative bg-white py-12 px-6 md:px-12 lg:px-16 shadow-lg rounded-lg max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <Target size={40} className="text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">My Mission</h2>
            </div>
            <p className="text-xl leading-relaxed text-gray-700 text-center">
              As the creator of EmailAdminer, my goal is to revolutionize inbox
              management. I'm committed to empowering users to effortlessly
              declutter their emails, saving time and reducing stress. This
              innovative tool is designed to streamline your email experience,
              allowing you to focus on what truly matters.
            </p>
            <p className="text-xl font-semibold text-blue-600 mt-6 text-center">
              Take control of your inbox and boost your productivity with
              EmailAdminer.
            </p>
          </div>
        </motion.section>

        <motion.section variants={fadeInUp} className="mb-20">
          <h2 className="text-3xl font-semibold mb-10 text-center text-gray-800">
            Meet the Creator
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-40 h-40 mb-6 md:mb-0 md:mr-8 relative rounded-full border-4 border-blue-100 flex-shrink-0">
                <Image
                  src="/profile.jpg"
                  alt="Marc Tyson CLERBERT"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full w-full h-full"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                  Marc Tyson CLERBERT
                </h3>
                <p className="text-blue-600 mb-4">Founder & Developer</p>
                <p className="text-gray-600 mb-4">
                  Passionate about creating efficient solutions for everyday
                  problems. With EmailAdminer, I'm on a mission to make email
                  management simple and stress-free.
                </p>
                <div className="flex space-x-4">
                  <Link
                    href="mailto:marctysonclebert9@gmail.com"
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    <Mail size={20} />
                  </Link>
                  <Link
                    href="https://github.com/clebertmarctyson"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    <Github size={20} />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/marc-tyson-clebert-a399ba177"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    <Linkedin size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section className="text-center" variants={fadeInUp}>
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">
            Join the Journey
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 text-gray-700">
            While EmailAdminer is a solo project, I'm always open to feedback
            and collaboration. If you're excited about the future of email
            management or have ideas to share, I'd love to hear from you!
          </p>
          <motion.a
            className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/contact"
          >
            Get in Touch
          </motion.a>
        </motion.section>
      </motion.main>
    </div>
  );
};

export default About;
