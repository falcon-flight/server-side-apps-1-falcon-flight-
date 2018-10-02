'use strict';

const express = require('express');

const app = express();

app.get('/', (request, response) => {
    response.send('Hello MGT-656/660!');
});

app.listen(process.env.PORT || 4000);