import React, { useEffect } from "react";
import BlogEditor from "./TextEditor";

export default function BlogEdit() {
  useEffect(() => {
    window.scrollBy(0, 300);
  }, []);
  return (
    <div className="w-full max-w-7xl">
      <BlogEditor />
    </div>
  );
}
