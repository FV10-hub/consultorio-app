"use client";
import { SearchSchema } from "@/src/schema/schema";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function PersonaSearchForm() {
  const router = useRouter();
  const handleSearchForm = (formdata: FormData) => {
    const data = {
      search: formdata.get("search"),
    };
    const result = SearchSchema.safeParse(data);
    if (!result.success) {
      result.error.issues.forEach((issue) => {
        toast.error(issue.message);
      });
      return;
    }
    router.push(`/personas/search?search=${result.data.search}`);
  };
  return (
    <form action={handleSearchForm} className="flex items-center">
      <input
        type="text"
        placeholder="Buscar Producto"
        className="p-2 placeholder-gray-400 w-full"
        name="search"
      />

      <input
        type="submit"
        className="bg-indigo-600 p-2 uppercase text-white cursor-pointer"
        value={"Buscar"}
      />
    </form>
  );
}
