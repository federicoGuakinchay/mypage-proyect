/// <reference types="vite/client" />

// Declare the AppDispatch type from './store'
declare module './store' {
  export type AppDispatch = typeof import('./store').store.dispatch;
}

// Declare the global variable
declare global {
  let side_menu_open: boolean;
  side_menu_open=false
}

// Ensure this file is treated as a module
export {};