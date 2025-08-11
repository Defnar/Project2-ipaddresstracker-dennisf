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
      console.log("button pressed");
      const domainRegex = /^(?:www\.)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
      if (!isIP(searchInput.trim()) && !domainRegex.test(searchInput.trim())) {
        alert("Ensure the search is a valid ip/domain");
        return;
      }
      submitSearch(searchInput.trim());
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchInput}
        placeholder="search by ip or domain"
        aria-label="search for ip or domain"
        onChange={handleInput}
        onKeyDown={submitData}
      />
      <button type="button" aria-label="submit userInput" onClick={submitData}>
        change to arrow later
      </button>
    </div>
  );
}
