import { menus } from "@/prisma/data/menus";
import ContentMenu from "../ui/ContentMenu";

async function getMenus() {
  return await menus;
}

export default async function Sidebar() {
  const menus = await getMenus();
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
