"use client";
import { ChevronsLeft } from "lucide-react"
export const Navigation = () => {
    return(
        <>
            <aside
                className="group/sidebar h-full bg-secondary 
                overscroll-y-auto relative flex w-60 flex-col z-[999999"
            >
                <div>
                    <ChevronsLeft />
                </div>
                <div>
                    <p>Action items</p>
                </div>
                <div className="mt-4">
                    <p>Documents</p>
                </div>
                <div
                className="opacity-0 group-hover/sidebar:opacity-100
                 transition cursor-ew-resize absolute h-full
                  w-1 bg-primary/10 right-0 top-0"
                />

                
            </aside>
        </>
    )
}