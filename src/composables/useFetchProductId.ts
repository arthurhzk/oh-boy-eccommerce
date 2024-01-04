import { supabase } from "@/lib/supabaseClient";
import { ref } from "vue";

export function useFetchProductId() {
  const product = ref<any[] | null>([]);
  const fetchProductId = async (id: string | string[]) => {
    try {
      const response = await supabase.from("t-shirts").select("*").eq("id", id);
      product.value = response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return { fetchProductId, product };
}
