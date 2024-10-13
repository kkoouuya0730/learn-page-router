"use client";

import GoogleMap from "@/components/elements/google-map";
import CustomHeading from "@/components/elements/text/CustomHeading";
import Layout from "@/components/layouts/Layout";

import { StoreInfo } from "@/types/store";
import { useEffect, useRef, useState } from "react";
import { StoreCard } from "./parts/StoreCard";
import { StoreDetailDialog } from "./parts/StoreDetailDialog";
import { TextForm } from "@/components/elements/form/TextForm";

const storeList: StoreInfo[] = [
  {
    id: "",
    storeName: "Downtown Cafe",
    address: "123 Main St, City Center",
    description:
      "Our flagship store in the heart of downtown. Enjoy artisanal coffee in a cozy atmosphere.",
    phoneNumber: "123-456-7890",
    businessHours: {
      open: "10:00",
      close: "23:00",
    },
  },
  {
    id: "",
    storeName: "Riverside Espresso",
    description:
      "Our flagship store in the heart of downtown. Enjoy artisanal coffee in a cozy atmosphere.",
    address: "456 River Rd, Waterfront",
    phoneNumber: "123-456-7890",
    businessHours: {
      open: "10:00",
      close: "23:00",
    },
  },

  {
    id: "",
    storeName: "Hilltop Coffee House",
    description:
      "Our flagship store in the heart of downtown. Enjoy artisanal coffee in a cozy atmosphere.",
    address: "123 Main St, City Center",
    phoneNumber: "123-456-7890",
    businessHours: {
      open: "10:00",
      close: "23:00",
    },
  },
];
export default function Store() {
  const [mapHeight, setMapHeight] = useState(200);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedStoreInfo, setSelectedStoreInfo] =
    useState<StoreInfo | null>(null);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

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
        <TextForm
          iconType="search"
          onClickClearButton={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
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
              <div key={store.storeName}>
                <StoreCard
                  storeInfo={store}
                  openModal={openDialog}
                  selectStore={setSelectedStoreInfo}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedStoreInfo && (
        <StoreDetailDialog
          isOpen={isDialogOpen}
          storeInfo={selectedStoreInfo}
          onClose={closeDialog}
        />
      )}
    </>
  );
}

Store.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
