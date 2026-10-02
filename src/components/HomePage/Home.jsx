import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">

        <div className="hero-content">
          <p className="tag">REACT IMAGE EXPLORER</p>

          <h1>
            Explore Images
            <span> Your Way.</span>
          </h1>

          <p className="description">
            Browse beautiful images using different loading techniques.
            Choose between traditional pagination or seamless infinite scrolling.
          </p>

          <div className="buttons">

            <Link to="/pagination" className="btn primary">
              Explore Pagination →
            </Link>

            <Link to="/infinity" className="btn secondary">
              Try Infinite Scroll ↓
            </Link>

          </div>
        </div>

      </section>


      {/* Features */}
      <section className="features">

        <div className="feature-card">
          <div className="icon">📄</div>

          <h2>Pagination</h2>

          <p>
            Browse images page by page with a clean and responsive
            pagination system.
          </p>

          <Link to="/pagination">
            Open Pagination →
          </Link>
        </div>


        <div className="feature-card">
          <div className="icon">♾️</div>

          <h2>Infinite Scroll</h2>

          <p>
            Keep scrolling and automatically load more images without
            manually changing pages.
          </p>

          <Link to="/infinity">
            Open Infinite Scroll →
          </Link>
        </div>

      </section>


      {/* Footer */}
      <footer>
        <p>Built with React ⚛️</p>
      </footer>

    </div>
  );
};

export default Home;