import { useRef } from "react";

export default function TextAreaField({ label, id, value, ...props }) {
  const textareaRef = useRef(null);

  const handleFocus = () => {
    textareaRef.current?.focus();
  };

  return (
    <fieldset
      className="relative border border-gray-300 rounded-md px-3 pt-2 pb-1"
      onClick={handleFocus}
    >
      <legend className="text-sm text-gray-500 px-1">{label}</legend>
      <textarea
        id={id}
        ref={textareaRef}
        value={value}
        className="w-full outline-none border-none text-sm bg-transparent resize-vertical min-h-[80px] resize-none"
        placeholder=""
        {...props}
      />
    </fieldset>
  );
}
