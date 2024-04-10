"use client"
import { FichaSchema } from "@/src/schema/schema";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function AddFichaForm({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const handleSubmit = async (formData: FormData) => {
    const data = {
      codigo: formData.get("codigo"),
      descripcion: formData.get("descripcion"),
    };
    
    const result = FichaSchema.safeParse(data);
    console.log(result);
    if (!result.success) {
      result.error.issues.forEach((issue) => {
        toast.error(issue.message);
      });
      return;
    }

    /*const response = await createEspecialidad(result.data);
    if (response?.errors) {
      response.errors.forEach((issue) => {
        toast.error(issue.message);
      });
      return;
    }
*/
    toast.success("Ficha Creada correctamente");
    router.push("/fichas");
  };

  return (
    <div className="">
      <form className="space-y-5" action={handleSubmit}>
     
        {children}
        
      </form>
    </div>
  );
}
