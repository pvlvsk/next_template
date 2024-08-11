// next.config.js
const path = require("path");

module.exports = {
  webpack(config) {
    config.resolve.alias["@"] = path.join(__dirname, "");
    config.resolve.alias["@src"] = path.join(__dirname, "src");
    config.resolve.alias["@entities"] = path.join(__dirname, "src/entities");
    config.resolve.alias["@styles"] = path.join(__dirname, "src/styles");
    config.resolve.alias["@accets"] = path.join(__dirname, "src/accets");
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};
