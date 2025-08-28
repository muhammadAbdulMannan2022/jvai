import Button from "../../Helpers/Button";
import HeroReUseable from "../../Helpers/HeroReUseable";
import { Outlet, useNavigate } from "react-router";

export default function BlogPage() {
  const navigate = useNavigate()
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <div className="w-full h-screen bg-radial from-blue-900 via-blue-950 to-black bg-bottom">
        <div className="w-full h-full px-2 sm:px-4 md:px-8 lg:px-40 flex items-center justify-center bg-[url(/work.svg)] bg-no-repeat bg-cover bg-center ">
          <div className="h-full w-full flex flex-col items-center justify-center">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold max-w-4xl text-white text-center">
              Stay Updated with Our Latest{" "}
              <span className="text-blue-500">
                News, Insights, and Industry
              </span>{" "}
              into Powerful <br /> Trends
            </h1>
            <Button onClick={() => navigate("/blog/create")} text={"Submit Your Content"} className="mt-5 hover:cursor-pointer" />
          </div>
        </div>
      </div>
      <Outlet />
    </main>
  );
}
