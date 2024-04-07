import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex justify-center flex-col items-center mt-5">
      <div className="relative w-40 h-40">
        <Image fill src={"/logo.jpg"} alt="No se pudo cargar" />;
      </div>
      <h1 className="p-1 text-lg text-gray-800">Dra. Maria Paz Favio</h1>
    </div>
  );
}
