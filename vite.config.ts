import type { PluginOption, UserConfig } from 'vite-plus';
import { askr } from '@askrjs/vite';

function askrPlugin(): PluginOption {
  return askr({
    images: {
      widths: [320, 640, 960],
    },
  }) as unknown as PluginOption;
}

export default function config(): UserConfig {
  const basePath = normalizeBasePath(process.env.SITE_BASE_PATH);
  return {
    base: basePath ? `${basePath}/` : '/',
    plugins: [askrPlugin()],
    lint: {
      ignorePatterns: ['.askr/**', 'dist/**', 'node_modules/**'],
    },
    fmt: {
      ignorePatterns: [
        '.askr/**',
        'dist/**',
        'node_modules/**',
        'src/generated/**',
        'src/posts/**',
        'public/search-index.json',
        'public/redirects.json',
      ],
      semi: true,
      singleQuote: true,
      trailingComma: 'es5',
      printWidth: 80,
      tabWidth: 2,
    },
    build: {
      outDir: '.askr/client',
      emptyOutDir: true,
      sourcemap: true,
    },
  };
}

function normalizeBasePath(value: string | undefined): string {
  if (!value || value === '/') return '';
  return `/${value}`.replace(/\/{2,}/g, '/').replace(/\/$/, '');
}
