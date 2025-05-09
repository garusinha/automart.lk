import React from "react";

function InfoSection() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-10 lg:px-16 mt-10">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-4 md:items-center">
          <div className="md:col-span-2 flex justify-center">
            <img
              // src="/public/logo.png"
              src={`${import.meta.env.BASE_URL}logo.png`}
              className=" w-[200px] md:w-[500px] h-auto md:max-w-lg lg:max-w-xl"
              alt=""
            />
          </div>

          <div className="md:col-span-2">
            <div className="max-w-lg md:max-w-none">
              <h2 className="text-lg md:text-xl font-semibold text-gray-700 sm:text-2xl text-center">
                Find Your Next Ride on AutoMart.Lk
              </h2>

              <p className="mt-2 text-gray-500 text-sm md:text-lg md:text-justify text-center">
                AutoMart.Lk aims to be Sri Lanka's premier online marketplace
                for easily buying and selling vehicles. Browse a wide selection
                of new and used cars with detailed listings and connect directly
                with sellers across the country.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
