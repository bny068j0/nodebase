import { defineStudioConfig } from "better-auth-studio/config";
import { auth } from "./src/lib/auth";

export default defineStudioConfig({
  auth,
  basePath: "/api/studio",
  access: {
    // Include "" so users without a `role` column (or default "user" role) can sign in locally
    roles: ["admin", "user", ""],
    // Optional: restrict to specific emails
    // allowEmails: ["dinhthanhtai.xz@gmail.com"],
  },
  metadata: {
    title: "Nodebase Auth Studio",
    theme: "auto",
  },
});
