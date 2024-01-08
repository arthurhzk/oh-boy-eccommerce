import { NavType } from "@/domain/types/NavType";
import { RoutePathEnum } from "@/domain/enums/routeEnums";
const navlinks: NavType[] = [
  { name: "Home", path: RoutePathEnum.HOME },
  { name: "Sobre", path: RoutePathEnum.ABOUT },
  { name: "Contato", path: RoutePathEnum.CONTACT },
  { name: "Categorias", path: RoutePathEnum.CATEGORIES },
  { name: "Carrinho", path: RoutePathEnum.CART },
];
export default navlinks;
