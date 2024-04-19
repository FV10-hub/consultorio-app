import ImagenesCard from "./ImagenesCard";

export default async function ImagenesLista() {

  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-4 gap-4 items-start">
        <ImagenesCard/>
      </div>
    </>
  );
}
