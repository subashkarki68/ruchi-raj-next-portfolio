"use client";
import Image from "next/image";
import portrait from "@/public/images/subashpp.jpg";

export default function Intro() {
  return (
    <section>
      <div>
        <Image src={portrait} alt="Portrait" />
      </div>
    </section>
  );
}
