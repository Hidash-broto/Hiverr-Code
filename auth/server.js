const express = require('express');
const http = require('http');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

server.listen(5000, () => console.log('Server started running on 5000'));
