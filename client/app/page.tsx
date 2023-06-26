// imports
import Image from "next/image";
import profilePic from "../public/images/profile_picture.jpg";

export default function Home() {
  return (
    <div>
      <h1 className="font-bold text-3xl font-serif">Ethan Willers</h1>
      <p className="my-4 max-w-[460px] font-sans">
        I&apos;m a web developer with a skill set that includes customer service
        and technical ability, including front-end and back-end development. I
        have a fascination with quantum computers, and a dream to improve
        software development.
      </p>
      <div className="flex justify-around items-center flex-col md:flex-row">
        <div className="flex flex-col items-center mb-4 text-l font-bold font-serif">
          <div className="flex flex-row">
          <a
              rel="noopener noreferrer"
              target="_blank"
              href="mailto:willers.enw@gmail.com"
              className="flex items-center gap-2 px-2 hover:bg-neutral-800 rounded-md"
            >
              Email
            </a>
            <a
              rel="noopener noreferrer"
              target="_self"
              href="tel:5415056798"
              className="flex items-center gap-2 px-2 hover:bg-neutral-800 rounded-md"
            >
              Phone
            </a>
          </div>
          <div className="flex flex-row ">
          <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/nanea808"
              className="flex items-center gap-2 px-2 hover:bg-neutral-800 rounded-md"
            >
              GitHub
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/nanea808"
              className="flex items-center gap-2 px-2 hover:bg-neutral-800 rounded-md"
            >
              Twitter
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/ethan-willers/"
              className="flex items-center gap-2 px-2 hover:bg-neutral-800 rounded-md"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <Image
          src={profilePic}
          alt="ethans face"
          width={200}
          height={200}
          className="rounded-full"
        ></Image>
      </div>
    </div>
  );
}
