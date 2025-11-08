/**
 * Metro configuration for React Native
 * https://github.com/facebook/metro
 *
 * This config supports:
 * - @ alias for project root
 * - TypeScript
 * - Expo + NativeWind
 */

const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

const projectRoot = __dirname;

const config = getDefaultConfig(projectRoot);

config.resolver.extraNodeModules = new Proxy(
  {},
  {
    get: (target, name) => path.join(projectRoot, "node_modules", name),
  }
);

config.watchFolders = [projectRoot];

module.exports = config;
