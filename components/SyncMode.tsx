"use client";
 
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useMode } from "@/lib/mode-context";
 
export default function SyncMode() {
  const pathname = usePathname();
  const { setMode } = useMode();
 
  useEffect(() => {
    if (pathname === "/recruiter") {
      setMode("recruiter");
    } else if (pathname === "/client") {
      setMode("client");
    } else if (pathname === "/entry") {
      setMode("idle");
    }
  }, [pathname, setMode]);
 
  return null;
}
