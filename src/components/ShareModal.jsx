"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Copy, Facebook, Twitter, Linkedin, LinkIcon } from "lucide-react";

const ShareModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const portfolioUrl = "https://krishna-nishant.vercel.app/";
  const shareText =
    "Check out Krishna Nishant's portfolio - a passionate developer specializing in web development!";

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Share functions
  const copyToClipboard = () => {
    navigator.clipboard.writeText(portfolioUrl);
    alert("Link copied to clipboard!");
  };
  const copyToClipboard2 = () => {
    navigator.clipboard.writeText(shareText + " " + portfolioUrl);
    alert("Link copied to clipboard!");
  };

  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        portfolioUrl
      )}&quote=${encodeURIComponent(shareText)}`,
      "_blank"
    );
  };

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        shareText
      )}&url=${encodeURIComponent(portfolioUrl)}`,
      "_blank"
    );
  };

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        portfolioUrl
      )}`,
      "_blank"
    );
  };

  const shareOnWhatsApp = () => {
    window.open(
      `https://api.whatsapp.com/send?text=${encodeURIComponent(
        shareText + " " + portfolioUrl
      )}`,
      "_blank"
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.75 }}
            transition={{ duration: 0.2 }}
            ref={modalRef}
            className="relative bg-[#030014]/90 rounded-2xl shadow-xl max-w-md w-full mx-4 overflow-hidden border border-white/10"
            style={{
              boxShadow: "0 0 30px rgba(99, 102, 241, 0.2)",
            }}
          >
            {/* Header with gradient border */}
            <div className="relative">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#6366f1] to-[#a855f7]"></div>
              <div className="flex items-center justify-between p-5">
                <h3 className="text-xl font-bold bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
                  Share My Portfolio
                </h3>
                <button
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-white rounded-full hover:bg-white/5 transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 pt-2">
              <div className="flex items-center mb-6 bg-[#0f0926]/50 p-3 rounded-xl border border-[#6366f1]/20 focus-within:border-[#6366f1]/40 transition-all">
                <input
                  type="text"
                  value={portfolioUrl}
                  readOnly
                  className="flex-grow bg-transparent text-white border-none outline-none text-sm"
                />
                <button
                  onClick={copyToClipboard}
                  className="ml-2 p-2 text-[#a855f7] hover:text-[#6366f1] hover:bg-white/5 rounded-lg transition-all"
                >
                  <Copy className="w-5 h-5" />
                </button>
              </div>

              <p className="text-[#e2d3fd] mb-5 text-sm font-medium">
                Share via:
              </p>

              <div className="grid grid-cols-5 gap-3">
                <ShareButton
                  onClick={copyToClipboard2}
                  icon={<LinkIcon className="w-5 h-5" />}
                  label="Copy"
                  color="from-[#6366f1]/20 to-[#a855f7]/20"
                  hoverColor="from-[#6366f1]/30 to-[#a855f7]/30"
                  iconColor="text-[#e2d3fd]"
                />
                <ShareButton
                  onClick={shareOnTwitter}
                  icon={<Twitter className="w-5 h-5" />}
                  label="Twitter"
                  color="from-[#6366f1]/20 to-[#a855f7]/20"
                  hoverColor="from-[#6366f1]/30 to-[#a855f7]/30"
                  iconColor="text-[#e2d3fd]"
                />
                <ShareButton
                  onClick={shareOnLinkedIn}
                  icon={<Linkedin className="w-5 h-5" />}
                  label="LinkedIn"
                  color="from-[#6366f1]/20 to-[#a855f7]/20"
                  hoverColor="from-[#6366f1]/30 to-[#a855f7]/30"
                  iconColor="text-[#e2d3fd]"
                />
                <ShareButton
                  onClick={shareOnWhatsApp}
                  icon={<WhatsAppIcon />}
                  label="WhatsApp"
                  color="from-[#6366f1]/20 to-[#a855f7]/20"
                  hoverColor="from-[#6366f1]/30 to-[#a855f7]/30"
                  iconColor="text-[#e2d3fd]"
                />
                <ShareButton
                  onClick={shareOnFacebook}
                  icon={<Facebook className="w-5 h-5" />}
                  label="Facebook"
                  color="from-[#6366f1]/20 to-[#a855f7]/20"
                  hoverColor="from-[#6366f1]/30 to-[#a855f7]/30"
                  iconColor="text-[#e2d3fd]"
                />
              </div>

              {/* Footer message */}
              <div className="mt-6 text-center">
                <p className="text-xs text-[#e2d3fd]/60">
                  Thank you for sharing my portfolio!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// WhatsApp SVG Icon
const WhatsAppIcon = () => (
  <svg
    height="24px"
    width="24px"
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 58 58"
    className="w-5 h-5"
  >
    <g>
      <path
        style={{ fill: "#e2d3fd" }}
        d="M0,58l4.988-14.963C2.457,38.78,1,33.812,1,28.5C1,12.76,13.76,0,29.5,0S58,12.76,58,28.5 S45.24,57,29.5,57c-4.789,0-9.299-1.187-13.26-3.273L0,58z"
      ></path>
      <path
        style={{ fill: "#0f0926" }}
        d="M47.683,37.985c-1.316-2.487-6.169-5.331-6.169-5.331c-1.098-0.626-2.423-0.696-3.049,0.42 c0,0-1.577,1.891-1.978,2.163c-1.832,1.241-3.529,1.193-5.242-0.52l-3.981-3.981l-3.981-3.981c-1.713-1.713-1.761-3.41-0.52-5.242 c0.272-0.401,2.163-1.978,2.163-1.978c1.116-0.627,1.046-1.951,0.42-3.049c0,0-2.844-4.853-5.331-6.169 c-1.058-0.56-2.357-0.364-3.203,0.482l-1.758,1.758c-5.577,5.577-2.831,11.873,2.746,17.45l5.097,5.097l5.097,5.097 c5.577,5.577,11.873,8.323,17.45,2.746l1.758-1.758C48.048,40.341,48.243,39.042,47.683,37.985z"
      ></path>
    </g>
  </svg>
);

const ShareButton = ({
  onClick,
  icon,
  label,
  color,
  hoverColor,
  iconColor,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center py-3 px-1 rounded-xl bg-gradient-to-br ${color} hover:bg-gradient-to-br ${hoverColor} border border-white/5 hover:border-white/10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
    >
      <div className={`${iconColor} mb-1`}>{icon}</div>
      <span className="text-xs text-[#e2d3fd]">{label}</span>
    </button>
  );
};

export default ShareModal;
