import React from 'react';

const articles = [
  { title: 'React vs Vue', description: 'A detailed comparison', rating: 5, author: 'Alex' },
  { title: 'NodeJS Basics', description: 'Getting started with NodeJS', rating: 5, author: 'Linda' },
  { title: 'React Hooks', description: 'In-depth guide to React Hooks', rating: 5, author: 'John' },
  { title: 'Express Setup', description: 'Fast setup with Express.js', rating: 5, author: 'Ella' },
];

const FeaturedArticles = () => {
  return (
    <section className="section">
      <h2 className="section-title">Featured Articles</h2>
      <div className="grid">
        {articles.map((article, index) => (
          <div className="card" key={index}>
            {/* Use backticks for string interpolation */}
            <img src={`https://picsum.photos/200?random=${index}`} alt="Article" />
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <p>⭐ {article.rating} - {article.author}</p>
          </div>
        ))}
      </div>
      <div className="button-container">
      <button className="btn secondary">See all articles</button>
      </div>
    </section>
  );
};

export default FeaturedArticles;
