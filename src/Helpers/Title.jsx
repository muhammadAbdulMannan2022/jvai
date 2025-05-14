export default function Title({ title, desc }) {
  return (
    <div className="flex flex-col items-center justify-center mb-12 text-center">
      <h1 className="text-blue-950 text-4xl font-bold mb-4">{title}</h1>
      <p className="w-full md:w-[50%] lg:w-[40%]">{desc}</p>
    </div>
  );
}
