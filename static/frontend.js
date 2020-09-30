/**
 * FRONTEND: rhdwp-reader-alerts
 *
 * Display and user interaction.
 *
 * @uses js-cookie
 */

(function ($) {
	const cookie_prefix = 'rhdwp_reader_alert__';

	function removeDismissedAlerts() {
		$('.reader-alert-item').each(function () {
			const id = $(this).attr('data-post-id');

			if (Cookies.get(`${cookie_prefix}${id}`)) {
				$(this).remove();
			}
		});
	}

	/**
	 * Sets a cookie so the user won't see a repeat alert after closing/following the link.
	 *
	 * @param {string} id
	 */
	function setUserCookie(id) {
		Cookies.set(`${cookie_prefix}${id}`, Date.now(), { expires: 7 });
	}

	function clickActions() {
		$('.close-reader-alert').click(function (e) {
			e.preventDefault();

			const item = $(this).parents('.reader-alert-item');
			const id = item.attr('data-post-id');

			item.animate(
				{
					height: 0,
				},
				'fast',
				function () {
					$(this).remove();
					setUserCookie(id);
				}
			);
		});

		$('.reader-alert-link').click(function (e) {
			setUserCookie(id);

			location.href = $(this).attr('href');
		});
	}

	$(document).ready(function () {
		removeDismissedAlerts();

		$('.reader-alerts').animate({ opacity: 1 });

		clickActions();
	});
})(jQuery);
