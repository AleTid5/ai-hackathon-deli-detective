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

    if (!selectedImage) {
      return;
    }

    const reader = new FileReader();
    reader.onload = () => setPreviewImage(reader.result);
    reader.readAsDataURL(selectedImage);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Deli-Detective AI 🕵️‍♂️</h1>
        <section>
          <div className="image-section">
            <div className="image-upload-container">
              <div>Upload an image 🪄</div>
              <input
                type="file"
                className="magical-file-input"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </div>
            {previewImage ? (
              <div className="magical-image-container">
                <img
                  className="magical-image"
                  src={previewImage as string}
                  alt="Preview"
                  style={{ maxWidth: "100%" }}
                />
                <div className="magical-overlay"></div>
              </div>
            ) : (
              <div className="image-skeleton" />
            )}
          </div>
          {previewImage && (
            <div className="description-section">
              <label>And now, select the type of food</label>
              <select className="magical-select">
                <option value="pizza">Pizza</option>
                <option value="burger">Burger</option>
                <option value="pasta">Pasta</option>
                <option value="salad">Salad</option>
                <option value="sandwich">Sandwich</option>
                <option value="soup">Soup</option>
                <option value="sushi">Sushi</option>
                <option value="dessert">Dessert</option>
                <option value="drink">Drink</option>
              </select>
            </div>
          )}
        </section>
      </header>
    </div>
  );
}

export default App;
