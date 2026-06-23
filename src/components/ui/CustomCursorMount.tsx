"use client";

import dynamic from "next/dynamic";
import { useSyncExternalStore } from "react";

const CustomCursor = dynamic(() => import("./CustomCursor"), { ssr: false });

const QUERY = "(pointer: fine)";

function subscribe(callback: () => void) {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

export default function CustomCursorMount() {
  const enabled = useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => false,
  );

  return enabled ? <CustomCursor /> : null;
}
