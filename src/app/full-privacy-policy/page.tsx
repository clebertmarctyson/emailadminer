"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const staggerChildren: Variants = {
  animate: { transition: { staggerChildren: 0.05 } },
};

const FullPrivacyPolicyPage = () => {
  const policyItems = [
    {
      title: "Introduction",
      content:
        "This Privacy Policy outlines how EmailAdminer collects, uses, and protects your personal information when you use our email management services.",
    },
    {
      title: "Information We Collect",
      content:
        "We may collect personal information such as your name, email address, and usage data when you use our services. We also collect non-personal information such as browser type and IP address.",
    },
    {
      title: "How We Use Your Information",
      content:
        "We use your information to provide and improve our services, communicate with you about your account, and ensure the security of our platform. We may also use your data for analytics purposes to enhance user experience.",
    },
    {
      title: "Data Protection",
      content:
        "We implement various security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure socket layer technology, and regular security audits.",
    },
    {
      title: "Your Rights",
      content:
        "You have the right to access, correct, or delete your personal information. You may also request a copy of your data or ask us to restrict its processing. To exercise these rights, please contact us at privacy@emailadminer.com.",
    },
    {
      title: "Cookies and Tracking Technologies",
      content:
        "We use cookies and similar tracking technologies to enhance your browsing experience and collect information about how you use our site. You can control cookie settings through your browser preferences.",
    },
    {
      title: "Third-Party Services",
      content:
        "We may use third-party services that collect, monitor and analyze user data to improve our service. These third parties have their own privacy policies addressing how they use such information.",
    },
    {
      title: "Changes to This Policy",
      content:
        "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'last updated' date at the top of this policy.",
    },
    {
      title: "Contact Us",
      content:
        "If you have any questions about this Privacy Policy, please contact us at privacy@emailadminer.com.",
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
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          variants={fadeInUp}
        >
          Full Privacy Policy
        </motion.h1>

        <motion.p className="text-lg text-gray-700 mb-8" variants={fadeInUp}>
          Last updated: {new Date().toLocaleDateString()}
        </motion.p>

        {policyItems.map((item, index) => (
          <motion.section key={index} className="mb-8" variants={fadeInUp}>
            <h2 className="text-2xl font-semibold mb-3 text-blue-600">
              {item.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">{item.content}</p>
          </motion.section>
        ))}

        <motion.div
          className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200"
          variants={fadeInUp}
        >
          <p className="text-gray-700 text-center">
            By using EmailAdminer, you agree to the collection and use of
            information in accordance with this policy.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FullPrivacyPolicyPage;
