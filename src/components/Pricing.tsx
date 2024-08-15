import { pricingPlans } from "@/lib/data";
import { motion } from "framer-motion";

import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
};

const staggerChildren = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const Pricing = () => {
  const session = useSession();

  return (
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
              <h3 className="text-2xl font-bold mb-4">{plan?.name}</h3>
              <p className="text-4xl font-bold mb-6">
                {plan?.price}
                <span className="text-sm font-normal">/month</span>
              </p>
              <ul className="mb-8 flex-grow">
                {plan?.features.map((feature, i) => (
                  <li key={i} className="flex items-center mb-2">
                    <CheckCircle className="text-green-500 mr-2" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={
                  session?.data?.user &&
                  plan?.name.toLocaleUpperCase() === "FREE".toLocaleUpperCase()
                    ? "outline"
                    : "default"
                }
                disabled={
                  session?.data?.user &&
                  plan?.name.toLocaleUpperCase() === "FREE".toLocaleUpperCase()
                }
              >
                {session?.data?.user &&
                plan?.name.toLocaleUpperCase() === "FREE".toLocaleUpperCase()
                  ? "Current Plan"
                  : session?.data?.user &&
                    plan?.name.toLocaleUpperCase() !==
                      "FREE".toLocaleUpperCase()
                  ? "Upgrade"
                  : "Get Started"}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
