import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

export default function CTA() {
  const classes = {
    externalLinks:
      "text-4xl bg-white rounded-full hover:scale-110 hover:text-violet-600 focus:scale-110 outline-none active:scale-105 transition",
    butt: "flex items-center  text-sm sm:text-lg gap-2 rounded-full px-7 py-3 hover:scale-110 focus:scale-110 outline-none active:scale-105 transition",
  };
  return (
    <div className="flex flex-col gap-4 text-lg justify-center items-center sm:flex-row">
      <Link
        className={`${classes.butt} bg-violet-600 text-white`}
        href="#contact"
      >
        Contact Me <BsArrowRight />
      </Link>
      <a
        href="/subashCV.pdf" // Update this path as needed
        className={`${classes.butt} bg-white text-violet-600`}
        download
      >
        Download CV <HiDownload />
      </a>
      <div className="flex gap-2">
        <a
          className={classes.externalLinks}
          href="https://www.github.com/subashkarki68"
          target="_blank"
        >
          <FaGithub className="p-2" />
        </a>
        <a className={classes.externalLinks} href="#">
          <BsLinkedin className="p-2" />
        </a>
      </div>
    </div>
  );
}
