import SignInButton from "@/components/SignInButton";
import SignOutButton from "@/components/SignOutButton";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { getAuthSession } from "@/lib/auth";

type AsideBarProps = {
  children: React.ReactNode;
};

const AsideBar = async ({ children }: AsideBarProps) => {
  const session = await getAuthSession();

  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent className="w-72 flex flex-col gap-4 justify-between">
        <SheetHeader className="flex flex-col gap-2 mt-4">
          <SheetTitle>Account</SheetTitle>
          <SheetDescription className="flex flex-col gap-1">
            <p className="text-sm text-gray-900">{session?.user?.name}</p>
            <p className="text-xs text-gray-500 font-bold">
              {session?.user?.email}
            </p>
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <div className="w-full flex justify-center">
            <SignOutButton />
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default AsideBar;
