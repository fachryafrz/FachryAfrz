import { IonIcon } from "@ionic/react";
import * as Icons from "ionicons/icons";
import { useEffect, useState } from "react";

// JSON
import socials from "../json/socials.json";
import personal from "../json/personal.json";
import { motion as m } from "framer-motion";

export default function Socials() {
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    const getIcons = () => {
      setIcons(socials.map((item) => Icons[item.icon]));
    };

    getIcons();
  }, []);

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25, delay: 1.75 }}
      className="hidden fixed bottom-0 left-1/2 -translate-x-1/2 lg:flex justify-between w-full max-w-7xl pointer-events-none"
    >
      <div className="flex flex-col items-center justify-between text-accent text-2xl after:h-[90px] after:w-[1px] after:bg-accent px-2 pointer-events-auto">
        {socials.map((item, index) => {
          return (
            <a
              key={index}
              href={item.url}
              target="_blank"
              className="flex hover:-translate-y-1 hover:text-white transition-all focus:outline-0 focus:-translate-y-1 focus:text-white"
              rel="noreferrer"
            >
              <IonIcon icon={icons[index]} />
            </a>
          );
        })}
      </div>
      <div className="flex flex-col items-center after:h-[90px] after:w-[1px] after:bg-accent text-accent gap-8 px-2 pointer-events-auto">
        <a
          href={`mailto:${personal.email}`}
          target="_blank"
          className="flex writing-mode-vertical-lr hover:-translate-y-1 hover:text-white transition-all text-sm tracking-wider font-fira-code focus:outline-0 focus:-translate-y-1 focus:text-white"
          rel="noreferrer"
        >
          {personal.email}
        </a>
      </div>
    </m.div>
  );
}
