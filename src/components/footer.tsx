import { FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";
import { cn } from "../lib/utils";

export default function Footer() {
  return (
    <footer
      className={cn(
        "relative overflow-hidden backdrop-blur-xl border-t border-purple-500/20 text-white py-10 font-sans",
        "bg-gradient-to-b from-black/80 to-purple-900/20"
      )}
    >
      {/* Background gradient effects - matching the main application */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-600/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/2 left-1/3 w-64 h-64 bg-purple-700/10 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="flex items-center gap-10">
          <a
            href="https://www.utcluj.ro/"
            className="hover:opacity-80 transition-opacity"
          >
            <img
              src="src/assets/images/utalb.png"
              alt="Logo"
              className="max-w-24"
            />
          </a>
          <a
            href="https://osut.org/"
            className="hover:opacity-80 transition-opacity"
          >
            <img
              src="src/assets/images/osutalb.png"
              alt="Logo"
              className="max-w-24"
            />
          </a>
        </div>
        <div className="flex space-x-6 text-2xl mt-4 md:mt-0">
          <a
            href="https://www.facebook.com/infotech.osut"
            className="text-purple-300 hover:text-purple-400 transition-colors"
          >
            <FaFacebookF className="hover:scale-110 transition-transform" />
          </a>
          <a
            href="https://www.instagram.com/infotech.osut/"
            className="text-purple-300 hover:text-purple-400 transition-colors"
          >
            <FaInstagram className="hover:scale-110 transition-transform" />
          </a>
          <a
            href="mailto:infotech.osutcluj@gmail.com"
            className="text-purple-300 hover:text-purple-400 transition-colors"
          >
            <FaEnvelope className="hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>

      <hr className="border-t border-purple-500/30 my-8 w-11/12 mx-auto" />

      <div className="flex flex-col md:flex-row items-center justify-around gap-8 text-gray-300 text-sm">
        <a
          href="https://infotech.osut.org/"
          className="hover:opacity-80 transition-opacity backdrop-blur-sm"
        >
          <img
            src="src/assets/images/infotech.png"
            alt="Logo"
            className="max-w-36"
          />
        </a>
        <div className="text-center md:text-left bg-gray-900/40 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 shadow-lg shadow-purple-500/10">
          <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-300 mb-3">
            Contact:
          </h3>
          <p>
            <b className="text-white">InfoTech</b>
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:infotech.osutcluj@gmail.com"
              className="text-purple-300 hover:text-purple-200 hover:underline transition-colors"
            >
              infotech.osutcluj@gmail.com
            </a>
          </p>
          <p className="mt-3">
            <b className="text-white">Mozacu Ștefania - Coordinator</b>
          </p>
          <p>
            Phone: <i className="text-purple-200">0756032882</i>
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:stefaniamozacu1@gmail.com"
              className="text-purple-300 hover:text-purple-200 hover:underline transition-colors"
            >
              stefaniamozacu1@gmail.com
            </a>
          </p>
          <p className="mt-3">
            <b className="text-white">Spătăcean Giorgiana - BC Responsible</b>
          </p>
          <p>
            Phone: <i className="text-purple-200">0783054447</i>
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:sgiorgiana02@gmail.com"
              className="text-purple-300 hover:text-purple-200 hover:underline transition-colors"
            >
              sgiorgiana02@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Additional subtle gradient effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
    </footer>
  );
}