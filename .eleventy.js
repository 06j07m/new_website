module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ 'src/static': 'static' });

  // change input and output folders
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
