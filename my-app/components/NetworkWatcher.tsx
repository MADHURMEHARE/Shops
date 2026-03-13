"use client";

import useNetworkStatus from "@/hooks/useNetworkStatus";

export default function NetworkWatcher() {
  useNetworkStatus();
  return null;
}