import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Code2,
  Star,
  ChevronRight,
  Layers,
  Layout,
  Globe,
  Package,
  Cpu,
  Code,
} from "lucide-react";
import projectData from "../data.json"; // Import JSON data

const TECH_ICONS = {
  React: Globe,
  TailwindCSS: Layout,
  Express: Cpu,
  Nodejs: Code,
  MongoDB: Package,
  Firebase: Package,
  HTML: Code,
  CSS: Code,
  Javascript: Code,
  default: Package,
};

const TechBadge = ({ tech }) => {
  const Icon = TECH_ICONS[tech] || TECH_ICONS["default"];
  return (
    <div className="group relative overflow-hidden px-3 py-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500" />
      <div className="relative flex items-center gap-2">
        <Icon className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
        <span className="text-sm font-medium text-blue-300/90 group-hover:text-blue-200">
          {tech}
        </span>
      </div>
    </div>
  );
};

const FeatureItem = ({ feature }) => {
  return (
    <li className="group flex items-start space-x-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10">
      <div className="relative mt-2">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 group-hover:scale-125 transition-transform duration-300" />
      </div>
      <span className="text-base text-gray-300 group-hover:text-white transition-colors">
        {feature}
      </span>
    </li>
  );
};

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const selectedProject = projectData.projects.find((p) => String(p.id) === id);
    setProject(selectedProject || null);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#030014] flex items-center justify-center">
        <div className="text-center space-y-6 animate-fadeIn">
          <div className="w-16 h-16 mx-auto border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
          <h2 className="text-3xl font-bold text-white">Loading Project...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030014] px-[2%] sm:px-0 relative overflow-hidden">
      <div className="fixed inset-0 bg-[url('/logo/grid.svg')] opacity-[0.02]" />

      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16">
          {/* Back Button & Breadcrumb */}
          <div className="flex items-center space-x-2 md:space-x-4 mb-12 animate-fadeIn">
            <button
              onClick={() => navigate(-1)}
              className="group inline-flex items-center px-5 py-2.5 bg-white/5 rounded-xl text-white/90 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Back</span>
            </button>
            <div className="flex items-center text-white/50">
              <span>Projects</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white/90 truncate">{project.Title}</span>
            </div>
          </div>

          {/* Title Centered */}
          <h1 className="text-6xl text-center font-bold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
            {project.Title}
          </h1>

          {/* Description & Features Side by Side */}
          <div className="grid lg:grid-cols-2 gap-12 mt-10">
            {/* Left: Description & Tech Stack */}
            <div className="space-y-8">
              <p className="text-lg text-gray-300 leading-relaxed">{project.Description}</p>

              {/* Tech Stack */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white/90 flex items-center gap-3">
                  <Code2 className="w-5 h-5 text-blue-400" />
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.TechStack.map((tech, index) => (
                    <TechBadge key={index} tech={tech} />
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Features & Buttons */}
            <div className="space-y-8">
              {/* Features */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white/90 flex items-center gap-3">
                  <Star className="w-5 h-5 text-yellow-400" />
                  Features
                </h3>
                <ul className="space-y-2">
                  {project.Features.map((feature, index) => (
                    <FeatureItem key={index} feature={feature} />
                  ))}
                </ul>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={project.Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3 bg-blue-600/20 text-blue-300 rounded-xl hover:bg-blue-600/30 transition-all duration-300 border border-blue-500/20 hover:border-blue-500/40"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Live Demo
                </a>

                <a
                  href={project.Github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3 bg-purple-600/20 text-purple-300 rounded-xl hover:bg-purple-600/30 transition-all duration-300 border border-purple-500/20 hover:border-purple-500/40"
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Project Image (Stretched 80%) */}
          <div className="flex justify-center mt-16">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl w-[80%] h-[450px] flex items-center">
              <img
                src={project.Img}
                alt={project.Title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
