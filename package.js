Package.describe({
	summary: "Web Speach API for Meteor!",
	version: "1.0.0",
	git: "http://github.com/ecwyne/meteor-voice-elements.git",
	name: 'ecwyne:voice-elements'
});

Package.onUse(function(api) {
	api.use('underscore');
	api.use('ecwyne:polymer@1.0.1')
	api.versionsFrom('METEOR@0.9.0');
	api.addFiles('voice-elements.js', 'server');
});
