export enum RoutePathEnum {
  HOME = "/",
  ABOUT = "/about",
  CONTACT = "/contact",
  LOGIN = "/login",
  PRODUCTID = "/product/:id",
  REGISTER = "/register",
  CATEGORIES = "/categories",
  NOT_FOUND = "/:pathMatch(.*)*",
}

export enum RouteNameEnum {
  HOME = "Home",
  ABOUT = "About",
  CONTACT = "Contact",
  LOGIN = "Login",
  PRODUCTID = "Product",
  REGISTER = "Register",
  CATEGORIES = "Categories",
  NOT_FOUND = "NotFound",
}
