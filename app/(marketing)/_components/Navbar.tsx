"use client";

import Link from "next/link";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Spinner } from "@/components/spinner";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

import { Button } from "@/components/ui/button";

{
    // oie
  }
export const Navbar = () => {
    const { isAuthenticated, isLoading} = useConvexAuth();
    const scrolled = useScrollTop();
    return (
        <div className={cn(
          "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6",
          scrolled && "border-b shadow-sm"
        )}>
          <Logo />
    
          <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        {isLoading && (
          <Spinner />
        )}
                {!isAuthenticated && !isLoading && (
                    <>
                        <SignInButton mode="modal">
                            <Button variant="ghost" size="sm">
                                Log in
                            </Button>
                        </SignInButton>
                        <SignInButton  mode="modal">
                            <Button variant="ghost" className="text-white bg-pink-500" size="sm">
                                Get Notes Free
                            </Button>
                        </SignInButton>
                    </>
                )}
                {isAuthenticated&&!isLoading && (
                    <>
                        <Button variant="ghost" size="sm" asChild>
                            <Link href="/documments">
                                Enter Notes
                            </Link>
                        </Button>
                        <UserButton
                        afterSignOutUrl="/"
                        />
                    </>
                )}
                <ModeToggle />
            </div>
        </div>
    )
}