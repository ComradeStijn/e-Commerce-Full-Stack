import { defineConfig } from 'vite';

export default defineConfig(() => {
    return {
        build: {
            rollupOptions: {
                input: {
                  home: './home.html',
                },
            },
        },
    };
});