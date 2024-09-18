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
      <div className="content">
        <FeaturedArticles />
        <FeaturedTutorials />
      </div>
      <Footer />
    </div>
  );
};

export default App;