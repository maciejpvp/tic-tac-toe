import React, { useState, useEffect } from "react";

interface Option {
  value: string;
  label: string;
}

interface ButtonGroupSelectProps {
  options: Option[];
  label: string;
  defaultValue?: string;
  //eslint-disable-next-line
  onChange?: (value: string) => void;
}

const ButtonGroupSelect: React.FC<ButtonGroupSelectProps> = ({
  options,
  label,
  defaultValue,
  onChange,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(
    defaultValue || null
  );

  useEffect(() => {
    if (defaultValue) {
      setSelectedOption(defaultValue);
    }
  }, [defaultValue]);

  const handleSelect = (value: string) => {
    setSelectedOption(value);
    if (onChange) onChange(value);
  };

  return (
    <div className="flex flex-col justify-center content-center">
      <label className="block text-lg font-medium text-gray-300">{label}</label>
      <div>
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => handleSelect(option.value)}
            className={`px-3 py-1 rounded focus:outline-none ${
              selectedOption === option.value
                ? "bg-stone-600 text-white"
                : "bg-stone-800 text-stone-300 hover:bg-stone-700"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonGroupSelect;
