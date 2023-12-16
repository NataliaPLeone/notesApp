"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button"

export const Heading = () => {
    return(
        <div className="max-w-3xl space-y-4">

            <h1 className="text-3xl sm:text-5xl md:text-6xl">
                Bem vindo ao <span className="underline">Notes app</span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                Organize suas informações de maneira fácil e rápida.
            </h3>

            <Button variant="ghost" className="text-white bg-pink-500">
                Log in
                <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
        </div>


    )
}