import { supabase } from "@/lib/supabaseClient";
import { ref } from "vue";
export function useShirts() {
  const shirts = ref<any[] | null>([]);
  const pants = ref<any[] | null>([]);
  const acessories = ref<any[] | null>([]);
  const sunglasses = ref<any[] | null>([]);
  const getShirts = async () => {
    try {
      const response = await supabase.from("products").select();
      shirts.value = response.data;
      console.log(response.data);
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
        pants.value = getCategory;
        console.log(pants.value);
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
        acessories.value = getCategory;
        console.log(acessories.value);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getSunglasses = async () => {
    try {
      const response = await supabase.from("products").select();
      const filteredSunglasses = response.data;
      if (filteredSunglasses) {
        const getCategory = filteredSunglasses.filter(
          (item) => item.category === "sunglasses"
        );
        sunglasses.value = getCategory;
        console.log(sunglasses.value);
      }
    } catch (error) {
      console.log(error);
    }
  };

  getShirts();
  getPants();
  getAccessories();
  getSunglasses();
  return { shirts, pants, acessories, sunglasses };
}
