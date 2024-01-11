export enum RoutePathEnum {
  HOME = "/",
  ABOUT = "/about",
  CONTACT = "/contact",
  LOGIN = "/login",
  PRODUCTID = "/product/:id",
  REGISTER = "/register",
  CATEGORIES = "/categories",
  CATEGORIESID = "/categories/:category",
  PRODUCTS = "categories/products",
  NOT_FOUND = "/:pathMatch(.*)*",
  CART = "/cart",
}

export enum RouteNameEnum {
  HOME = "Home",
  ABOUT = "About",
  CONTACT = "Contact",
  LOGIN = "Login",
  PRODUCTID = "Product",
  REGISTER = "Register",
  CATEGORIES = "Categories",
  CATEGORIESID = "CategoriesID",
  ACCESSORIES = "Accessories",
  NOT_FOUND = "NotFound",
  CART = "Cart",
}
