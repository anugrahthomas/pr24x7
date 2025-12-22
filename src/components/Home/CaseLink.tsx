import { Dot } from "lucide-react";
import { useState } from "react";

const links: string[] = [
  "View All",
  "Business",
  "Crisis",
  "Entertainment",
  "Events",
];

const CaseLink = () => {
  const [lIndex, setLIndex] = useState<number>(0);
  const lHandler = (index: number) => {
    setLIndex(index);
  };
  return (
    <div className="pt-8 text-black flex items-center justify-center gap-2">
      {links.map((link, index) => {
        return (
          <>
            {index != links.length - 1 ? (
              <>
                <button
                  className={`${
                    lIndex === index ? "text-orange-400" : ""
                  } tracking-wide cursor-pointer text-sm md:text-md`}
                  key={index}
                  onClick={() => lHandler(index)}
                >
                  {link}
                </button>
                <Dot />
              </>
            ) : (
              <button
                className={`${
                  lIndex === index ? "text-orange-400" : ""
                } tracking-wide cursor-pointer text-sm md:text-md`}
                key={index}
                onClick={() => lHandler(index)}
              >
                {link}
              </button>
            )}
          </>
        );
      })}
    </div>
  );
};
export default CaseLink;
