"use client";

import { useEffect, useState } from "react";
import "@/app/style/globals.css";
import s from "@/app/components/ShareButtons.module.css";
import X from "../icons/X";
import Linkedin from "../icons/Linkedin";
import Whatsapp from "../icons/Whatsapp";
import Facebook from "../icons/Facebook";
import SimpleLink from "../icons/SimpleLink";
import Telegram from "../icons/Telegram";

const ShareButtons = ({ hasMessage }: { hasMessage?: boolean }) => {
  const [currentUrl, setCurrentUrl] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  if (!currentUrl) return null;

  const encodedUrl = encodeURIComponent(currentUrl);
  const text = encodeURIComponent("Dai un'occhiata a questo articolo!");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className={s.container}>
      {hasMessage && <p>Found it interesting? Share it on:</p>}

      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook className="icon" />
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${text}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <X className="icon" />
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin className="icon" />
      </a>
      <a
        href={`https://wa.me/?text=${text}%20${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Whatsapp className="icon" />
      </a>
      <a
        href={`https://t.me/share/url?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Telegram className="icon" />
      </a>
      <button onClick={handleCopy} title="Copy URL on clipboard">
        <SimpleLink className="icon" />
        {copied && <i>✓ Link copied!</i>}
      </button>
    </div>
  );
};

export default ShareButtons;
