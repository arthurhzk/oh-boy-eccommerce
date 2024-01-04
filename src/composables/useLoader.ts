import { ref } from "vue";
export function useLoader() {
  const isLoading = ref<boolean>(false);

  return {
    isLoading,
  };
}
