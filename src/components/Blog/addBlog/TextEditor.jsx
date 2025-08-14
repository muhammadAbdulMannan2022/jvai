"use client";

import { useRef, useState } from "react";
import {
    Bold, Italic, Underline, ImageIcon,
    Heading1, Heading2,
    AlignLeft, AlignCenter, AlignRight,
    Send, X
} from "lucide-react";

export default function BlogEditor() {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [isDragOver, setIsDragOver] = useState(false);
    const [name, setName] = useState("");
    const [employeeId, setEmployeeId] = useState("");
    const contentRef = useRef(null);

    const applyStyle = (command, value = null) => {
        document.execCommand(command, false, value);
        contentRef.current.focus();
    };

    const handleImageChange = (file) => {
        if (file && file.type.startsWith("image/")) {
            setImage(file);
            const reader = new FileReader();
            reader.onload = (e) => setImagePreview(e.target.result);
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-10">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-8">
                    {/* Title Input */}
                    <input
                        type="text"
                        placeholder="Your story title..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full text-4xl font-bold border-none outline-none bg-transparent mb-6 placeholder:text-slate-400"
                    />

                    {/* Image Upload */}
                    {imagePreview ? (
                        <div className="relative group mb-6">
                            <img
                                src={imagePreview}
                                alt="Preview"
                                className="w-full h-64 object-cover rounded-lg shadow"
                            />
                            <button
                                onClick={() => {
                                    setImage(null);
                                    setImagePreview(null);
                                }}
                                className="absolute top-3 right-3 bg-black/50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                    ) : (
                        <label
                            className={`flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer transition ${isDragOver
                                    ? "border-blue-400 bg-blue-50"
                                    : "border-slate-300 hover:border-slate-400"
                                }`}
                            onDragOver={(e) => {
                                e.preventDefault();
                                setIsDragOver(true);
                            }}
                            onDragLeave={() => setIsDragOver(false)}
                            onDrop={(e) => {
                                e.preventDefault();
                                setIsDragOver(false);
                                handleImageChange(e.dataTransfer.files[0]);
                            }}
                        >
                            <ImageIcon className="w-10 h-10 text-slate-400 mb-2" />
                            <p className="text-slate-600">Add a cover image</p>
                            <input
                                type="file"
                                className="hidden"
                                accept="image/*"
                                onChange={(e) => handleImageChange(e.target.files[0])}
                            />
                        </label>
                    )}

                    {/* Toolbar */}
                    <div className="sticky top-16 z-10 flex flex-wrap gap-1 bg-slate-50 border border-slate-200 rounded-lg p-2 shadow-sm mb-6">
                        {[{ icon: Bold, cmd: "bold" }, { icon: Italic, cmd: "italic" }, { icon: Underline, cmd: "underline" }]
                            .map(({ icon: Icon, cmd }, i) => (
                                <button
                                    key={i}
                                    onClick={() => applyStyle(cmd)}
                                    className="p-2 rounded hover:bg-slate-200"
                                >
                                    <Icon className="w-4 h-4" />
                                </button>
                            ))}
                        <span className="w-px bg-slate-300 mx-1" />
                        {[{ icon: Heading1, cmd: "formatBlock", val: "h1" }, { icon: Heading2, cmd: "formatBlock", val: "h2" }]
                            .map(({ icon: Icon, cmd, val }, i) => (
                                <button
                                    key={i}
                                    onClick={() => applyStyle(cmd, val)}
                                    className="p-2 rounded hover:bg-slate-200"
                                >
                                    <Icon className="w-4 h-4" />
                                </button>
                            ))}
                        <span className="w-px bg-slate-300 mx-1" />
                        {[{ icon: AlignLeft, cmd: "justifyLeft" }, { icon: AlignCenter, cmd: "justifyCenter" }, { icon: AlignRight, cmd: "justifyRight" }]
                            .map(({ icon: Icon, cmd }, i) => (
                                <button
                                    key={i}
                                    onClick={() => applyStyle(cmd)}
                                    className="p-2 rounded hover:bg-slate-200"
                                >
                                    <Icon className="w-4 h-4" />
                                </button>
                            ))}
                    </div>

                    {/* Editable Content */}
                    <div
                        ref={contentRef}
                        contentEditable
                        className="min-h-[400px] p-4 border border-slate-200 rounded-lg bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-400 prose max-w-none"
                    >
                        Start writing here...
                    </div>

                    {/* Name & Employee ID */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-slate-400"
                        />
                        <input
                            type="text"
                            placeholder="Employee ID"
                            value={employeeId}
                            onChange={(e) => setEmployeeId(e.target.value)}
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-slate-400"
                        />
                    </div>
                </div>

                {/* Footer */}
                <div className="px-8 py-4 border-t border-slate-200 flex justify-end">
                    <button
                        onClick={() => {
                            const content = contentRef.current?.innerHTML || "";
                            console.log({
                                title,
                                image,
                                content,
                                name,
                                employeeId,
                            });
                        }}
                        className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg hover:from-green-700 hover:to-green-800 transition"
                    >
                        <Send className="w-4 h-4" /> Publish Story
                    </button>
                </div>
            </div>
        </div>
    );
}
