var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Touche', { useNewUrlParser: true });

var About = require('../models/about');
var Menu = require('../models/menu');
var Gallery = require('../models/gallery');
var Chefs = require('../models/chefs');
var Contact = require('../models/contact');

var about = new About({
	title: 'OUR RESTAURANT',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare diam commodo nibh.'  
});

about.save(function(err) {
	if (err) throw err;

	console.log('Data inserted.');
	//mongoose.disconnect();
});
var menu = new Menu({
	title: 'MENU',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed.',
	menu:[{
		title:'BREAKFAST & STARTERS',
		items:[{
			name:'Delicious Dish',
			price:'$35',
			description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam.'
		},
		{
			name:'Delicious Dish',
			price:'$30',
			description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam.'	
		},
		{
			name:'Delicious Dish',
			price:'$30',
			description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam.'
		},
		{
			name:'Delicious Dish',
			price:'$30',
			description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam.'
		}
	],
	title:'MAIN COURSE',
		items:[{
			name:'Delicious Dish',
			price:'$45',
			description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam.'
		},
		{
			name:'Delicious Dish',
			price:'$30',
			description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam.'	
		},
		{
			name:'Delicious Dish',
			price:'$30',
			description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam.'
		},
		{
			name:'Delicious Dish',
			price:'$30',
			description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam.'
		}
	],
	title:'DINNER',
		items:[{
			name:'Delicious Dish',
			price:'$45',
			description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam.'
		},
		{
			name:'Delicious Dish',
			price:'$350',
			description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam.'	
		},
		{
			name:'Delicious Dish',
			price:'$30',
			description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam.'
		},
		{
			name:'Delicious Dish',
			price:'$30',
			description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam.'
		}
	],
	title:'BREAKFAST & STARTERS',
		items:[{
			name:'Delicious Dish',
			price:'$35',
			description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam.'
		},
		{
			name:'Delicious Dish',
			price:'$30',
			description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam.'	
		},
		{
			name:'Delicious Dish',
			price:'$30',
			description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam.'
		},
		{
			name:'Delicious Dish',
			price:'$30',
			description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam.'
		}
	],
}]

});
menu.save(function(err){
	if (err) throw err;

	console.log('Data inserted')
});
var gallery = new Gallery({
	title: 'GALLERY',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed.',
	gallery: [
		{
			image: 'img1.jpg',
			categories: [ 'breakfast', 'lunch', 'dinner' ]
		},
		{
			image: 'img2.jpg',
			categories: [ 'breakfast', 'lunch', 'dinner' ]
		},
		{
			image: 'img3.jpg',
			categories: [ 'breakfast', 'lunch', 'dinner'  ]
		},
		{
			image: 'img4.jpg',
			categories: [ 'breakfast', 'lunch', 'dinner'  ]
		},
		{
			image: 'img5.jpg',
			categories: [ 'breakfast', 'lunch', 'dinner'  ]
		},
		{
			image: 'img6.jpg',
			categories: [ 'breakfast', 'lunch', 'dinner'  ]
		}
	],
});
gallery.save(function(err) {
	if (err) throw err;

	console.log('Data inserted.');
});
var chefs = new Chefs({
	title: 'MEET OUR CHEFS',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.',
	chefs:[{
		image: "01.jpg",
		name: "Mike Doe",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam"

	},
	{
		image: "02.jpg",
		name: "Chris Doe",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam."
	},
	{
		image: "03.jpg",
	name: "Ethan Doe",
	description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam."
   }]
});
chefs.save(function(err) {
	if (err) throw err;
		console.log('Data inserted')
	
});
var contact = new Contact({
	address: '4321 California St,San Francisco, CA 12345',
	openinghours:[{
		daytime:'Mon-Thurs: 10:00 AM - 11:00 PM'
	},
     {
	daytime:'Fri-Sun: 11:00 AM - 02:00 AM'
     }],
	contactinfo:[{
		phone: '+1 123 456 1234',
	    email: 'info@company.com'
	}]
	
});
contact.save(function(err){
	if (err) throw err;
	console.log('Data inserted')
});