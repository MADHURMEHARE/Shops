"use client";

import useNetworkStatus from "@/hooks/useNetworkStatus";

export default function NetworkStatusProvider() {
  const isOnline = useNetworkStatus();

  if (isOnline) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        background: "#ff4d4f",
        color: "white",
        padding: "10px 20px",
        borderRadius: "8px",
        zIndex: 9999,
      }}
    >
      ⚠️ You are offline
    </div>
  );
}