export default function Title({ title, desc }) {
  return (
    <div className="flex flex-col items-center justify-center mb-12 text-center">
      <h1 className="text-blue-950 text-4xl font-bold mb-4 max-w-3xl">{title}</h1>
      <p className="w-full md:w-[70%] max-w-2xl">{desc}</p>
    </div>
  );
}
