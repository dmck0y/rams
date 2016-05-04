import express from "express";
import nunjs from "express-nunjucks";

const app = express();

app.set('view engine', 'html');
app.set('views', `${__dirname}/templates`);

app.use('/static', express.static('public'));

nunjs.setup({
  autoescape: true 
}, app);

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(4000, () => {
  console.log('listening on port 4000');
})