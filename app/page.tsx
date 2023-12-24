// pages/index.tsx (or pages/index.js if not using TypeScript)
import React from "react";
import { FaHeart } from "react-icons/fa";

const Home: React.FC = () => {
  return (
    <main className="w-full gap-10 flex flex-col items-center relative p-7 font-serif text-xl md:text-2xl">
      <div className="absolute -z-10 w-full h-full">
        <img
          src="/snow.gif"
          alt="snow"
          className="w-full h-full opacity-50 object-cover"
        />
      </div>
      <div className="flex h-96 flex-row justify-center text-4xl md:text-7xl text-center font-bold w-full gap-1 items-center">
        <p>Szia, Baba</p>{" "}
        <FaHeart className="duration-300 text-red-600 ease-in-out animate-pulse" />
      </div>
      <p className="w-full md:w-2/3 text-center text-2xl md:text-3xl self-center">
        <strong> Emlékszel tavaly karácsonyra:)?</strong>
      </p>
      <p className="w-full md:w-2/3  self-center">
        {" "}
        Sajnos részletesen én nem, csak egy dologra:
      </p>{" "}
      <p className="w-full md:w-2/3 text-center self-center">
        <strong>Nagyon jó volt.</strong>
      </p>{" "}
      <p className="w-full md:w-2/3 self-center">Tudod miért?</p>{" "}
      <p className="w-full md:w-2/3 self-center">Mert veled beszéltem:))</p>{" "}
      <p className="w-full md:w-2/3 self-center">
        Nagyon nagyon élveztem. Tényleg, megszépítetted a karácsonyomat 🥹
      </p>
      <p className="w-full md:w-2/3 self-center">
        {" "}
        Nem csak a karácsonyomat, hanem az egész évemet, amiben együtt voltunk:)
      </p>
      <p className="w-full md:w-2/3 self-center text-center">
        <strong>Köszönöm!</strong>
      </p>{" "}
      <p className="w-full md:w-2/3 self-center">
        Olyan nagyon szerencsés vagyok veled, hogy le sem tudom írni, se szóba
        önteni{" "}
      </p>
      <p className="w-full md:w-2/3 self-center">
        Persze tettemmel próbálkozom, de kifejezhetetlenül szeretlek 🥰
      </p>{" "}
      <p className="w-full md:w-2/3 self-center">
        Te vagy a legnagyobb ajándék, amit valaha is kaphatok, nem csak
        karácsonyra
      </p>{" "}
      <p className="w-full md:w-2/3 self-center">
        Ezer puszi, nagyon szeretlek 😘
      </p>
      <p className="w-full md:w-2/3 text-center self-center">
        {" "}
        <strong>✨Boldog Karácsonyt, Szerelmem!✨</strong>
      </p>{" "}
      <p className="w-full md:w-2/3 self-center">
        {" "}
        Nézzünk pár karácsonyi képet
      </p>
      <div className="w-full overflow-x-scroll gap-3 flex flex-row">
        <img
          className="flex-0 w-auto object-contain rounded-lg"
          src="/1.jpeg"
          loading="lazy"
        />
        <img
          className="flex-0 w-auto object-contain rounded-lg"
          src="/2.jpeg"
          loading="lazy"
        />
        <img
          className="flex-0 w-auto object-contain rounded-lg"
          src="/3.jpeg"
          loading="lazy"
        />
        <img
          className="flex-0 w-auto object-contain rounded-lg"
          src="/4.jpeg"
          loading="lazy"
        />
        <img
          className="flex-0 w-auto object-contain rounded-lg"
          src="/5.jpeg"
          loading="lazy"
        />
        <img
          className="flex-0 w-auto object-contain rounded-lg"
          src="/6.jpeg"
          loading="lazy"
        />
        <img
          className="flex-0 w-auto object-contain rounded-lg"
          src="/7.jpeg"
          loading="lazy"
        />
        <img
          className="flex-0 w-auto object-contain rounded-lg"
          src="/8.JPG"
          loading="lazy"
        />
        <img
          className="flex-0 w-auto object-contain rounded-lg"
          src="/9.JPG"
          loading="lazy"
        />
        <img
          className="flex-0 w-auto object-contain rounded-lg"
          src="/10.JPG"
          loading="lazy"
        />
        <img
          className="flex-0 w-auto object-contain rounded-lg"
          src="/11.JPG"
          loading="lazy"
        />
        <img
          className="flex-0 w-auto object-contain rounded-lg"
          src="/12.JPG"
          loading="lazy"
        />
        <img
          className="flex-0 w-auto object-contain rounded-lg"
          src="/13.JPG"
          loading="lazy"
        />
        <img
          className="flex-0 w-auto object-contain rounded-lg"
          src="/14.JPG"
          loading="lazy"
        />
        <img
          className="flex-0 w-auto object-contain rounded-lg"
          src="/15.JPG"
          loading="lazy"
        />
        <img
          className="flex-0 w-auto object-contain rounded-lg"
          src="/16.JPG"
          loading="lazy"
        />
      </div>
      <p className="w-full md:w-2/3 self-center">
        PS: Nézd meg, mi van a kabátom jobb zsebében 🤭
      </p>
    </main>
  );
};

export default Home;
