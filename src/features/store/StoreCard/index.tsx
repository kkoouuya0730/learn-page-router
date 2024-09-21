"use client";

import Button from "@/components/elements/button/Button";
import CustomHeading from "@/components/elements/text/CustomHeading";
import { ClockIcon } from "@/ui/icon/ClockIcon";
import { LocationIcon } from "@/ui/icon/LocationIcon";
import { PhoneIcon } from "@/ui/icon/PhoneIcon";
import React, { Dispatch, SetStateAction } from "react";
import { StoreInfo } from "@/types/store";

type Props = {
  storeInfo: {
    storeName: string;
    description: string;
    address: string;
    phoneNumber: string;
    businessHours: {
      open: string;
      close: string;
    };
  };
  openModal: () => void;
  selectStore: Dispatch<SetStateAction<StoreInfo | null>>;
};
export function StoreCard({
  storeInfo,
  openModal,
  selectStore,
}: Props) {
  const handleClick = () => {
    selectStore(storeInfo);
    openModal();
  };
  return (
    <>
      <div className="grid space-y-1 rounded-lg bg-white p-3 shadow-md hover:shadow-lg text-amber-700">
        <CustomHeading tag="h3" className="mb-4">
          {storeInfo.storeName}
        </CustomHeading>
        <address>
          <span className="inline-block mr-1">
            <LocationIcon />
          </span>
          <span>{storeInfo.address}</span>
        </address>

        <p>
          <span className="inline-block mr-1">
            <PhoneIcon />
          </span>
          <span>{storeInfo.phoneNumber}</span>
        </p>

        <p>
          <span className="inline-block mr-1">
            <ClockIcon />
          </span>
          <time
            dateTime={`T${storeInfo.businessHours.open}`}
          >
            {storeInfo.businessHours.open}
          </time>
          ~
          <time
            dateTime={`T${storeInfo.businessHours.close}`}
          >
            {storeInfo.businessHours.close}
          </time>
        </p>

        <p>
          <Button color="tertiary" onClick={handleClick}>
            View Details
          </Button>
        </p>
      </div>
    </>
  );
}
