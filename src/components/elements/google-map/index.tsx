import { GoogleMapsEmbed } from "@next/third-parties/google";

const googleApiKey =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "";
export default function GoogleMap() {
  return (
    <p className="p-3 bg-white rounded-lg">
      <GoogleMapsEmbed
        apiKey={googleApiKey}
        height={200}
        width="100%"
        mode="place"
        q="東京タワー"
      />
    </p>
  );
}
