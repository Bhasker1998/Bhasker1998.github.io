import React, { useState } from "react";
import img1 from "./images/IMG-20230201-WA0001.jpg";
import img2 from "./images/Snapchat-492267623.jpg";
import img3 from "./images/IMG-20230206-WA0017.jpg";
import img4 from "./images/IMG-20230209-WA0006.jpg";
import img5 from "./images/IMG-20230216-WA0016.jpg";
import img6 from "./images/Snapchat-1783098761.jpg";
import img7 from "./images/Snapchat-1886256455.jpg";
import img8 from "./images/Snapchat-1943950236.jpg";
const obj = {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
};
export default function Anshi() {
  const [loveCouter, setLoveCounter] = useState(1);

  const loveCounterHandler = () => {
    if (loveCouter < 9) setLoveCounter((loveCouter) => loveCouter + 1);
    else setLoveCounter(1);
  };

  const buttonText = () => {
    if (loveCouter >= 5) return "I Love You";
    return "I Hate You";
  };
  return (
    <div
      className={`flex items-center justify-center h-screen flex-col space-y-10 ${
        loveCouter > 5 ? "bg-red-100" : "bg-blue-100"
      }`}
    >
      {loveCouter === 9 ? (
        <div className="h-1/2 w-1/2 bg-slate-200 rounded text-center">
          <p className="text-base m-6 font-serif font-semibold">
            Aa gye yha tk click krte krte I know aaj 16 hai hme 5 months ho gye
            or pta bhi ni lga i hope ap pass me hote or acha lgta baby i miss
            you and love you alot but thoda km pareshan kiya karo 😅 . or thoda
            socho hamare baare me ki how can we be more better .. baki thoda sa
            tough time chl ra hai mera jb tk settle ni hojata . baki its all ok
            ❤️
          </p>
        </div>
      ) : (
        <div className="h-1/2 w-1/2 drop-shadow-2xl">
          <img className="rounded" src={obj[`img${loveCouter}`]} alt="" />
        </div>
      )}
      <div className="flex items-center justify-center">
        <button
          className={`text-xl ${
            loveCouter > 5 ? "bg-red-500" : "bg-blue-500"
          }  rounded-full p-3 text-white drop-shadow-2xl`}
          onClick={loveCounterHandler}
        >
          {buttonText()}
        </button>
      </div>
    </div>
  );
}
