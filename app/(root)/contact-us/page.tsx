import React from "react";
import axios from "axios";
import { Suspense } from "react";
import { FaPhone } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import Loader from "@/components/Loader";
import ContactForm from "@/components/forms/ContactForm";
import { ContactUsProps } from "@/types";

const ContactUsPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const response = await axios.get(
    "https://main.hivetech.space/api/contact-us",
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const contact_us = response.data.data;

  // Filter data by type
  const text = contact_us.find((item: ContactUsProps) => item.type === "text");
  const email = contact_us.find(
    (item: ContactUsProps) => item.type === "email"
  );
  const phone = contact_us.find(
    (item: ContactUsProps) => item.type === "phone"
  );
  const address = contact_us.find(
    (item: ContactUsProps) => item.type === "address"
  );

  return (
    
    <div className="min-h-[100vh] overflow-y-auto relative">
      {/* Background Overlay */}
      <img
        src="/images/building.jpg"
        alt="building"
        className="absolute w-full h-full object-cover md:object-fill"
      />
      <div className="absolute w-full h-full bg-darkMod-700 opacity-70" />

      {/* Content Section */}
      <div className="relative w-full h-full z-10 max-md:pt-20 md:pt-24 flex justify-center items-center flex-col pb-10">
        <div className="flex flex-col items-center justify-center text-center p-6 md:mb-10">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl text-white mb-6 font-bold"
            style={{ letterSpacing: "4px" }}
          >
            Contact Us
          </h1>

          {/* Text Content */}
          {text && (
            <div
              className="text-gray-200 text-[14px] md:text-lg mb-6 max-w-4xl max-sm:font-light"
              dangerouslySetInnerHTML={{ __html: text.content }}
            />
          )}
        </div>

        {/* Address */}
        <div className="flex mx-auto max-w-full justify-evenly items-center w-full max-lg:flex-col max-xl:gap-14">
          <div className="w-1/2 flex flex-col justify-center items-center max-lg:w-full">
            <div className="flex flex-col gap-y-3">
              <div className="flex items-start gap-4">
                <span className="max-xs:w-8 max-xs:h-8 w-9 h-9  rounded-full text-primary-color1 bg-white-100 text-xl flex justify-center items-center max-xs:mt-1 mt-2">
                  <MdLocationOn />
                </span>
                {address && (
                  <p className="text-white text-sm sm:text-lg mb-4 flex flex-col">
                    <span className="font-bold">Address:</span>
                    <span>{address.content}</span>
                  </p>
                )}
              </div>
              <div className="flex items-start gap-4">
                <span className="max-xs:w-8 max-xs:h-8 w-9 h-9  rounded-full text-primary-color1 bg-white-100 text-lg flex justify-center items-center mt-2 max-xs:mt-1">
                  <FaPhone />
                </span>
                {phone && (
                  <p className="text-white text-sm sm:text-lg mb-4 flex flex-col">
                    <span className="font-bold">Phone:</span>
                    <span>{phone.content}</span>
                  </p>
                )}
              </div>
              <div className="flex items-start gap-4">
                <span className="max-xs:w-8 max-xs:h-8 w-9 h-9 rounded-full text-primary-color1 bg-white-100 text-xl flex justify-center items-center mt-3 max-xs:mt-1">
                  <MdEmail />
                </span>
                {email && (
                  <p className="text-white text-sm sm:text-lg flex flex-col">
                    <span className="font-bold">Email:</span>
                    <span> {email.content}</span>
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="w-[98%] overflow-hidden xl:w-1/2 lg:mt-20 xl:mt-14">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>

  );
};

export default function Page() {
  return (
    <Suspense fallback={<Loader />}>
      <ContactUsPage />
    </Suspense>
  );
}
