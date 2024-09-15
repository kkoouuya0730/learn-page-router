import { GoogleMapsEmbed } from "@next/third-parties/google";

const googleApiKey =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "";

type Props = {
  width?: string | number;
  height?: string | number;
};
export default function GoogleMap({
  width = "100%",
  height = "100%",
}: Props) {
  return (
    <GoogleMapsEmbed
      apiKey={googleApiKey}
      height={height}
      width={width}
      mode="place"
      q="東京タワー"
    />
  );
}
