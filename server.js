var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    'article-one':{
        title:'article-One|Ravinder',
        heading:'ArticleOne',
        date:'Dec 8,2016',
        content:`
                <p>
                    This is Article One.This is Article One.This is Article One.This is Article One.This is Article One.
                    This is Article One.This is Article One.This is Article One.This is Article One.This is Article One.
                    This is Article One.This is Article One.This is Article One.This is Article One.This is Article One.
                </p>`
    },
    'article-two':{
        title:'article-Two|Ravinder',
        heading:'ArticleTwo',
        date:'Sept 6,2016',
        content:`
                <p>
                    This is Article Two.This is Article Two.This is Article Two.This is Article Two.This is Article Two.
                    This is Article Two.This is Article Two.This is Article Two.This is Article Two.This is Article Two.
                    This is Article Two.This is Article Two.This is Article Two.This is Article Two.This is Article Two.
                </p>`
    },
    'article-three':{
        title:'article-Three|Ravinder',
        heading:'ArticleThree',
        date:'Nov 8,2016',
        content:`
                <p>
                    This is Article Three.Hello!!!!!!!!
                    This is Article Three.Hello!!!!!!!!
                    This is Article Three.Hello!!!!!!!!
                </p>`
    }
};

function createTemplate (data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    var htmlTemplate=
        `<html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width-device-width, intial-scale=1"/>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div>
                    <a href='/'>Home</a>
                </div>
                <hr/>
                <div>
                    <h3>${heading}</h3>
                </div>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
        </html>`
        ; 
 return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res){
    //articleName==article-one
    //articles[articleName]=={} content object for article one
    var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
