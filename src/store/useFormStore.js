import { create } from "zustand";
import { persist } from "zustand/middleware";

const useFormStore = create(
  persist(
    (set) => ({
      formData: {
        name: "",
        surname: "",
        email: "",
        experience: "",
      },
      updateFormData: (newData) =>
        set((state) => ({
          formData: { ...state.formData, ...newData },
        })),
      resetForm: () =>
        set({
          formData: {
            name: "",
            surname: "",
            email: "",
            experience: "",
          },
        }),
    }),
    {
      name: "form-storage", // name of the item in the storage (must be unique)
    }
  )
);

export default useFormStore;
