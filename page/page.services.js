import Pages from './page.modal';
const mongoose = require('mongoose');

export const createPage = async (pageBody) => {
  const slug = pageBody.name.toLowerCase().split(' ').join('-');
  pageBody.slug = slug;
  const page = new Pages(pageBody);
  const pageResponse = await page.save();
  return pageResponse;
};

export const listPages = async () => {
  const pages = await Pages.find({});
  return pages;
};

export const deletePage = async (pageId) => {
  const pages = await Pages.deleteOne({_id: mongoose.Types.ObjectId(pageId)});
  return "Page deleted successfully";
};

export const updatePage = async (pageId, pageBody) => {};

export const pageDetails = async (pageId) => {
  const pages = await Pages.findOne({ _id: pageId });
  return pages;
};

export const savePageContent = async (pageId, content) => {
  const pageUpdated = await Pages.findOneAndUpdate({ _id: pageId }, { content });
  return pageUpdated;
};

export const findPageById = async (pageId) => {
  const page = await Pages.findById(pageId);
  return page;
};