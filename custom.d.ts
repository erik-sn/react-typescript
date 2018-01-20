/**
 * declaration file to appease compiler on modules that have 
 * no declarations on npm/@types. Possible to further extend
 * these as necessary.
 * 
 * Try to keep these in alphabetical order!
 */

declare module 'autoprefixer' {
  const _: any;
  export = _;
}

declare module 'extract-text-webpack-plugin' {
  const _: any;
  export = _;
}

declare module 'enzyme-adapter-react-16' {
  const _: any;
  export = _;
}

declare module 'raf' {
  const _: any;
  export = _;
}

interface Array<T> {
  find(predicate: (search: T) => boolean) : T;
}