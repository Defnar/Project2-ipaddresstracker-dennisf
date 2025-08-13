import type { HeaderType } from "../utils/types";

export default function Header({ children }: HeaderType) {
  return (
    <div className="w-full h-[260px] flex flex-col gap-2 items-center bg-[url(/images/pattern-bg-mobile.png)] bg-cover bg-no-repeat bg-center pt-4 relative">
      <h1 className="text-center text-white tracking-wider">
        IP Address Tracker
      </h1>
      {children}
    </div>
  );
}
