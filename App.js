import React from 'react';
import Header from './Header';
import FeaturedArticles from './FeaturedArticles';
import FeaturedTutorials from './FeaturedTutorials';
import Footer from './Footer';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      {/* Main Image */}
      <div className="main-image-container">
        <img src="https://picsum.photos/1200/400" alt="Main Banner" className="main-image" />
      </div>
      <div className="content">
        <FeaturedArticles />
        <FeaturedTutorials />
      </div>
      <Footer />
    </div>
  );
};

export default App;