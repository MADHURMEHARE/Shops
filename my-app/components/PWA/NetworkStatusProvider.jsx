"use client";

import { useEffect, useState } from "react";

export default function NetworkStatusProvider() {
  const [status, setStatus] = useState(null); 
  // null | "offline" | "online"

  useEffect(() => {
    const handleOffline = () => {
      setStatus("offline");
    };

    const handleOnline = () => {
      setStatus("online");

      // remove message after 3 seconds
      setTimeout(() => {
        setStatus(null);
      }, 3000);
    };

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  if (!status) return null;

  const styles = {
    position: "fixed",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    padding: "10px 20px",
    borderRadius: "8px",
    color: "white",
    zIndex: 9999,
    fontWeight: "500",
    background: status === "offline" ? "#ff4d4f" : "#52c41a"
  };

  return (
    <div style={styles}>
      {status === "offline"
        ? "⚠️ You are offline"
        : "✅ Back online"}
    </div>
  );
}