import { defineConfig } from 'astro/config';
import elm from 'astro-elm';

export default defineConfig({
    integrations: [elm()]
});