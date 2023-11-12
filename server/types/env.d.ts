declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "develop" | "production";
    HOST: string;
    PORT: string;
  }
}
