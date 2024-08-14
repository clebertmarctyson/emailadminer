"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";
import Link from "next/link";

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
};

const staggerChildren: Variants = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 text-gray-800 py-16">
      <motion.div
        className="container mx-auto px-4 max-w-5xl"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <motion.h1
          className="text-6xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 drop-shadow-sm"
          variants={fadeInUp}
        >
          Get in Touch
        </motion.h1>

        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div className="lg:w-1/2" variants={fadeInUp}>
            <form className="space-y-6 bg-white p-8 rounded-2xl shadow-lg">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            className="lg:w-1/2 bg-white p-8 rounded-2xl shadow-lg"
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-semibold mb-8 text-gray-800">
              Contact Information
            </h2>
            <div className="space-y-6">
              <motion.div className="flex items-center" whileHover={{ x: 5 }}>
                <Mail className="h-6 w-6 text-blue-600 mr-4" />
                <Link
                  href="mailto:marctysonclebert9@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  marctysonclebert9@gmail.com
                </Link>
              </motion.div>
              <motion.div className="flex items-center" whileHover={{ x: 5 }}>
                <Phone className="h-6 w-6 text-blue-600 mr-4" />
                <Link
                  href="tel:+19174710895"
                  className="text-blue-600 hover:underline"
                >
                  +1 (917) 471-0895
                </Link>
              </motion.div>
              <motion.div className="flex items-center" whileHover={{ x: 5 }}>
                <MapPin className="h-6 w-6 text-blue-600 mr-4" />
                <Link
                  href="https://maps.google.com/?q=12360 83rd Ave, Jamaica, NY 11415"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  12360 83rd Ave, Jamaica, NY 11415
                </Link>
              </motion.div>
            </div>
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                {[
                  {
                    name: "Twitter",
                    href: "https://x.com/ClebertTyson",
                    icon: Twitter,
                    color: "bg-blue-400",
                  },
                  {
                    name: "Facebook",
                    href: "https://www.facebook.com/marctyson.clebert.9",
                    icon: Facebook,
                    color: "bg-blue-600",
                  },
                  {
                    name: "Instagram",
                    href: "https://www.instagram.com/marctysonclebert9",
                    icon: Instagram,
                    color: "bg-pink-500",
                  },
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} p-3 rounded-full text-white transition duration-300`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="sr-only">{social.name}</span>
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
