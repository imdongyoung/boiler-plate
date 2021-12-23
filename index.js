const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://dongyoung:816207@boliderplate.kvejf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {})
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));


app.get('/', (req, res) => res.send('Hello World!~ 안녕헤세요'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));