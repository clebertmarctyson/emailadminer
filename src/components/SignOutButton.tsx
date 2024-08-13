"use client";

import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

const SignOutButton = () => {
  return (
    <Button
      variant={"destructive"}
      className="flex-1 flex items-center"
      onClick={async () => {
        await signOut();
      }}
    >
      <LogOut size={24} />
      <span className="ml-2">Sign Out</span>
    </Button>
  );
};

export default SignOutButton;
