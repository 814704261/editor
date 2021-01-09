const express = require('express'),
	  app = express(),
	  path = require('path');


app.get('/edit', function (req, res){
	res.sendFile(path.join(__dirname, './index.html'));
});

app.get('/display.html', function (req, res){
	res.sendFile(path.join(__dirname, './display.html'));
});

app.listen('80',function (){
	console.log('运行成功');
});