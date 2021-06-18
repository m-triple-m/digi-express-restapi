const express = require('express');
const api_config = require('./config');
const app = express();
const port = api_config.port;
const userRouter = require('./routers/userManager');
const utilRouter = require('./routers/utils');
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use('/user', userRouter);
app.use('/util', utilRouter);

app.use(express.static('./uploads'))

app.get('/getuser', (req, res) => {
    res.send('user request at index');
})

app.get('/home', (req, res) => {
    res.send('request processed at home');
})

app.get('/add', (req, res) => {
    console.log('an add request');
    res.send('got an add request');
})

app.listen(port, () => {
    console.log('Hurray!!!!! server started on port ' + port);
});