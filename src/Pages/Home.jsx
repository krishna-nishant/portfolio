"use client";

import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Instagram,
  Sparkles,
} from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import AOS from "aos";
import "aos/dist/aos.css";

// Constants
const TYPING_SPEED = 100;
const ERASING_SPEED = 50;
const PAUSE_DURATION = 2000;
const WORDS = [
  "Backend Developer",
  "Frontend Developer",
  "Tech Enthusiast",
  "Code. Debug. Deploy. Repeat.",
];
const TECH_STACK = ["React", "Javascript", "Node.js", "MongoDB"];
const SOCIAL_LINKS = [
  { icon: Github, link: "https://github.com/krishna-nishant" },
  { icon: Linkedin, link: "https://www.linkedin.com/in/krishna-nishant/" },
  { icon: Instagram, link: "https://www.instagram.com/krishna_0795_" },
];

export default function Home() {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 10,
    });

    setIsLoaded(true);
    return () => setIsLoaded(false);
  }, []);

  // Typing effect
  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (isTyping) {
          if (charIndex < WORDS[wordIndex].length) {
            setText((prev) => prev + WORDS[wordIndex][charIndex]);
            setCharIndex((prev) => prev + 1);
          } else {
            setTimeout(() => setIsTyping(false), PAUSE_DURATION);
          }
        } else {
          if (charIndex > 0) {
            setText((prev) => prev.slice(0, -1));
            setCharIndex((prev) => prev - 1);
          } else {
            setWordIndex((prev) => (prev + 1) % WORDS.length);
            setIsTyping(true);
          }
        }
      },
      isTyping ? TYPING_SPEED : ERASING_SPEED
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isTyping, wordIndex]);

  return (
    <div className="min-h-screen bg-[#030014] overflow-hidden" id="Home">
      <div
        className={`relative z-10 transition-all duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
          {/* Main content container with proper centering */}
          <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen gap-8 lg:gap-12">
            {/* Left Column - Text Content */}
            <div
              className="w-full lg:w-1/2 space-y-6 text-center lg:text-left"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              {/* Status Badge */}
              <div
                className="inline-block animate-float lg:mx-0"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                  <div className="relative px-3 sm:px-4 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10">
                    <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-transparent bg-clip-text sm:text-sm text-[0.7rem] font-medium flex items-center">
                      <Sparkles className="sm:w-4 sm:h-4 w-3 h-3 mr-2 text-blue-400" />
                      Ready to Innovate
                    </span>
                  </div>
                </div>
              </div>

              {/* Main Title */}
              <div
                className="space-y-2"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
                  <span className="relative inline-block">
                    <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20"></span>
                    <span className="relative bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                      Full Stack
                    </span>
                  </span>
                  <br />
                  <span className="relative inline-block mt-2">
                    <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20"></span>
                    <span className="relative bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
                      Developer
                    </span>
                  </span>
                </h1>
              </div>

              {/* Typing Effect */}
              <div
                className="h-8 flex items-center justify-center lg:justify-start"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <span className="text-xl md:text-2xl bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent font-light">
                  {text}
                </span>
                <span className="w-[3px] h-6 bg-gradient-to-t from-[#6366f1] to-[#a855f7] ml-1 animate-blink"></span>
              </div>

              {/* Description */}
              <p
                className="text-base md:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                Building innovative, functional, and user-friendly web solutions
                with a passion for clean code and seamless experiences.{" "}
              </p>

              {/* Tech Stack */}
              <div
                className="flex flex-wrap gap-3 justify-center lg:justify-start"
                data-aos="fade-up"
                data-aos-delay="1200"
              >
                {TECH_STACK.map((tech, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 hidden sm:block rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-gray-300 hover:bg-white/10 transition-colors"
                  >
                    {tech}
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div
                className="flex flex-row gap-3 justify-center lg:justify-start"
                data-aos="fade-up"
                data-aos-delay="1400"
              >
                <a href="#Portfolio">
                  <button className="group relative w-[160px]">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4f52c9] to-[#8644c5] rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700"></div>
                    <div className="relative h-11 bg-[#030014] backdrop-blur-xl rounded-lg border border-white/10 leading-none overflow-hidden">
                      <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-[#4f52c9]/20 to-[#8644c5]/20"></div>
                      <span className="absolute inset-0 flex items-center justify-center gap-2 text-sm group-hover:gap-3 transition-all duration-300">
                        <span className="bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent font-medium z-10">
                          Projects
                        </span>
                        <ExternalLink className="w-4 h-4 text-gray-200 group-hover:rotate-45 transform transition-all duration-300 z-10" />
                      </span>
                    </div>
                  </button>
                </a>
                <a href="#Contact">
                  <button className="group relative w-[160px]">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4f52c9] to-[#8644c5] rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700"></div>
                    <div className="relative h-11 bg-[#030014] backdrop-blur-xl rounded-lg border border-white/10 leading-none overflow-hidden">
                      <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-[#4f52c9]/20 to-[#8644c5]/20"></div>
                      <span className="absolute inset-0 flex items-center justify-center gap-2 text-sm group-hover:gap-3 transition-all duration-300">
                        <span className="bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent font-medium z-10">
                          Contact
                        </span>
                        <Mail className="w-4 h-4 text-gray-200 group-hover:translate-x-1 transform transition-all duration-300 z-10" />
                      </span>
                    </div>
                  </button>
                </a>
              </div>

              {/* Social Links */}
              <div
                className="hidden sm:flex gap-4 justify-center lg:justify-start"
                data-aos="fade-up"
                data-aos-delay="1600"
              >
                {SOCIAL_LINKS.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="group relative p-3">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                      <div className="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
                        <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                      </div>
                    </button>
                  </a>
                ))}
              </div>
            </div>

            {/* Right Column - Lottie Animation */}
            <div
              className="w-full lg:w-2/5 h-[300px] sm:h-[400px] lg:h-[500px] relative flex items-center justify-center"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              data-aos="fade-left"
              data-aos-delay="600"
            >
              <div className="relative w-full h-full opacity-90">
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-[#6366f1]/10 to-[#a855f7]/10 rounded-3xl blur-3xl transition-all duration-700 ease-in-out ${
                    isHovering ? "opacity-50 scale-105" : "opacity-20 scale-100"
                  }`}
                ></div>

                {/* Lottie animation */}
                <div
                  className={`relative z-10 w-full h-full opacity-90 transform transition-transform duration-500 ${
                    isHovering ? "scale-105" : "scale-100"
                  }`}
                >
                  <DotLottieReact
                    src="https://lottie.host/58753882-bb6a-49f5-a2c0-950eda1e135a/NLbpVqGegK.lottie"
                    loop={true}
                    autoplay={true}
                    style={{ width: "100%", height: "100%" }}
                    className={`w-full h-full transition-all duration-500 ${
                      isHovering ? "scale-[120%] rotate-2" : "scale-[115%]"
                    }`}
                  />
                </div>

                {/* Additional glow effect */}
                <div
                  className={`absolute inset-0 pointer-events-none transition-all duration-700 ${
                    isHovering ? "opacity-50" : "opacity-20"
                  }`}
                >
                  <div
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-br from-indigo-500/10 to-purple-500/10 blur-3xl animate-pulse transition-all duration-700 ${
                      isHovering ? "scale-110" : "scale-100"
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS animations */}
      <style jsx>{`
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
}
