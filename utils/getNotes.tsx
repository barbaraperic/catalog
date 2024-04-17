
const importAll = async (r: any) => {
  const articles = [];
  for (const fileName of r.keys()) {
    const file = await r(fileName);
    const slug = fileName.substr(2).replace(/\/page\.mdx$/, "");

    articles.push({
      slug,
      metadata: file?.metadata,
      component: file?.default,
      readingTime: file?.metadata_readingTime,
    });
  }
  return articles;
};

export const getAllArticles = async () => {
  const articlesContext = require.context("../app/notes/", true, /^\.\/[^\/]+\/page\.mdx$/);
  const articles = await importAll(articlesContext);
  return articles;
};

export const getArticleBySlug = async (slug: string) => {
  const file = await import(`../app/notes/${slug}/page.mdx`);

  return {
    slug,
    component: file?.default,
    metadata: file?.metadata,
    readingTime: file?.metadata_readingTime,
  };
};