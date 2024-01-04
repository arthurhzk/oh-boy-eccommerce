import { navLink } from "@/domain/types/navLink";
import { RoutePathEnum } from "@/domain/enums/routeEnums";
const navlinks: navLink[] = [
  { name: "Home", path: RoutePathEnum.HOME },
  { name: "Sobre", path: RoutePathEnum.ABOUT },
  { name: "Contato", path: RoutePathEnum.CONTACT },
];
export default navlinks;
