import type { HeaderType } from "../utils/types";

export default function Header({ children }: HeaderType) {
  return (
    <div className="w-full h-[270px] md:h-[220px] flex flex-col gap-3 items-center bg-[url(/images/pattern-bg-mobile.png)] md:bg-[url(/images/pattern-bg-desktop.png)] bg-cover bg-no-repeat bg-center pt-4 relative">
      <h1 className="text-center text-white text-[20px]">
        IP Address Tracker
      </h1>
      {children}
    </div>
  );
}
