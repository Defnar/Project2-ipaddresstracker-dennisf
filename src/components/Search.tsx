import { isIP } from "is-ip";
import { useState } from "react";

interface SearchProps {
  submitSearch: (search: string) => void;
}

export default function Search({ submitSearch }: SearchProps) {
  const [searchInput, setSearchInput] = useState<string>("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const submitData = (
    e:
      | React.KeyboardEvent<HTMLInputElement>
      | React.MouseEvent<HTMLButtonElement>
  ) => {
    if (
      (e.type === "keydown" && (e as React.KeyboardEvent).key === "Enter") ||
      e.type === "click"
    ) {
      if (searchInput === "" || !searchInput) return;
      const domainRegex = /^(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+)\/?$/;
      if (!isIP(searchInput.trim()) && !domainRegex.test(searchInput.trim())) {
        alert("Ensure the search is a valid ip/domain");
        return;
      }
      submitSearch(searchInput.trim());
      setSearchInput("");
    }
  };

  return (
    <div className="flex flex-row  mx-10 px-10 w-full justify-center items-center h-10">
      <input
      className="bg-white  h-full grow max-w-[400px] rounded-l-md w-80 px-3 py-1 shrink"
        type="text"
        value={searchInput}
        placeholder="search by ip or domain"
        aria-label="search by ip or domain"
        onChange={handleInput}
        onKeyDown={submitData}
      />
      <button type="button" 
      className="bg-black px-3 h-full shrink-0 rounded-r-lg"
      aria-label="submit search" onClick={submitData}>
        <img src="../images/icon-arrow.svg" alt="submit button"/>
      </button>
    </div>
  );
}
