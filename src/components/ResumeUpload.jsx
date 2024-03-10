import React, { useState } from "react";

const ResumeUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    // Update the state with the selected file
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // Implement the logic to upload the file
    if (selectedFile) {
      console.log("Uploading file:", selectedFile);
      // Add your file upload logic here
    } else {
      console.log("No file selected");
    }
  };

  return (
    <div>
      <form>
        <input
          type="file"
          id="resume"
          accept=".pdf, .doc, .docx"
          className="hidden"
          onChange={handleFileChange}
        />
        <label
          htmlFor="resume"
          className="w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold"
        >
          {selectedFile ? selectedFile.name : "Upload Your Resume"}
        </label>
        <button
          type="button"
          onClick={handleUpload}
          className="w-full block py-2 mt-2 bg-green text-white rounded-sm cursor-pointer font-semibold"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default ResumeUpload;
