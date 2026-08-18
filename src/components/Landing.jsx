import { NavLink } from "react-router";
import Navbar from "./Navbar.jsx";
import React from "react";

export default function Landing() {
  return (
    <div className="landing-page">

      <Navbar />

      <main>

        {/* HERO */}
        <section className="hero-section">

          <div className="hero-badge">
            <span>✦</span> Built for better study habits
          </div>

          <h1 className="hero-text">
            Study smarter.
            <br />
            <span>Know your progress.</span>
          </h1>

          <p className="sub-hero-text">
            Track your study sessions, understand where your time goes,
            and build better habits — all in one simple workspace.
          </p>

          <div className="hero-buttons">

            <NavLink to="/home" end>
              <button className="button-landing-one">
                Start Studying
                <span>
                  <i className="fa-solid fa-arrow-right-long"></i>
                </span>
              </button>
            </NavLink>

            <NavLink to="/home" end>
              <button className="button-landing">
                View Progress
              </button>
            </NavLink>

          </div>

          <p className="hero-note">
            No complicated setup. Just start studying.
          </p>

        </section>


        {/* PRODUCT PREVIEW */}
        <section className="product-preview-section">

          <div className="product-preview">

            <div className="preview-topbar">
              <div className="preview-brand">
                <span className="preview-dot"></span>
                StudyFlow
              </div>

              <div className="preview-profile">
                <span></span>
              </div>
            </div>

            <div className="preview-content">

              <div className="preview-heading">
                <div>
                  <p className="preview-small-text">YOUR DASHBOARD</p>
                  <h2>Recent Sessions</h2>
                </div>

                <button>+ New Session</button>
              </div>

              <div className="preview-stats">

                <div className="preview-stat">
                  <span>Today's study time</span>
                  <strong>2h 34m</strong>
                </div>

                <div className="preview-stat">
                  <span>Sessions completed</span>
                  <strong>4</strong>
                </div>

                <div className="preview-stat">
                  <span>Most studied</span>
                  <strong>Computer Science</strong>
                </div>

              </div>

              <div className="preview-session-list">

                <div className="preview-session">
                  <div>
                    <strong>Computer Science</strong>
                    <span>Today</span>
                  </div>

                  <strong>42 min</strong>
                </div>

                <div className="preview-session">
                  <div>
                    <strong>Mathematics</strong>
                    <span>Today</span>
                  </div>

                  <strong>1h 12m</strong>
                </div>

                <div className="preview-session">
                  <div>
                    <strong>Physics</strong>
                    <span>Yesterday</span>
                  </div>

                  <strong>38 min</strong>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* FEATURES */}
        <section id="about" className="features-section">

          <div className="section-heading">

            <p className="section-label">WHY STUDYFLOW?</p>

            <h2>
              Everything you need to
              <span> study with purpose.</span>
            </h2>

            <p>
              Stop guessing how productive you were.
              StudyFlow gives you a clear picture of your study habits.
            </p>

          </div>


          <div className="feature-grid">

            <div className="feature-card">

              <div className="feature-icon purple">
                <i className="fa-solid fa-clock"></i>
              </div>

              <h3>Track your time</h3>

              <p>
                Start a session and let StudyFlow keep track of exactly
                how long you spend studying.
              </p>

            </div>


            <div className="feature-card">

              <div className="feature-icon blue">
                <i className="fa-solid fa-chart-simple"></i>
              </div>

              <h3>Understand your progress</h3>

              <p>
                Keep your completed sessions organised so you can see
                where your study time is actually going.
              </p>

            </div>


            <div className="feature-card">

              <div className="feature-icon green">
                <i className="fa-solid fa-bullseye"></i>
              </div>

              <h3>Build consistency</h3>

              <p>
                Turn individual study sessions into a consistent routine
                and make every session count.
              </p>

            </div>

          </div>

        </section>


        {/* HOW IT WORKS */}
        <section className="how-section">

          <div className="section-heading">

            <p className="section-label">HOW IT WORKS</p>

            <h2>
              Three steps.
              <span> That's it.</span>
            </h2>

          </div>


          <div className="steps">

            <div className="step">

              <div className="step-number">
                01
              </div>

              <div>
                <h3>Choose what you're studying</h3>

                <p>
                  Enter your subject and get ready to focus.
                </p>
              </div>

            </div>


            <div className="step">

              <div className="step-number">
                02
              </div>

              <div>
                <h3>Start your session</h3>

                <p>
                  Start the timer and focus on the work in front of you.
                </p>
              </div>

            </div>


            <div className="step">

              <div className="step-number">
                03
              </div>

              <div>
                <h3>Review your session</h3>

                <p>
                  See how long you studied and keep your history organised.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* FINAL CTA */}
        <section className="final-cta">

          <div className="final-cta-glow"></div>

          <p className="section-label">
            START TODAY
          </p>

          <h2>
            Your next productive
            <br />
            session starts here.
          </h2>

          <p>
            Keep track. Stay consistent. Study smarter.
          </p>

          <NavLink to="/home" end>
            <button className="cta-button">
              Start Studying
              <i className="fa-solid fa-arrow-right-long"></i>
            </button>
          </NavLink>

        </section>

      </main>


      {/* FOOTER */}
      <footer className="landing-footer">

        <div className="footer-brand">
          <h3>StudyFlow</h3>

          <p>
            A simpler way to understand your study habits.
          </p>
        </div>

        <div className="footer-links">

          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">GitHub</a>

        </div>

        <p className="footer-copyright">
          © 2026 StudyFlow. Built as a learning project.
        </p>

      </footer>

    </div>
  );
}