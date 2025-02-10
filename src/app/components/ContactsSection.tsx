import "./../globals.css";
import s from "./styles/contactsSection.module.css";
import t from "./../typography.module.css";
import l from "./../layout.module.css";
import { useState } from "react";

export default function ContactsSection() {
  const [isCopied, setIsCopied] = useState<boolean | undefined>(undefined);

  const copy = (text: string): void => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
  };

  return (
    <>
      <h1 className={t.h1}>Let&apos;s get in touch!</h1>
      <br /> <br />
      <br />
      <p className={t.p}>Send me an email at:</p>
      <br />
      <div>
        <button className={s.email} onClick={() => copy("nadguar@proton.me")}>
          {/* Forse è meglio il mailto over this thing? */}
          <p className={t.p}>nadguar@proton.me</p>
        </button>
        <span className={s.copied}>{isCopied && <span>Copied!</span>}</span>
      </div>
      <br />
      <p className={t.p}>or</p>
      <br />
      <div className={l.flex}>
        <p className={t.p}>message me on: </p>
        <a
          href="https://www.linkedin.com/in/nadia-guarracino17/"
          target="blank"
        >
          Linkedin
        </a>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* Sposta nel footer */}
      <a href="https://pngtree.com/freepng/hand-drawn-green-gems-illustration_4531393.html">
        Png image from pngtree.com/
      </a>
    </>
  );
}
