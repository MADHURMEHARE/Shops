"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Logo() {
  const text = "Anandwan";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDeleting) {
        setDisplayText(text.slice(0, index + 1));
        setIndex((prev) => prev + 1);

        if (index === text.length) {
          setIsDeleting(true);
        }
      } else {
        setDisplayText(text.slice(0, index - 1));
        setIndex((prev) => prev - 1);

        if (index === 0) {
          setIsDeleting(false);
        }
      }
    }, isDeleting ? 100 : 200);

    return () => clearInterval(interval);
  }, [index, isDeleting]);

  return (
    <Link
      href="/"
      className="text-2xl font-bold text-green-600 flex items-center"
    >
      {displayText}
      <span className="ml-1 animate-pulse">|</span>
    </Link>
  );
}