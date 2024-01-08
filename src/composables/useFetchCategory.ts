import { supabase } from "@/lib/supabaseClient";
import { useLoader } from "./useLoader";
const { isLoading } = useLoader();
import { ref } from "vue";
export function useFetchCategory() {
  const categories = ref<any[] | null>([]);
  const getCategory = async () => {
    isLoading.value = true;
    try {
      isLoading.value = false;
      const response = await supabase.from("categories").select();
      categories.value = response.data;
    } catch (error) {
      console.log(error);
      isLoading.value = false;
    }
  };

  return { categories, getCategory };
}
