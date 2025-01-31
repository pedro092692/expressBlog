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

app.post('/submit', (req, res)=>{
    userPost.push({
        postName: req.body.postName,
        imgURL: req.body.imgURL,
        postContent: req.body.postName
    });
    
    res.redirect('/');
});

app.get('/post/:id', (req, res)=>{
    var postId = req.params.id;
    notFoundRedirect(res, postId);
    var post = userPost[postId]
    res.render('post.ejs', post );
});

app.get('/post/update/:id', (req, res)=>{
    var postId = req.params.id;
    notFoundRedirect(res, postId);
    var post = userPost[postId]
    post.id = postId;
    res.render('new-post.ejs', post);
});

app.post('/update/:id', (req, res)=>{
    var post =  userPost[req.params.id];
    post.postContent = req.body.postContent;
    post.imgURL = req.body.imgURL;
    post.postName = req.body.postName;
    res.redirect('/');
});

//redirect notfound
function notFoundRedirect(res, id){
    console.log('hi pedro' + id);
    var post = userPost[id]
    if(!post){
       res.redirect('/');
    }
}


//start sever
app.listen(port, ()=>{
    console.log(`Server is listen on ${port}.`);
});