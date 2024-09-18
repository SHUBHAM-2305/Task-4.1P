import React from 'react';

const tutorials = [
  { title: 'JS ES6 Basics', description: 'Learn ES6 fundamentals', rating: 5, author: 'Chris' },
  { title: 'React Router', description: 'Master routing in React', rating: 5, author: 'Maria' },
  { title: 'Express Middleware', description: 'Middleware in Express.js', rating: 4.9, author: 'Anna' },
  { title: 'React Forms', description: 'Building forms in React', rating: 5, author: 'Michael' },
];

const FeaturedTutorials = () => {
  return (
    <section className="section">
      <h2 className="section-title">Featured Tutorials</h2>
      <div className="grid">
        {tutorials.map((tutorial, index) => (
          <div className="card" key={index}>
            {/* Use backticks for string interpolation */}
            <img src={`https://picsum.photos/200?random=${index + 4}`} alt="Tutorial" />
            <h3>{tutorial.title}</h3>
            <p>{tutorial.description}</p>
            <p>⭐ {tutorial.rating} - {tutorial.author}</p>
          </div>
        ))}
      </div>
      <div className="button-container">
      <button className="btn secondary">See all tutorials</button>
      </div> 
    </section>
  );
};

export default FeaturedTutorials;
