/// <reference types="vite/client" />
declare module './store' {
  export type AppDispatch = typeof import('./store').store.dispatch;
}