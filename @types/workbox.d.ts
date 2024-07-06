import { Workbox } from "@types/workbox-window";

declare global {
  interface Window {
    workbox: Workbox;
  }
}
