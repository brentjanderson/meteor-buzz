Package.describe({
	summary: "The fantastic Buzz javascript sound library repackaged for Meteor"
});

Package.on_use(function (api) {
	api.add_files([
		'lib/buzz/buzz.js'
		], 'client');
});