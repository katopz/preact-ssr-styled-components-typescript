module.exports = (config, env, helpers) => {
  // Define a `process.env.SSR` boolean constant:
  const DefinePlugin = helpers.getPluginsByName(config, "DefinePlugin")[0];
  DefinePlugin.plugin.definitions['process.env.SSR'] = String(env.ssr);
};
