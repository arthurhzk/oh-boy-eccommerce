import { defineStore } from "pinia";
import { supabase } from "@/lib/supabaseClient";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { RoutePathEnum } from "@/domain/enums/routeEnums";
export const useUserStore = defineStore("users", () => {
  const initialState = {
    email: "",
    password: "",
  };
  const isLoggedIn = ref(false);
  const state = ref(initialState);
  const router = useRouter();

  const signInUser = async () => {
    try {
      await supabase.auth.signInWithPassword({
        email: state.value.email,
        password: state.value.password,
      });
      isLoggedIn.value = true;
      router.push(RoutePathEnum.HOME);
    } catch (error) {
      console.log(error);
      isLoggedIn.value = false;
    }
  };

  const signOutuser = async () => {
    try {
      await supabase.auth.signOut();
      isLoggedIn.value = false;
    } catch (error) {
      console.log(error);
    }
  };

  return { state, signInUser, isLoggedIn, signOutuser };
});
