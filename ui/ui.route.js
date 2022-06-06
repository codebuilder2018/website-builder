import express from 'express';
import { editor, home } from './ui.controller';
import renderHtml from '../render/render.controller';

const uiRoute = express.Router();

uiRoute.get("/", home);

uiRoute.get('/:pageId', renderHtml);

uiRoute.get('/editor/:pageId', editor);

uiRoute.all('*', (req, res) => {
    res.render('404');
});
  
export default uiRoute;