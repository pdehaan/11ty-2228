module.exports = (eleventyConfig) => {
  eleventyConfig.setLiquidOptions({
    dynamicPartials: false,
    strictVariables: false,
    strictFilters: false,
    jekyllInclude: true
  });

  eleventyConfig.addFilter("inspect", require("node:util").inspect);

  return {
    dir: {
      input: "src",
      output: "www",
    }
  };
};
