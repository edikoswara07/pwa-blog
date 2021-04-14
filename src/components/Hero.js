import React from "react";

const Hero = (props) => {
  return (
    <>
      <div
        className="rounded-xl p-8 flex flex-col sm:flex-row justify-center sm:justify-start 
        items-center mt-10 bg-bluegray-900 mx-4 lg:mx-40"
      >
        <div>
          <img
            src="/images/mina1.jpg"
            alt="Avatar"
            className="rounded-full h-40 w-40 inset-0  object-cover object-center mr-0 sm:mr-12"
          />
        </div>
        <div className="mt-8 sm:mt-0">
          <h1 className="text-2xl sm:text-3xl font-semibold text-bluegray-100 leading-relaxed">
            Hallo, I'm Edi Koswara
          </h1>
          <p className="font-light text-sm text-bluegray-300 leading-relaxed mt-0 sm:mt-2">
            Front-end Engginer
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
