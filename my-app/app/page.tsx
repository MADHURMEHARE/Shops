"use client";

import OfflinePopup from "../components/OfflinePopup";
import useNetworkStatus from "../hooks/useNetworkStatus";

export default function Page() {

  const isOnline = useNetworkStatus();

  return (
    <>
      <OfflinePopup isOnline={isOnline} />

      <h1>Anandwan</h1>
      <p>Your services platform</p>
    </>
  );
}