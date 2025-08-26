/// <reference types="astro/client" />
/// <reference types="@astrojs/preact/client" />

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
