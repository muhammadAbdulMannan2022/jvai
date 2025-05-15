import React from "react";
import HeroReUseable from "../../Helpers/HeroReUseable";
import GradientTitle from "../../Helpers/GradientTitle";
export default function Career() {
  return (
    <div className="">
      <HeroReUseable
        title={
          <>
            Explore Career <br /> Opportunities in{" "}
            <span className="text-blue-500">JVAI</span>
          </>
        }
        bgImag={`/career/careerbg.png`}
      />
      <div className="px-40 py-16">
        <GradientTitle
          text={
            <>
              Unlock your future! <br /> start your professional career at{" "}
              <span className="text-blue-500">JVAI</span>
            </>
          }
          className={`bg-gradient-to-r from-blue-500 to-blue-950 text-5xl font-bold`}
        />
        <div className="w-[70%] flex gap-5 mt-8">
          <div className="relative flex items-center justify-center flex-col w-[40%]">
            <h1 className="text-lg text-blue-500">Career</h1>
            <img className="" src="/career/arrowLongL.png" alt="" />
          </div>
          <div className="w-[60%]">
            <p className="text-[#464646] text-lg">
              We challenge assumptions and seek to view every situation from all
              perspectives. Our passion lies in transforming ideas into
              universal human values expanding the boundaries of what’s
              possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
