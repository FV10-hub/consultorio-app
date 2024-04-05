"use client";
import ContentMenu from "../ui/ContentMenu";
import { useParams } from "next/navigation";

function getMenus() {
  return [
    {
      id: 1,
      name: "Personas",
      imagen: "persona",
      path: "personas",
    },
    {
      id: 2,
      name: "Pacientes",
      imagen: "paciente",
      path: "pacientes",
    },
    {
      id: 3,
      name: "Doctores",
      imagen: "doctor",
      path: "doctores",
    },
    {
      id: 4,
      name: "Especialidades",
      imagen: "especialidad",
      path: "especialidades",
    },
    {
      id: 5,
      name: "Fichas",
      imagen: "ficha",
      path: "fichas",
    },
  ];
}

export default function Sidebar() {
  const menus = getMenus();
  const parametro = useParams<{ menu: string }>();
  console.log(parametro);
  return (
    <aside className="md:w-72 md:h-screen bg-white">
      <nav className="mt-10">
        {menus.map((menu) => (
          <ContentMenu key={menu.id} menu={menu} />
        ))}
      </nav>
    </aside>
  );
}
