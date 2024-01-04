import { supabase } from "@/lib/supabaseClient";
import { ref } from "vue";

export function useRegister() {
  const initialState = {
    email: "",
    password: "",
  };
  const state = ref(initialState);
  const signUpSuccess = ref();
  const userId = ref();
  const signUpUser = async () => {
    try {
      const response = await supabase.auth.signUp({
        email: state.value.email,
        password: state.value.password,
      });
      signUpSuccess.value = response.data.session?.access_token;
      userId.value = response.data.user?.id;
    } catch (error) {
      console.log(error);
    }
  };

  return { state, signUpUser };
}
