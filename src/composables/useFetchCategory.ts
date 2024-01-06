import { supabase } from "@/lib/supabaseClient";
import { ref } from "vue";
export function useFetchCategory() {
  const categories = ref<any[] | null>([]);
  const getCategory = async () => {
    try {
      const response = await supabase.from("categories").select();
      categories.value = response.data;
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  getCategory();
  return { categories };
}
