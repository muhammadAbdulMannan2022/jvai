import React from "react";
import { Link } from "react-router";

export default function Button({
  text,
  onClick,
  to,
  type = "button",
  icon,
  className,
}) {
  const baseClasses = `bg-gradient-to-t from-blue-800 to-blue-400 text-white px-4 py-2 rounded-full hover:shadow-xl transition text-center inline-flex items-center justify-center gap-1.5 ${className}`;

  const content = (
    <>
      <span className="whitespace-nowrap">{text}</span>
      {icon && <span className="text-lg leading-none">{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses}>
      {content}
    </button>
  );
}
