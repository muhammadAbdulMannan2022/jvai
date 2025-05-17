import { useRef } from "react";

export default function InputField({
  label,
  id,
  type = "text",
  value,
  ...props
}) {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <fieldset
      className="relative border border-gray-300 rounded-md px-3 pt-2 pb-1"
      onClick={handleFocus}
    >
      <legend className="text-sm text-gray-500 px-1">{label}</legend>
      <input
        ref={inputRef}
        type={type}
        id={id}
        value={value}
        className="w-full outline-none border-none text-sm bg-transparent placeholder-gray-400"
        placeholder=""
        {...props}
      />
    </fieldset>
  );
}
