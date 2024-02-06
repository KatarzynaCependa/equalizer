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
      <label className="fileInput">
        <input
          type="file"
          accept=".mp3"
          onChange={handleFileChange}
          className="inputFile"
        />
        <span className="uploadButton">Choose MP3 File</span>
      </label>
      <button className="uploadButton" onClick={handleUpload}>
        Upload MP3
      </button>
      {uploadedFile && (
        <div className="successContainer">
          <p className="successText">Success! Your file was loaded!</p>
          <ReactAudioPlayer src={URL.createObjectURL(uploadedFile)} controls />
        </div>
      )}
    </div>
  );
};

export default Uploader;
