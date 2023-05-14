declare module "*.svg" {
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGElement>
  >;

  export default string;
}

type Without<T, K> = Pick<T, Exclude<keyof T, K>>;
