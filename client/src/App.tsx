import React, { ChangeEventHandler, useState } from "react";
import "./App.css";

function App() {
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState<string | ArrayBuffer | null>(
    null
  );

  const handleImageUpload = (event: any) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);

    const reader = new FileReader();
    reader.onload = () => {
      setPreviewImage(reader.result);
    };
    reader.readAsDataURL(selectedImage);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Deli-Detective AI 🕵️‍♂️</h1>
        <section>
          <div>
            <div>Upload an image 🪄</div>
            <input
              type="file"
              className="magical-input"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </div>
          {previewImage && (
            <div className="magical-image-container">
              <img
                className="magical-image"
                src={previewImage as string}
                alt="Preview"
                style={{ maxWidth: "100%" }}
              />
              <div className="magical-overlay"></div>
            </div>
          )}
        </section>
      </header>
    </div>
  );
}

export default App;
