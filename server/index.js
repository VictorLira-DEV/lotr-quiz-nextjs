const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const QuestionModel = require('./models/Questions');

require('dotenv').config();

app.use(cors());
app.use(express.json());

mongoose.connect(
    "mongodb+srv://victor-lira:parafernalha@lotr-cluster.xrrjs.mongodb.net/quiz-app?retryWrites=true&w=majority",
    { useNewUrlParser: true }
);

app.get('/read', (req, res) => {
    QuestionModel.find({}, (error, result) => {
        if(error){
            res.send(error)
        }else{
            res.send(result)
        }
    })
})

app.listen(process.env.PORT || 3001, () => {
    return console.log('server is running')
})