import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["better-auth-studio"],
  outputFileTracingIncludes: {
    "/api/studio": [
      "./node_modules/better-auth-studio/dist/public/**/*",
      "./node_modules/better-auth-studio/public/**/*",
    ],
  },
};

export default nextConfig;
