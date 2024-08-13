"use client";

import { LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

const SignInButton = () => {
  return (
    <Button
      variant={"default"}
      className="flex items-center"
      onClick={async () => {
        await signIn();
      }}
    >
      <LogIn size={24} />
      <span className="ml-2">Sign In</span>
    </Button>
  );
};

export default SignInButton;
