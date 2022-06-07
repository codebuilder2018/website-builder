import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';

import uiRoute from './ui/ui.route';
import pageRoute from './page/page.route';
import assetRoute from './assets/assets.route';

const app = express();
app.use(express.json());

const corsOptions = {
  origin: function (origin, callback) {
    callback(null, true);
  },
};

corsOptions.credentials = true; 
app.use(cors(corsOptions));

app.use('/resources', express.static(path.join(__dirname, 'public')));
app.use('views', express.static(path.join(__dirname, 'views')));
app.set('view engine', 'hbs');

const MONGODB_URI = 'mongodb+srv://admin:demo@website-weaver.uqouv.mongodb.net/?retryWrites=true&w=majority';

const mongoUri = MONGODB_URI || 'mongodb://localhost:27017/webpage_builder';
mongoose.connect(mongoUri, 
  {
      useNewUrlParser: true,
      useUnifiedTopology: true
  }
  ).then(()=>{
      console.log("DB CONNECTED.....")
  }).catch(()=> {
      console.log("DB FAILURE.....")
  });


app.use('/pages', pageRoute);
app.use('/assets', assetRoute);
app.use('/', uiRoute);


const PORT = process.env.APP_PORT || 8085;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});