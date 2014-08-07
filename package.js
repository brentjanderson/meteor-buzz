Package.describe({
	summary: "The fantastic Buzz javascript sound library repackaged for Meteor",
  version: "1.1.4",
  git: "https://github.com/brentjanderson/meteor-buzz.git"
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR-CORE@0.9.0-atm");
	
	if (api.export) // ensure backwards compatibility with Meteor pre-0.6.5
    		api.export('BUZZ');

	api.add_files([
		'lib/buzz/dist/buzz.js'
		], 'client');
});
