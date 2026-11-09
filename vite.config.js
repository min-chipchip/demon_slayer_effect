import { defineConfig } from 'vite';

// Relative base so the build works under a GitHub Pages subpath
// (https://<user>.github.io/demon_slayer_effect/) as well as at a domain root.
export default defineConfig({
  base: './',
});
