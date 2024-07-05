import SimpleButton from "./button/simpleButton";

export default function HeroImage() {
  return (
    <div
      className="
      h-96
      rounded-xl
      bg-hero-img"
    >
      <div
        className="
          h-full
          flex
          flex-col
          justify-center
          items-center
          space-y-5
          text-white
          select-none
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
        <div className="text-black">
          <SimpleButton
            color="primary"
            label="View all locations"
            onClick={() =>
              console.log("View all locations click")
            }
          />
        </div>
      </div>
    </div>
  );
}
