'use strict';

module.exports = function(driver, connectorSpec) {
	connectorSpec.shouldLoadWebsite(driver, {
		url: 'https://tunein.com/radio/Classic-Rock-Hits-s249994/'
	});
};
