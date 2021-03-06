/* skel-baseline v2.0.1 | (c) n33 | getskel.com | MIT licensed */

(function($) {

	skel.init({
		reset: 'full',
		breakpoints: {

			// Global.
				global: {
					href: '/public/themes/baseline/css/style.css',
					containers: 1400,
					grid: {
						gutters: ['2em', 0]
					}
				},

			// XLarge.
				xlarge: {
					media: '(max-width: 1680px)',
					href: '/public/themes/baseline/css/style-xlarge.css',
					containers: 1200
				},

			// Large.
				large: {
					media: '(max-width: 1280px)',
					href: '/public/themes/baseline/css/style-large.css',
					containers: 960,
					grid: {
						gutters: ['1.5em', 0]
					},
					viewport: {
						scalable: false
					}
				},

			// Medium.
				medium: {
					media: '(max-width: 980px)',
					href: '/public/themes/baseline/css/style-medium.css',
					containers: '90%',
					grid: {
						zoom: 2
					}
				},

			// Small.
				small: {
					media: '(max-width: 736px)',
					href: '/public/themes/baseline/css/style-small.css',
					containers: '90%',
					grid: {
						zoom: 3,
						gutters: ['1.25em', 0]
					}
				},

			// XSmall.
				xsmall: {
					media: '(max-width: 480px)',
					href: '/public/themes/baseline/css/style-xsmall.css',
					grid: {
						zoom: 4
					}
				}

		},
		plugins: {
			layers: {

				// Config.
					config: {
						mode: 'transform'
					},

				// Navigation Panel.
					navPanel: {
						animation: 'pushX',
						breakpoints: 'medium',
						clickToHide: true,
						height: '100%',
						hidden: true,
						html: '<div data-action="moveElement" data-args="nav"></div>',
						orientation: 'vertical',
						position: 'top-left',
						side: 'left',
						width: 250
					},

				// Navigation Button.
					navButton: {
						breakpoints: 'medium',
						height: '4em',
						html: '<span class="toggle" data-action="toggleLayer" data-args="navPanel"></span>',
						position: 'top-left',
						side: 'top',
						width: '6em'
					}

			}
		}
	});

	$(function() {

		// jQuery ready stuff.

	});

})(jQuery);