"use client";
import SearchForm from "@/components/elements/form/SerachForm";
import GoogleMap from "@/components/elements/google-map";
import CustomHeading from "@/components/elements/text/CustomHeading";
import Layout from "@/components/layouts/Layout";
import StoreCard from "@/features/store/StoreCard";
import { useEffect, useRef, useState } from "react";

const storeList = [
  {
    storeInfo: {
      storeName: "Downtown Cafe",
      address: "123 Main St, City Center",
      phoneNumber: "123-456-7890",
      businessHours: {
        open: "10:00",
        close: "23:00",
      },
    },
  },
  {
    storeInfo: {
      storeName: "Riverside Espresso",
      address: "456 River Rd, Waterfront",
      phoneNumber: "123-456-7890",
      businessHours: {
        open: "10:00",
        close: "23:00",
      },
    },
  },
  {
    storeInfo: {
      storeName: "Hilltop Coffee House",
      address: "123 Main St, City Center",
      phoneNumber: "123-456-7890",
      businessHours: {
        open: "10:00",
        close: "23:00",
      },
    },
  },
];
export default function Store() {
  const [mapHeight, setMapHeight] = useState(200);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (mapContainerRef.current) {
        if (window.innerWidth <= 1024) {
          setMapHeight(200);
        } else {
          setMapHeight(
            mapContainerRef.current.offsetHeight - 24
          );
        }
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () =>
      window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <CustomHeading tag="h1">Find Store</CustomHeading>
        <SearchForm />
      </div>
      <div className="lg:flex lg:space-x-4 lg:h-screen">
        <div
          ref={mapContainerRef}
          className="lg:w-1/2 p-3 bg-white rounded-lg mb-2 lg:mb-0 flex-grow"
        >
          <GoogleMap height={mapHeight} />
        </div>
        <div className="lg:w-1/2">
          <div className="mb-4">
            <CustomHeading tag="h2">
              Nearby Stores
            </CustomHeading>
          </div>
          <div className="grid space-y-4">
            {storeList.map((store) => (
              <div key={store.storeInfo.storeName}>
                <StoreCard storeInfo={store.storeInfo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

Store.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
