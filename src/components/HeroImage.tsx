import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative">
      <Image
        src="https://kkoouuyanextbucket.s3.us-west-2.amazonaws.com/hero.jpg"
        width={3000}
        height={5000}
        alt="test"
        className="rounded-lg absolute"
      />
      <div
        className="
          absolute
          top-20
          flex-col
          justify-center
          items-center
          space-y-5
          text-white
          "
      >
        <h1 className="font-black text-5xl text-center">
          Discover our cafe
        </h1>
        <p className="text-center">
          We are a community-based coffee shop located in
          the heart of North Beach, SanFrancisco. Our space
          is designed to be a place of comfort, creativity,
          and connection.
        </p>
      </div>
    </div>
  );
}
