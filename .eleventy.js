module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ 'src/assets': 'assets' });
  eleventyConfig.addPassthroughCopy({ 'src/images': 'images' });
  eleventyConfig.addPassthroughCopy({ 'src/styles': 'styles' });
  eleventyConfig.addPassthroughCopy({ 'src/uploads': 'uploads' });
  eleventyConfig.addPassthroughCopy({ 'src/.htaccess': '.htaccess' });


  // change input and output folders
  return {
    dir: {
      input: "src",
      output: "public",
    },
    pathPrefix: "/~mliu102"
  };
};
