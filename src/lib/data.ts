import { LogIn, Inbox, Trash2 } from "lucide-react";

export const steps = [
  {
    title: "Sign In",
    description: "Sign in to your email account.",
    icon: LogIn,
  },
  {
    title: "Select Emails",
    description: "Choose emails to delete based on sender or subject.",
    icon: Inbox,
  },
  {
    title: "Delete Emails",
    description: "Delete emails in bulk with a single click.",
    icon: Trash2,
  },
];

export const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    features: ["Delete up to 100 emails/month"],
  },
  {
    name: "Pro",
    price: "$9.99",
    features: ["Delete up to 500 emails/month"],
  },
  {
    name: "Unlimited",
    price: "$29.99",
    features: ["Delete unlimited emails/month"],
  },
];
