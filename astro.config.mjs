// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import DreamForm from "../dreamingapp/src/components/DreamForm.astro"; // ubah dari .astro ke .jsx
import DreamList from "../dreamingapp/src/components/DreamList.jsx"; // ubah dari .astro ke .jsx

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()]
});