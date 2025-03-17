import React, { useEffect, useState } from "react";
import data from "../data.json"; // Import data.json
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardProject from "../components/CardProject";
import TechStackIcon from "../components/TechStackIcon";
import { Code, Wrench, Boxes } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

// Show More / Show Less Button
const ToggleButton = ({ onClick, isShowingMore }) => (
  <button
    onClick={onClick}
    className="px-3 py-1.5 text-slate-300 hover:text-white text-sm font-medium transition-all duration-300 ease-in-out flex items-center gap-2 bg-white/5 hover:bg-white/10 rounded-md border border-white/10 hover:border-white/20 backdrop-blur-sm group relative overflow-hidden"
  >
    <span className="relative z-10 flex items-center gap-2">
      {isShowingMore ? "See Less" : "See More"}
    </span>
  </button>
);

// Tab Panel Component
function TabPanel({ children, value, index, ...other }) {
  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

// Tech Stack
const techStacks = [
  { icon: "reactjs.svg", language: "ReactJS" },
  { icon: "nodejs.svg", language: "Node JS" },
  { icon: "MongoDB.svg", language: "Mongo DB" },
  { icon: "Express.svg", language: "Express JS" },
  { icon: "tailwind.svg", language: "Tailwind CSS" },
  { icon: "javascript.svg", language: "JavaScript" },
  { icon: "cpp.svg", language: "C++" },
  { icon: "typescript.svg", language: "TypeScript" },
  { icon: "sql.svg", language: "SQL" },
  { icon: "socket.svg", language: "Socket.IO" },
  { icon: "css.svg", language: "CSS" },
  { icon: "vite.svg", language: "Vite" },
  { icon: "html.svg", language: "HTML" },
];

// Tools & Utilities
const tools = [
  { icon: "git.svg", name: "Git" },
  { icon: "github.svg", name: "GitHub" },
  { icon: "postman.svg", name: "Postman" },
  { icon: "vscode.svg", name: "Visual Studio Code" },
  { icon: "vercel.svg", name: "Vercel" },
  { icon: "render.jpg", name: "Render" },
  { icon: "NPM.svg", name: "NPM" },
  { icon: "chatgpt.svg", name: "ChatGPT" },
  { icon: "shadcn.svg", name: "Shadcn" },
  { icon: "MUI.svg", name: "Material UI" },
  { icon: "canva.svg", name: "Canva" },
];

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [projects, setProjects] = useState([]);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const isMobile = window.innerWidth < 768;
  const initialItems = isMobile ? 4 : 6;

  useEffect(() => {
    setProjects(data.projects);
    AOS.init({ once: false });
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div
      className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden"
      id="Portfolio"
    >
      <div
        className="text-center pb-10"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          Portfolio Showcase
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Explore my journey through projects, tech stacks, and tools.
        </p>
      </div>

      <Box sx={{ width: "100%" }}>
        {/* Tabs with original styling */}
        <AppBar position="static" elevation={0} sx={{ bgcolor: "transparent" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="fullWidth"
            sx={{
              minHeight: "70px",
              "& .MuiTab-root": {
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontWeight: "600",
                color: "#94a3b8",
                textTransform: "none",
                transition: "all 0.4s",
                padding: "20px 0",
                margin: "8px",
                borderRadius: "12px",
                "&:hover": {
                  color: "#ffffff",
                  backgroundColor: "rgba(139, 92, 246, 0.1)",
                  transform: "translateY(-2px)",
                },
                "&.Mui-selected": {
                  color: "#fff",
                  background:
                    "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))",
                  boxShadow: "0 4px 15px -3px rgba(139, 92, 246, 0.2)",
                },
              },
            }}
          >
            <Tab
              icon={<Code className="mb-2 w-5 h-5" />}
              label="Projects"
              {...a11yProps(0)}
            />
            <Tab
              icon={<Boxes className="mb-2 w-5 h-5" />}
              label="Tech Stack"
              {...a11yProps(1)}
            />
            <Tab
              icon={<Wrench className="mb-2 w-5 h-5" />}
              label="Tools"
              {...a11yProps(2)}
            />
          </Tabs>
        </AppBar>

        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={setValue}
        >
          {/* Projects Tab */}
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
                {(showAllProjects
                  ? projects
                  : projects.slice(0, initialItems)
                ).map((project) => (
                  <CardProject key={project.id} {...project} />
                ))}
              </div>
            </div>
          </TabPanel>

          {/* Tech Stack Tab */}
          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
              {techStacks.map((stack, index) => (
                <TechStackIcon
                  key={index}
                  TechStackIcon={stack.icon}
                  Language={stack.language}
                />
              ))}
            </div>
          </TabPanel>

          {/* Tools Tab */}
          <TabPanel value={value} index={2} dir={theme.direction}>
            <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
              {tools.map((tool, index) => (
                <TechStackIcon
                  key={index}
                  TechStackIcon={tool.icon}
                  Language={tool.name}
                />
              ))}
            </div>
          </TabPanel>
        </SwipeableViews>
      </Box>
    </div>
  );
}
