// This is Type Aliases 타입 '별칭'
export type tType =
  | {
      k: string;
      e: string;
    }
  | string;

// https://stackoverflow.com/questions/56457935/typescript-error-property-x-does-not-exist-on-type-window
// This is solution of webkit error in typescript
declare global {
  interface Window {
    webkit: any;
  }
}

export type distributeContentsTypes = {
  key: string;
  component_key?: string;
  content:
    | string
    | {
        k: string;
        e: string;
      };
  caption?:
    | string
    | {
        k: string;
        e: string;
      };
  alt?:
    | string
    | {
        k: string;
        e: string;
      };
  child?: string;
};
