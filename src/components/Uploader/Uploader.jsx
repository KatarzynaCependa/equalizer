import { useState } from "react";

const Mp3Uploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log("Uploading file:", selectedFile);
    } else {
      console.error("No file selected");
    }
  };

  return (
    <div>
      <input type="file" accept=".mp3" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload MP3</button>
    </div>
  );
};

export default Mp3Uploader;
