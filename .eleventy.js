module.exports = function (eleventyConfig) {
  // watch and add css files
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addWatchTarget('css');

  // change input and output folders
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
