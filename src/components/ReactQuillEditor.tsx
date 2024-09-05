"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // Import the Quill styles

// Dynamically import ReactQuill to prevent SSR issues
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }], // Explicitly define header levels
    [{ font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }], // Ensure ordered and bullet list options are defined
    [{ indent: "-1" }, { indent: "+1" }],
    [{ align: [] }],
    ["link", "image", "video"],
    ["clean"], // Clear formatting option
  ],
};

const formats = [
  "header", // Ensure 'header' format is included
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list", // Ensure 'list' format is included
  "bullet", // Ensure 'bullet' format is included
  "indent",
  "link",
  "image",
  "video",
  "align",
];

const ReactQuillEditor: React.FC = () => {
  const [value, setValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState("");

  const handleSubmit = () => {
    console.log(value);
    setSubmittedValue(value);
  };

  return (
    <>
      <div className="my-4">
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          modules={modules}
          formats={formats}
          className="h-60"
        />
      </div>

      <button onClick={handleSubmit} className="bg-lime-400 px-3 py-2 rounded mt-20 outline-lime-100 text-black">
        Submit
      </button>

      {submittedValue && (
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">Submitted Content</h2>
          <div className="ql-editor disable-tailwind" dangerouslySetInnerHTML={{ __html: submittedValue }} />{" "}
          {/* Added ql-editor class */}
        </div>
      )}    
    </>
  );
};

export default ReactQuillEditor;
