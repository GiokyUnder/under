import { defineConfig } from "astro/config";
import purgecss from "astro-purgecss";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  prefetch: {
    prefetchAll: true,
  },
  integrations: [
    purgecss({
      fontFace: true,
      keyframes: true,
      variables: true,
    }),
    tailwind(),
  ],
});
