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
    alt:
      | string
      | {
          k: string;
          e: string;
        };
  }[];
}
