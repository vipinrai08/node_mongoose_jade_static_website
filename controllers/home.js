/**
 * GET /
 * Home page.
 */

var About = require('../models/about');
var Menu = require('../models/menu');
var Gallery = require('../models/gallery');
var Chefs = require('../models/chefs');
var Contact = require('../models/contact');

exports.index = async function(req, res) {
    const aboutData = await About.findOne();
    const menuData = await Menu.findOne();
    const galleryData = await Gallery.findOne();
    const chefsData = await Chefs.findOne();
    const contactData = await Contact.findOne();

	res.render('home', {
		aboutData,
		menuData,
		galleryData,
		chefsData,
		contactData
	});
};