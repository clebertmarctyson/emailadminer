"use client";

import SessionProvider from "@/components/providers/SessionProvider";

type Props = {
  children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Providers;
