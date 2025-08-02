import HeroReUseable from "../../Helpers/HeroReUseable";

import { Outlet } from "react-router";
export default function Career() {
  return (
    <div className="">
      <HeroReUseable
        title={
          <span>
            Explore Career <br /> Opportunities in{" "}
            <span className="text-blue-500">JVAI</span>
          </span>
        }
        bgImag={`/career/careerbg.png`}
      />
      <Outlet />
    </div>
  );
}
