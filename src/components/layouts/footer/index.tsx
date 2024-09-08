import { FacebookIcon } from "@/ui/icon/FacebookIcon";
import { InstagramIcon } from "@/ui/icon/InstagramIcon";
import { TwitterIcon } from "@/ui/icon/TwitterIcon";
import { YoutubeIcon } from "@/ui/icon/YoutubeIcon";
import React from "react";

export default function Footer() {
  return (
    <footer className="pb-2 bg-amber-900 text-amber-100">
      <div className="container mx-auto text-center">
        <div className="flex mb-2">
          <p className="flex-1">Privacy Policy</p>
          <p className="flex-1">Terms of Service</p>
          <p className="flex-1">
            Do Not Sell My Personal Information
          </p>
        </div>
        <div className="flex justify-center space-x-5 mb-2">
          <p>
            <a target="_blank" href="https://google.com">
              <FacebookIcon />
            </a>
          </p>
          <p>
            <a target="_blank" href="https://google.com">
              <TwitterIcon />
            </a>
          </p>
          <p>
            <a target="_blank" href="https://google.com">
              <InstagramIcon />
            </a>
          </p>
          <p>
            <a target="_blank" href="https://google.com">
              <YoutubeIcon />
            </a>
          </p>
        </div>
        <p>
          @ 2024 Brew & Brew Coffee Company. All rights
          reserved
        </p>
      </div>
    </footer>
  );
}
