import React, { useState } from "react";

interface Props {
  options: string[];
  onSelect: any;
  selected: string;
}

function LanguageDropdown(props: Props) {
  const [visible, toggleVisibility] = useState(false);
  const { options, onSelect, selected } = props;

  return (
    <div>
      <button className="block" onClick={() => toggleVisibility(!visible)}>
        Select Language: <b>{selected}</b>
      </button>
      {visible && (
        <div className="w-48 bg-gray-100 rounded-lg py-2 shadow my-3">
          {options.map(option => (
            <div
              className="block px-4 text-left py-2 text-gray-800 hover:bg-indigo-500 hover:text-white hover:cursor-pointer"
              onClick={() => {
                onSelect(option);
                toggleVisibility(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageDropdown;
