// This is Type Aliases 타입 '별칭'
export type tType =
  | {
      k: string;
      e: string;
    }
  | string;

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

export interface contentsArrayInterface {
  contentsArray: {
    key: string;
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
  }[];
}
