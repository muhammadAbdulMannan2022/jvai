import HeroReUseable from "../../Helpers/HeroReUseable";
import { Outlet } from "react-router";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <HeroReUseable
        bgImag={"/blog.png"}
        title={
          <>
            Stay Updated with Our Latest{" "}
            <span className="text-blue-500">
              News, <br /> Insights, and Industry
            </span>{" "}
            Trends{" "}
          </>
        }
      />
      <Outlet />
    </main>
  );
}
