"use client";

import React from "react";
import SignInButton from "@/components/SignInButton";
import Link from "next/link";

import { motion, Variants } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { pricingPlans, steps } from "@/lib/data";

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
};

const staggerChildren: Variants = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const Home = () => {
  const { data: session, status } = useSession();

  const getActionButton = (planName: string) => {
    if (status === "loading") return <Button disabled>Loading...</Button>;

    if (status === "authenticated") {
      if (
        session?.user?.plan?.toLocaleLowerCase() ===
        planName?.toLocaleLowerCase()
      ) {
        return (
          <Link href="/dashboard">
            <Button variant="default">Go to Dashboard</Button>
          </Link>
        );
      } else if (planName !== "Free") {
        return <Button variant="default">Upgrade Plan</Button>;
      }
    }

    return <SignInButton text="Choose Plan" />;
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800">
      <motion.section
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <section className="container mx-auto px-6 py-24 text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
            variants={fadeInUp}
          >
            Declutter Your Inbox
          </motion.h1>
          <motion.p
            className="text-2xl mb-10 text-gray-600"
            variants={fadeInUp}
          >
            Effortlessly delete unwanted emails in bulk with EmailAdminer.
          </motion.p>
          <motion.div
            className="flex justify-center mx-auto max-w-fit"
            variants={fadeInUp}
          >
            {status === "authenticated" ? (
              <Button
                variant="default"
                className="flex-1 flex items-center py-1 px-4 rounded-md text-lg font-semibold hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
              >
                <Link href="/dashboard">Go to Dashboard</Link>
              </Button>
            ) : (
              <SignInButton text="Get Started" />
            )}
          </motion.div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <motion.h2
              className="text-4xl font-bold text-center mb-12"
              variants={fadeInUp}
            >
              Powerful Email Deletion
            </motion.h2>
            <motion.div
              className="flex flex-col md:flex-row items-center justify-between"
              variants={fadeInUp}
            >
              <div className="md:w-1/2 mb-10 md:mb-0">
                <ul className="space-y-4">
                  <motion.li
                    className="flex items-center text-xl"
                    variants={fadeInUp}
                  >
                    <CheckCircle className="w-6 h-6 mr-2 text-green-500" />
                    Delete emails in bulk based on sender
                  </motion.li>
                  <motion.li
                    className="flex items-center text-xl"
                    variants={fadeInUp}
                  >
                    <CheckCircle className="w-6 h-6 mr-2 text-green-500" />
                    Set custom filters for precise email selection
                  </motion.li>
                  <motion.li
                    className="flex items-center text-xl"
                    variants={fadeInUp}
                  >
                    <CheckCircle className="w-6 h-6 mr-2 text-green-500" />
                    Preview emails before deletion for safety
                  </motion.li>
                </ul>
              </div>
              <div className="md:w-1/2 md:pl-12">
                <p className="text-xl mb-6">
                  Our intuitive interface makes it easy to manage your inbox.
                  With powerful filters and bulk delete options, you can quickly
                  remove unwanted emails and keep your inbox organized.
                </p>
                <p className="text-xl">
                  EmailAdminer puts you in control, allowing you to efficiently
                  manage your email without the hassle of manual deletion.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.h2
              className="text-4xl font-bold text-center mb-12"
              variants={fadeInUp}
            >
              How It Works
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={staggerChildren}
            >
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                  variants={fadeInUp}
                >
                  <div className="flex items-center justify-center mb-4">
                    <div className="bg-blue-500 text-white rounded-full p-3 mr-4">
                      {React.createElement(step.icon, { size: 24 })}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p>{step.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <motion.h2
              className="text-4xl font-bold text-center mb-12"
              variants={fadeInUp}
            >
              Choose Your Plan
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={staggerChildren}
            >
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col"
                  variants={fadeInUp}
                >
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <p className="text-4xl font-bold mb-6">
                    {plan.price}
                    <span className="text-sm font-normal">/month</span>
                  </p>
                  <ul className="mb-8 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center mb-2">
                        <CheckCircle
                          className="text-green-500 mr-2"
                          size={20}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {getActionButton(plan.name)}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <motion.div
            className="container mx-auto px-6 text-center"
            variants={staggerChildren}
          >
            <motion.h2 className="text-4xl font-bold mb-6" variants={fadeInUp}>
              Ready to Clean Up Your Inbox?
            </motion.h2>
            <motion.p className="text-2xl mb-10" variants={fadeInUp}>
              Start deleting unwanted emails efficiently today.
            </motion.p>
            <motion.div
              className="flex justify-center mx-auto max-w-fit"
              variants={fadeInUp}
            >
              {status === "authenticated" ? (
                <Link href="/dashboard">
                  <Button variant="default">Go to Dashboard</Button>
                </Link>
              ) : (
                <SignInButton text="Get Started" />
              )}
            </motion.div>
          </motion.div>
        </section>
      </motion.section>
    </main>
  );
};

export default Home;
