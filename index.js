import express from "express";

//create app
const app = express();
const port = 3000;

var userPost = [];

//define middlewares 
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

//app routes 
app.get('/', (req, res)=>{
    res.render('index.ejs', {userPost:userPost});
});

app.get('/contact', (req, res)=>{
    res.render('contact.ejs');
});

app.get('/new-post', (req, res)=>{
    res.render('new-post.ejs');
});


//start sever
app.listen(port, ()=>{
    console.log(`Server is listen on ${port}.`);
});