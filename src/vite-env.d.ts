/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
  // Tambahkan variabel lingkungan lainnya jika ada
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

