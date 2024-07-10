const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
// add in Prism.js highlighting
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addWatchTarget("./src/sass/");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addFilter("capitals", function(string) {
    return string.toUpperCase();
  })

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);


  // Markdown
  const markdownOptions = {
    html: true,
    breaks: true,
    linkify: true,
    typographer: true,
  };

  const MarkdownIt = require("markdown-it");
  const mdRender = new MarkdownIt();
  eleventyConfig.addFilter("renderUsingMarkdown", function(rawString) {
  return mdRender.render(rawString);
  });

  eleventyConfig.addCollection("sortedPatterns", (collection) =>
  collection.getFilteredByTag("patterns").sort((a, b) => {
  if (a.data.pattern < b.data.pattern) return -1;
  else if (a.data.pattern > b.data.pattern) return 1;
  else return 0;
})
);



  return {
    dir: {
      input: "src",
      output: "docs",
      layouts: '_layouts'
    },

  };
}
