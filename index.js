var express = require('express');
var fs = require('fs');
var app = express();

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html');
});

app.get('/courses', function(request, response){
  fs.readFile('courses.json', 'utf8', function (err,data){
    var courses = JSON.parse(data);
    response.locals = {courses: courses};
    response.render('courses.ejs');
  });
});

app.get('/courses/:id',function(request,response){
  fs.readFile('courses.json', 'utf8', function(err, data){
    var coursesParsed = JSON.parse(data);
    var courses = productsParsed.filter( function (ojb){
      return obj.id === parseInt(request.params.id);
    })[0];

    response.locals = {course: course};
    response.render('courses.ejs');
  });
});

app.listen(8000);
