"use client";

import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

const SignOutButton = () => {
  return (
    <Button
      variant="destructive"
      className="flex-1 flex items-center py-1 px-4 rounded-full text-lg font-semibold hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
      onClick={async () => {
        await signOut();
      }}
    >
      Sign Out
    </Button>
  );
};

export default SignOutButton;
