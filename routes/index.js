/*
 * GET home page.
 */
 
function index(req, res){
  res.render('index', { title: 'gotime' });
};

/**
 * Set up routes
 */
var dataStoreNodeApps = require('./nodeapps');

module.exports = function(app, options) {
	app.get('/', index);
	
	app.get('/json/nodeapps/:id', dataStoreNodeApps.findById);
	app.get('/json/nodeapps', dataStoreNodeApps.findAll);
}
