<?php
/**
 * Action Hooks
 *
 * @since   0.1.0
 * @package rhdwp-reader-alerts
 */

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
				<li class="reader-alert-item">
					<div class="alert-content">
					' . $link_open . $alert_text . $link_close . '
					</div>
					<a class="close-reader-alert" href="#">X</a>
				</li>
			';

			$html .= $item;
		}

		$html .= '</ul><!-- .reader-alerts -->';
	}

	echo $html;
}
add_action('wp_body_open', 'rhdwp_reader_alerts');
