import { useEffect, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
function Navbar() {
  function handleClick(link) {
    alert(`You will be redirected to ${link}`);
  }
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 640);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isMobile && open) {
      setOpen(false);
    }
  }, [isMobile]);

  return (
    <div className="flex justify-between items-center bg-primaryColor w-full shadow-lg font-semibold px-2">
      <div className="z-50 bg-primaryColor flex flex-grow justify-between py-2">
        <div className="p-2">PokeDex</div>
        <button
          className="sm:hidden p-2 text-xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden sm:flex">
        <li
          className="p-2"
          onClick={() =>
            handleClick("Github: https://github.com/tarunchoudhary3884/")
          }
        >
          <a
            href="https://github.com/tarunchoudhary3884/"
            target="_blank"
            className="flex items-center justify-center gap-2"
          >
            Github <FaGithub />
          </a>
        </li>
        <li
          className="p-2"
          onClick={() =>
            handleClick(
              "LinkedIn: https://www.linkedin.com/in/tarunchoudhary3884/"
            )
          }
        >
          <a
            href="https://www.linkedin.com/in/tarunchoudhary3884/"
            target="_blank"
            className="flex items-center justify-center gap-2"
          >
            LinkedIn <FaLinkedin />
          </a>
        </li>
        <li
          className="p-2 "
          onClick={() => handleClick("Mail: tarunchoudhary3884@gmail.com")}
        >
          <a
            href="mailto:tarunchoudhary3884@gmail.com"
            className="flex items-center justify-center gap-2"
            target="_blank"
          >
            Email
            <FaRegEnvelope />
          </a>
        </li>
      </ul>
      {/* Mobile Navigation */}
      <ul
        className={`w-full h-full absolute left-0 ease-in-out duration-700 flex flex-col justify-start items-start bg-primaryColor sm:hidden px-2 z-50 ${
          open ? "top-14 " : "top-[-100%]"
        }`}
      >
        <li
          className="p-2"
          onClick={() =>
            handleClick("Github: https://github.com/tarunchoudhary3884/")
          }
        >
          <a
            href="https://github.com/tarunchoudhary3884/"
            className="flex items-center justify-center gap-2"
            target="_blank"
          >
            Github <FaGithub />
          </a>
        </li>
        <li
          className="p-2"
          onClick={() =>
            handleClick(
              "LinkedIn: https://www.linkedin.com/in/tarunchoudhary3884/"
            )
          }
        >
          <a
            href="https://www.linkedin.com/in/tarunchoudhary3884/"
            target="_blank"
            className="flex items-center justify-center gap-2"
          >
            LinkedIn <FaLinkedin />
          </a>
        </li>
        <li
          className="p-2 "
          onClick={() => handleClick("Mail: tarunchoudhary3884@gmail.com")}
        >
          <a
            href="mailto:tarunchoudhary3884@gmail.com"
            target="_blank"
            className="flex items-center justify-center gap-2"
          >
            Email
            <FaRegEnvelope />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
