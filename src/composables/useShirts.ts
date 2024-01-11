import { supabase } from "@/lib/supabaseClient";
import { ref } from "vue";
export function useShirts() {
  const shirts = ref<any[] | null>([]);
  const searchValue = ref<string>("");
  const getShirts = async () => {
    try {
      const response = await supabase.from("products").select();
      const filteredShirts = response.data;
      if (filteredShirts) {
        const getCategory = filteredShirts.filter(
          (item) => item.category === "shirt"
        );
        shirts.value = getCategory;
        console.log(shirts.value);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getPants = async () => {
    try {
      const response = await supabase.from("products").select();
      const filteredPants = response.data;
      if (filteredPants) {
        const getCategory = filteredPants.filter(
          (item) => item.category === "pants"
        );
        shirts.value = getCategory;
        console.log(shirts.value);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getAccessories = async () => {
    try {
      const response = await supabase.from("products").select();
      const filteredAccessories = response.data;
      if (filteredAccessories) {
        const getCategory = filteredAccessories.filter(
          (item) => item.category === "accessories"
        );
        shirts.value = getCategory;
        console.log(shirts.value);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getGlasses = async () => {
    try {
      const response = await supabase.from("products").select();
      const filteredSunglasses = response.data;
      if (filteredSunglasses) {
        const getCategory = filteredSunglasses.filter(
          (item) => item.category === "glasses"
        );
        shirts.value = getCategory;
        console.log(shirts.value);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getProducts = async () => {
    try {
      const response = await supabase.from("products").select();
      shirts.value = response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const searchProduct = () => {
    if (shirts.value && shirts.value.length > 3) {
      return shirts.value.filter((item) =>
        item.name.toLowerCase().includes(searchValue.value.toLowerCase())
      );
    }
  };

  return {
    shirts,
    searchValue,
    getShirts,
    getPants,
    getAccessories,
    getGlasses,
    getProducts,
    searchProduct,
  };
}
