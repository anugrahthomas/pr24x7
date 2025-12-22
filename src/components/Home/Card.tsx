import type { ReactNode } from "react";

const Card = ({ logo, children }: { logo: string; children: ReactNode }) => {
  return (
    <div className="px-4 py-2 md:p-0 flex gap-2 items-center">
      <div>
        <img className="md:h-20 h-14" src={logo} alt="" />
      </div>
      <div className="text-black text-sm md:text-lg">{children}</div>
    </div>
  );
};
export default Card;
