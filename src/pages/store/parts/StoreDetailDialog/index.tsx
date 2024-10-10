"use client";

import Button from "@/components/elements/button/Button";
import CustomHeading from "@/components/elements/text/CustomHeading";
import { StoreInfo } from "@/types/store";
import { ClockIcon } from "@/ui/icon/ClockIcon";
import { CupIcon } from "@/ui/icon/CupIcon";
import { LocationIcon } from "@/ui/icon/LocationIcon";
import { PhoneIcon } from "@/ui/icon/PhoneIcon";
import { useEffect, useId, useRef } from "react";
export type StoreDetailDialogProps = {
  isOpen: boolean;
  storeInfo: StoreInfo;

  onClose: () => void;
};
export function StoreDetailDialog({
  isOpen,
  storeInfo,
  onClose,
}: StoreDetailDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const dialogLabelId = useId();
  const dialogDescriptionId = useId();

  useEffect(() => {
    const dialogElement = dialogRef.current;
    if (!dialogElement) return;

    if (isOpen && dialogElement.open === false) {
      dialogElement.showModal();
    } else if (!isOpen && dialogElement.open === true) {
      dialogElement.close();
    }
  }, [isOpen]);

  const handleClose = () => {
    onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={dialogLabelId}
      aria-describedby={dialogDescriptionId}
      className="w-[343px] p-4 rounded-lg shadow-lg bg-amber-50"
    >
      <div
        className="flex flex-col space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center">
          <CustomHeading tag="h2" id={dialogLabelId}>
            {storeInfo.storeName}
          </CustomHeading>
          <p id={dialogDescriptionId} className="text-xs">
            {storeInfo.description}
          </p>
        </div>
        <div className="grid gap-1">
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
        </div>
        <div>
          <CustomHeading tag="h3">Features:</CustomHeading>
          <div className="grid grid-cols-2 gap-2">
            <p>
              <span className="inline-block mr-1">
                <CupIcon />
              </span>
              <span>Riverside View</span>
            </p>
            <p>
              <span className="inline-block mr-1">
                <CupIcon />
              </span>
              <span>Riverside View</span>
            </p>
            <p>
              <span className="inline-block mr-1">
                <CupIcon />
              </span>
              <span>Riverside View</span>
            </p>
          </div>
        </div>
        <p className="grid">
          <Button color="primary" onClick={handleClose}>
            Close
          </Button>
        </p>
      </div>
    </dialog>
  );
}
