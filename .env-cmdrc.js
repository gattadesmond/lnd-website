module.exports = {
  common: {
    NEXT_REVALIDATE_KEY: "!dfF355vcd33@FGG",
    HOSTNAME: "0.0.0.0",
    NEXT_PUBLIC_SUPABASE_URL: "https://bgepihodlciujpaqfppx.supabase.co",
    NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY:
      "sb_publishable_9OvpbqHd29lWKDAZt4IVvA_CB4dUfI7",
    NEXT_PUBLIC_SUPABASE_AUTH_STORAGE_KEY: "sb_auth_token",
    SUPABASE_SECRET_KEY: "sb_publishable_9OvpbqHd29lWKDAZt4IVvA_CB4dUfI7",
  },
  "on-build": {
    NEXT_APP_BUILD: "on",
  },
  "local-dev": {
    NEXT_PUBLIC_BASE_PATH: "",
    PORT: 3000,
    NEXT_PUBLIC_DOMAIN: "http://localhost:3000",
  },
  "local-build": {
    NEXT_PUBLIC_BASE_PATH: "",
    PORT: 8000,
    NEXT_PUBLIC_DOMAIN: "http://localhost:8000",
  },
  uat: {
    NEXT_PUBLIC_BASE_PATH: "/lnd",
    PORT: 8000,
    NEXT_PUBLIC_DOMAIN: "https://momovn-dev.mservice.io",
  },
  staging: {
    NEXT_PUBLIC_BASE_PATH: "/lnd",
    PORT: 8000,
    NEXT_PUBLIC_DOMAIN: "https://momo-stg.mservice.io",
  },
  production: {
    NEXT_PUBLIC_BASE_PATH: "",
    PORT: 8000,
    NEXT_PUBLIC_DOMAIN: "https://product.momo.vn",
  },
};
