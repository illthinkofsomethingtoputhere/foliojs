angular.module('app')
	.constant('defaultConfig', {
		branding: 'Branding',
        logo: 'sample.svg',
		tools: [
            {
                name: 'Profile',
                route: 'profile',
                img: 'images/sample.html'
            },
            {
                name: 'Search',
                route: '',
                img: 'images/sample.html'
            }
        ],
		pages: [
            {
                title: 'Github',
                route: 'github',
                img: 'images/sample.html'
            }
        ]
	});