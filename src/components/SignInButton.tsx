"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

type SignInButtonProps = {
  text: string;
};

const SignInButton = ({ text }: SignInButtonProps) => {
  return (
    <Button
      variant="default"
      className="flex-1 flex items-center py-1 px-4 rounded-md text-lg font-semibold hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
      onClick={async () => {
        await signIn();
      }}
    >
      {text}
    </Button>
  );
};

export default SignInButton;
