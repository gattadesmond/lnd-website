module.exports = {
  common: {
    NEXT_REVALIDATE_KEY: "!dfF355vcd33@FGG",
    HOSTNAME: "0.0.0.0",
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
