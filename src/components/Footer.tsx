import { FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 text-center font-sans">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="flex items-center gap-10">
          <a href="https://www.utcluj.ro/">
            <img
              src="src/assets/images/utalb.png"
              alt="Logo"
              className="max-w-24"
            />
          </a>
          <a href="https://osut.org/">
            <img
              src="src/assets/images/osutalb.png"
              alt="Logo"
              className="max-w-24"
            />
          </a>
        </div>
        <div className="flex space-x-4 text-2xl mt-4 md:mt-0">
          <a
            href="https://www.facebook.com/infotech.osut"
            className="hover:text-purple-600"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/infotech.osut/"
            className="hover:text-purple-600"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:infotech.osutcluj@gmail.com"
            className="hover:text-purple-600"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
      <hr className="border-t border-gray-400 my-6 w-11/12 mx-auto" />
      <div className="flex flex-col md:flex-row items-center justify-around gap-8 text-gray-400 text-sm">
        <a href="https://infotech.osut.org/">
          <img src="src/assets/images/infotech.png" alt="Logo" className="max-w-36" />
        </a>
        <div className="text-center md:text-left">
          <h3 className="text-white text-lg font-bold">Contact:</h3>
          <p>
            <b>InfoTech</b>
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:infotech.osutcluj@gmail.com"
              className="hover:underline"
            >
              infotech.osutcluj@gmail.com
            </a>
          </p>
          <p>
            <b>Mozacu Ștefania - Coordinator</b>
          </p>
          <p>
            Phone: <i>0756032882</i>
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:stefaniamozacu1@gmail.com"
              className="hover:underline"
            >
              stefaniamozacu1@gmail.com
            </a>
          </p>
          <p>
            <b>Spătăcean Giorgiana - BC Responsible</b>
          </p>
          <p>
            Phone: <i>0783054447</i>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:sgiorgiana02@gmail.com" className="hover:underline">
              sgiorgiana02@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
