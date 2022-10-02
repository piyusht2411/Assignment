const express = require('express');
const db = require('./config/mongoose');
const Info = require('./models/schema');
const path = require('path');
const vie = path.join(__dirname, 'views');

const app = express();
app.set('view engine', 'ejs');
app.set('views', vie);
app.use(express.urlencoded());
app.use(express.static('assets'));

app.post('/create-info', (req, resp) => {
    Info.create({
        username: req.body.username,
        email:req.body.email,
        phone:req.body.phone,
        company:req.body.company
    }, function (err, newInfo) {
        if (err) {
            console.log("Error!");
            return;
        }
        console.log('*****', newInfo);
        return resp.redirect('back');
    })
})
app.get('/', (req, resp) => {
    Info.find({}, (err, infos) => {
        if (err) {
            console.log("err");
            return;
        }
        return resp.render('home', {
            Info_list: infos
        })
    })
})
app.get('/delete-info', (req, resp) => {
    console.log("deleted",req.query)
    let id = req.query.id;

    Info.findByIdAndDelete(id, function (err) {
        if (err) {
            console.log("error!");
            return;
        }
        return resp.redirect('back');
    });

})
app.listen(4500, (err) => {
    if (err) {
        console.log("Error");
        return resp.send("Error during connecting port");
    }
    console.log("Succesfully connected to the port 4500");
})