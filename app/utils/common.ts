import { defineAsyncComponent } from "vue";

export const getDinamicComponent = (route:string) => {
  return defineAsyncComponent(() => import(route));
};