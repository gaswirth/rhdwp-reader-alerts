<?php
/**
 * Action Hooks
 *
 * @since   0.1.0
 * @package rhdwp-reader-alerts
 */

function rhdwp_reader_alerts_close_icon() {
	return '<svg class="icon" height="311pt" viewBox="0 0 311 311.09867" width="311pt" xmlns="http://www.w3.org/2000/svg"><path d="m16.042969 311.097656c-4.09375 0-8.191407-1.554687-11.304688-4.691406-6.25-6.25-6.25-16.386719 0-22.636719l279.058594-279.058593c6.253906-6.253907 16.386719-6.253907 22.636719 0 6.25 6.25 6.25 16.382812 0 22.632812l-279.0625 279.0625c-3.136719 3.136719-7.230469 4.691406-11.328125 4.691406zm0 0"/><path d="m295.125 311.097656c-4.09375 0-8.191406-1.554687-11.304688-4.691406l-279.082031-279.082031c-6.25-6.253907-6.25-16.386719 0-22.636719s16.382813-6.25 22.632813 0l279.0625 279.082031c6.25 6.25 6.25 16.386719 0 22.636719-3.136719 3.136719-7.230469 4.691406-11.308594 4.691406zm0 0"/></svg>
	<!-- Icon by Pixel Perfect (@link https://www.flaticon.com/authors/pixel-perfect) from www.flaticon.com -->';
}

/**
 * Displays all published Reader Alerts. Called by the rhdwp_reader_alerts action hook.
 *
 * @return void
 */
function rhdwp_reader_alerts() {
	$args = array(
		'post_type'			=> 'reader-alert',
		'posts_per_page'	=> -1,
		'order'				=> 'DESC',
	);
	$alerts = get_posts( $args );
	$html = '';

	if ( $alerts ) {
		$html .= '<ul class="reader-alerts">';

		foreach( $alerts as $alert ) {
			$open_new_tab = get_post_meta( $alert->ID, 'rhdwp_alert_link_url_new_tab', true );
			
			$alert_text = apply_filters( 'the_content', $alert->post_content );
			$alert_link = esc_url( get_post_meta( $alert->ID, 'rhdwp_alert_link_url', true ) );
			$alert_target = ( $open_new_tab == true ) ? '_blank' : '_self';

			$link_open = $alert_link ? '<a class="reader-alert-link" href="' . $alert_link . '" target="' . $alert_target . '">' : '';
			$link_close = $alert_link ? '</a>' : '';

			$item = '
				<li class="reader-alert-item" data-post-id="' . $alert->ID . '">
					<div class="alert-content">
					' . $link_open . $alert_text . $link_close . '
					</div>
					<a class="close-reader-alert" href="#">' . rhdwp_reader_alerts_close_icon() . '</a>
				</li>
			';

			$html .= $item;
		}

		$html .= '</ul><!-- .reader-alerts -->';
	}

	echo $html;
}
add_action('wp_body_open', 'rhdwp_reader_alerts');