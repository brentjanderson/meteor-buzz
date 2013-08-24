Package.describe({
	summary: "The fantastic Buzz javascript sound library repackaged for Meteor"
});

Package.on_use(function (api) {
	
	if (api.export) // ensure backwards compatibility with Meteor pre-0.6.5
    		api.export('BUZZ');

	api.add_files([
		'lib/buzz/dist/buzz.js'
		], 'client');
});
