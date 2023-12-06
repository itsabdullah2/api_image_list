import { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    onSubmit(term);
    setTerm(""); // Clear Input after Submit
  };
  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div className="w-full mb-[15px] p-[10px] border rounded-md ">
      <form onSubmit={handleFormSubmit} className="flex flex-col">
        <label className="font-medium text-xl mb-[5px]">
          Enter Search Term
        </label>
        <input
          value={term}
          onChange={handleChange}
          className="border p-[10px] focus:outline-none rounded-[4px]"
          placeholder="Enter your term"
        />
      </form>
    </div>
  );
};

export default SearchBar;
