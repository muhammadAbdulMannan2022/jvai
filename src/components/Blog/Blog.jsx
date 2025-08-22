import HeroReUseable from "../../Helpers/HeroReUseable";
import { Outlet } from "react-router";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <div className="w-full min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] lg:h-[80vh] bg-radial from-blue-900 via-blue-950 to-black bg-bottom">
        <div className="w-full h-[80vh] md:h-auto min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] lg:h-[80vh] px-2 sm:px-4 md:px-8 lg:px-40 flex items-center justify-center bg-[url(/work.svg)] bg-no-repeat bg-cover bg-center ">
          <div className="h-full w-full flex items-center justify-center">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold max-w-4xl text-white text-center">
              Stay Updated with Our Latest{" "}
              <span className="text-blue-500">
                News, Insights, and Industry
              </span>{" "}
              into Powerful <br /> Trends
            </h1>
          </div>
        </div>
      </div>
      <Outlet />
    </main>
  );
}
