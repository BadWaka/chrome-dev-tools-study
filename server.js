/**
 * Created by BadWaka on 2017/4/27.
 */

const express = require('express');
const app = express();

app.use(express.static('public'));

const server = app.listen(3000, function () {
    console.log('Listening 3000...');
});
