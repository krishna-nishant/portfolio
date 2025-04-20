"use client";

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import AnimatedBackground from "./components/Background";
import Navbar from "./components/Navbar";
import Portfolio from "./Pages/Portfolio";
import ContactPage from "./Pages/Contact";
import ProjectDetails from "./components/ProjectDetail";
import WelcomeScreen from "./Pages/WelcomeScreen";
import NotFound from "./Pages/NotFound";
import ThankYouPage from "./Pages/ThankYou";
import { AnimatePresence } from "framer-motion";

const LandingPage = ({ showWelcome, setShowWelcome }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {showWelcome && (
          <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>

      {!showWelcome && (
        <>
          <Navbar />
          <AnimatedBackground />
          <Home />
          <About />
          <Portfolio />
          <ContactPage />
          <footer className="py-6">
            <div className="container mx-auto px-4">
              <hr className="my-3 border-gray-400 opacity-15" />
              <span className="block text-sm text-gray-500 text-center">
                Made with ❤️ by{" "}
                <a
                  href="https://krishna-nishant.vercel.app/"
                  className="hover:underline"
                >
                  Krishna
                </a>
              </span>
            </div>
          </footer>
        </>
      )}
    </>
  );
};

const ProjectPageLayout = () => (
  <>
    <ProjectDetails />
    <footer className="py-6">
      <div className="container mx-auto px-4">
        <hr className="my-3 border-gray-400 opacity-15" />
        <span className="block text-sm text-gray-500 text-center">
          Made with ❤️ by{" "}
          <a
            href="https://krishna-nishant.vercel.app/"
            className="hover:underline"
          >
            Krishna
          </a>
        </span>
      </div>
    </footer>
  </>
);

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              showWelcome={showWelcome}
              setShowWelcome={setShowWelcome}
            />
          }
        />
        <Route path="/project/:id" element={<ProjectPageLayout />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
