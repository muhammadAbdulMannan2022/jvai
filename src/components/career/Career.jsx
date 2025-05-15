import HeroReUseable from "../../Helpers/HeroReUseable";

import { Outlet } from "react-router";
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
      <Outlet />
    </div>
  );
}
