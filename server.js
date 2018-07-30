const express=require('express');
const hbs=require('hbs');

let app=express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs');
app.use(express.static(__dirname + '/public'));
hbs.registerHelper('getCurrentYear',()=>{
return new Date().getFullYear();
});





app.get('/',(req,res)=>{
	res.render('home.hbs',{
	pageTitle: 'Home Page',
	welcome:' Welcome Here'
	});
});

app.get('/about',(req,res)=>{
	res.render('about.hbs',{
	pageTitle: 'About Page'
});
});

app.listen(3000,()=>{
console.log('Server is up at port 3000');
});