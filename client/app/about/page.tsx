// imports
import Image from "next/image";
import sebastian from "../../public/images/sebastian-angy.jpg";
import greybles from "../../public/images/greybles-cute.jpg";

export default function About() {
  return (
    <div>
      <h1 className="font-bold text-3xl font-serif">About</h1>
      <p className="my-5 max-w-[460px] font-sans">
        I&apos;m very passionate about computers and the ever-evolving world
        wide web. I believe in a safe and accessible web. I&apos;m constantly
        exploring ways to better a user&apos;s experience through responsive
        design and secure data. I tend to enjoy working on the backends of
        websites a lot, though I come from a family of artists and love bringing
        beautiful website layouts to life.
      </p>
      <p className="my-5 max-w-[460px] font-sans">
        With native Hawaiian family roots, I was born and raised on the
        beautiful island of Oahu, HI. Music influenced me a lot in high school;
        I love composing and improvising in my spare time. For a large portion
        of my life, I wanted to be a game developer; this is where most of my
        early programming experience came from. I still make games in my spare
        time and have spent more than 5 years working on numerous game projects.
      </p>
      <div className="flex row justify-between">
        <Image
          src={sebastian}
          alt="my cat sebastian"
          width={220}
          height={220}
          className=" rounded-full"
        ></Image>
        <Image
          src={greybles}
          alt="my cat sebastian"
          width={220}
          height={220}
          className=" rounded-full"
        ></Image>
      </div>
      <p className="my-5 max-w-[460px] font-sans">
        These are my wonderfull cats Sebastian and Greybles. Sebastian was a
        stray when my girlfriend Maisey befrended and Greybles is our wonderfull treasure from craigslist.
      </p>
    </div>
  );
}
