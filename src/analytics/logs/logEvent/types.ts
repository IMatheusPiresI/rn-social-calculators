export type EventValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | object
  | { [key: string]: EventValue };

export type EventParams = {
  [key: string]: EventValue;
};
