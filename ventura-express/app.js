const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const Trip = require('./models/trip');

const app = express();

/* setup some middlewares */
app.use(bodyParser.urlencoded({ extended: true })); // process URL encoded forms
app.use(cors()); // enable CORS
app.use(require('./middleware').setBrand); // custom middleware

app.get("/", async function(req, res) {
  res.send({ data : 'Welcome from nodejs'});
});

app.get("/trips", async function(req, res) {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  const trips = await Trip.findAll({
    where: {
      project_id: req.project_id,
      locale_id: req.locale_id,
    },
    offset: page,
    limit: limit,
  });
  res.send({ data : trips });
});

// start server
const port = 8000;
app.listen(port, () => {
  console.log('We are live on ' + port);
});
