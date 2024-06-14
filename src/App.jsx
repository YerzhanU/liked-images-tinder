import React, { useState } from 'react';
import { fetchImages } from './api/serpApi';
import SearchBar from './components/SearchBar';
import Card from './components/Card';
import './App.css';

const App = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedImages, setLikedImages] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (query) => {
    try {
      const results = await fetchImages(query);
      setImages(results);
      setCurrentIndex(0);
      setHasSearched(true);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const handleSwipe = (direction) => {
    if (direction === 'right') {
      setLikedImages([...likedImages, images[currentIndex]]);
    }
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex < images.length ? newIndex : prevIndex;
    });
  };

  return (
    <div className="App">
      <h1>Aesthetics Tinder</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="card-container">
        {images.length > 0 && currentIndex < images.length && (
          <Card image={images[currentIndex]} onSwipe={handleSwipe} />
        )}
      </div>
      {hasSearched && (
        <div className="buttons">
          <button onClick={() => handleSwipe('left')}>Swipe Left</button>
          <button onClick={() => handleSwipe('right')}>Swipe Right</button>
        </div>
      )}
      <div className="liked-images">
        <h2>Liked Images</h2>
        {likedImages.map((image, index) => (
          <img key={index} src={image.thumbnail} alt="liked design" />
        ))}
      </div>
    </div>
  );
};

export default App;
