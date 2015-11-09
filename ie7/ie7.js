/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'bluecom\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-home4': '&#xe800;',
		'icon-home2': '&#xe801;',
		'icon-wrench': '&#xe802;',
		'icon-menu2': '&#xe803;',
		'icon-star-empty2': '&#xe804;',
		'icon-star-half2': '&#xe805;',
		'icon-star-full2': '&#xe806;',
		'icon-facebook2': '&#xe807;',
		'icon-twitter2': '&#xe808;',
		'icon-vimeo2': '&#xe809;',
		'icon-linkedin': '&#xe80a;',
		'icon-home': '&#xe81b;',
		'icon-home3': '&#xe81c;',
		'icon-menu': '&#xe81d;',
		'icon-star-empty': '&#xe81e;',
		'icon-star-half': '&#xe81f;',
		'icon-star-full': '&#xe820;',
		'icon-google-plus3': '&#xe821;',
		'icon-facebook3': '&#xe822;',
		'icon-twitter3': '&#xe823;',
		'icon-feed4': '&#xe824;',
		'icon-vimeo3': '&#xe825;',
		'icon-picassa2': '&#xe826;',
		'icon-html5': '&#xe827;',
		'icon-bc-logo': '&#xe80b;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
