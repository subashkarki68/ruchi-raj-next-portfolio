import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

export default function CTA() {
  return (
    <div className="flex flex-col gap-4 text-lg justify-center items-center sm:flex-row">
      <Link
        className="flex items-center bg-violet-600 text-white text-sm sm:text-lg gap-2 rounded-full px-7 py-3 transition-transform transform hover:scale-110"
        href="#contact"
      >
        Contact Me <BsArrowRight />
      </Link>
      <a
        href="@/public/CV.pdf" // Update this path as needed
        className="flex items-center bg-white text-violet-600 text-sm sm:text-lg gap-2 rounded-full px-7 py-3 transition-transform transform hover:scale-110"
        download
      >
        Download CV <HiDownload />
      </a>
      <div className="flex gap-2">
        <a
          className="text-4xl bg-white rounded-full transition-transform transform hover:scale-110 hover:text-violet-600"
          href="https://www.github.com/subashkarki68"
          target="_blank"
        >
          <FaGithub className="p-2" />
        </a>
        <a
          className="text-4xl bg-white rounded-full transition-transform transform hover:scale-110 hover:text-violet-600"
          href="#"
        >
          <BsLinkedin className="p-2" />
        </a>
      </div>
    </div>
  );
}
