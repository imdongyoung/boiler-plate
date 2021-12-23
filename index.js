const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const {User} = require('./models/User');

const config = require('./config/key');

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect(config.mongoURL, {})
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));



app.get('/', (req, res) => res.send('Hello World!~ 안녕헤세요'));

app.post('/register', (req, res) => {
    // 회원가입 정보들 클라이언트에서 가져옴
    // 가져온 정보 데이터베이스에 넘겨줌
    
    const user = new User(req.body);
    user.save((err, userInfo) => {
        if (err) return res.json({succes: false, err})
        return res.status(200).json({
            succes: true
        })
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));