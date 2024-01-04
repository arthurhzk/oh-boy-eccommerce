import { supabase } from "@/lib/supabaseClient";
import { ref } from "vue";
export function useShirts() {
  const shirts = ref<any[] | null>([]);
  const getShirts = async () => {
    try {
      const response = await supabase.from("t-shirts").select();
      shirts.value = response.data;
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  getShirts();
  return { shirts };
}
