const express = require('express');
const bodyParser = require('body-parser');
const bc = require('./budgetcontrollers');
const app = express();
app.use(bodyParser.json());

const port = 3005;

app.get('/api/budget',bc.read);
app.post('/api/budget', bc.create);
app.put(`/api/budget/:id`, bc.update);
app.delete('/api/budget/:id',bc.delete);

app.listen(port, ()=> console.log(`listening on port ${port}`));

