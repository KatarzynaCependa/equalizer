import { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Uploader.css";

const Uploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setUploadedFile(null);
  };

  const handleUpload = () => {
    if (selectedFile) {
      setUploadedFile(selectedFile);
    } else {
      console.error("No file selected");
    }
  };

  return (
    <div className="wrapper">
      <input
        type="file"
        accept=".mp3"
        onChange={handleFileChange}
        className="button"
      />
      <button onClick={handleUpload}>Upload MP3</button>
      {uploadedFile && (
        <div>
          <p>Success! Your file was loaded!</p>
          <ReactAudioPlayer src={URL.createObjectURL(uploadedFile)} controls />
        </div>
      )}
    </div>
  );
};

export default Uploader;
