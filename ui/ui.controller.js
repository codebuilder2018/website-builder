import { listPages } from '../page/page.services';

export const home = async (req, res) => {
  const pages = await listPages();
  res.render('home', { title: 'Web Spalsh Weaver', pages });
};

export const editor = async (req, res) => {
  const pages = await listPages();
  const selectedPage = pages.find((page) => page.id === req.params.pageId);
  res.render('editor', { title: 'Web Spalsh Weaver', pages, selectedPage });
};