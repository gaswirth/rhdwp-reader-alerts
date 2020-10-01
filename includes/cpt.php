<?php
/**
 * Registers the `reader_alert` post type.
 */
function rhdwp_reader_alert_init() {
	register_post_type( 'reader-alert', array(
		'labels'                => array(
			'name'                  => __( 'Reader Alerts', 'rhdwp' ),
			'singular_name'         => __( 'Reader Alerts', 'rhdwp' ),
			'all_items'             => __( 'All Reader Alerts', 'rhdwp' ),
			'archives'              => __( 'Reader Alerts Archives', 'rhdwp' ),
			'attributes'            => __( 'Reader Alerts Attributes', 'rhdwp' ),
			'insert_into_item'      => __( 'Insert into Reader Alerts', 'rhdwp' ),
			'uploaded_to_this_item' => __( 'Uploaded to this Reader Alerts', 'rhdwp' ),
			'featured_image'        => _x( 'Featured Image', 'reader-alert', 'rhdwp' ),
			'set_featured_image'    => _x( 'Set featured image', 'reader-alert', 'rhdwp' ),
			'remove_featured_image' => _x( 'Remove featured image', 'reader-alert', 'rhdwp' ),
			'use_featured_image'    => _x( 'Use as featured image', 'reader-alert', 'rhdwp' ),
			'filter_items_list'     => __( 'Filter Reader Alerts list', 'rhdwp' ),
			'items_list_navigation' => __( 'Reader Alerts list navigation', 'rhdwp' ),
			'items_list'            => __( 'Reader Alerts list', 'rhdwp' ),
			'new_item'              => __( 'New Reader Alerts', 'rhdwp' ),
			'add_new'               => __( 'Add New', 'rhdwp' ),
			'add_new_item'          => __( 'Add New Reader Alerts', 'rhdwp' ),
			'edit_item'             => __( 'Edit Reader Alerts', 'rhdwp' ),
			'view_item'             => __( 'View Reader Alerts', 'rhdwp' ),
			'view_items'            => __( 'View Reader Alerts', 'rhdwp' ),
			'search_items'          => __( 'Search Reader Alerts', 'rhdwp' ),
			'not_found'             => __( 'No Reader Alerts found', 'rhdwp' ),
			'not_found_in_trash'    => __( 'No Reader Alerts found in trash', 'rhdwp' ),
			'parent_item_colon'     => __( 'Parent Reader Alerts:', 'rhdwp' ),
			'menu_name'             => __( 'Reader Alerts', 'rhdwp' ),
		),
		'public'                => false,
		'hierarchical'          => false,
		'show_ui'               => true,
		'show_in_nav_menus'     => true,
		'supports'              => array( 'title', 'editor', 'custom-fields' ),
		'has_archive'           => true,
		'rewrite'               => true,
		'query_var'             => true,
		'menu_icon'             => 'dashicons-warning',
		'show_in_rest'          => true,
		'rest_base'             => 'reader-alert',
		'rest_controller_class' => 'WP_REST_Posts_Controller',
		'template'              => array(
			array( 'core/paragraph',
				array(
					'placeholder' => 'Enter your alert message here, then customize background and text colors on the right.',
				),
			),
			array( 'rhdwp/reader-alerts', array() ),
		),
		'template_lock'         => 'all',
	) );

	// Post meta
	register_post_meta( 'reader-alert', 'rhdwp_alert__url', array(
		'show_in_rest' => true,
		'single'       => true,
		'type'         => 'string',
	) );

	register_post_meta( 'reader-alert', 'rhdwp_alert__url_new_tab', array(
		'show_in_rest' => true,
		'single'       => true,
		'type'         => 'boolean',
	) );

	register_post_meta( 'reader-alert', 'rhdwp_alert__has_expire', array(
		'show_in_rest' => true,
		'single'       => true,
		'type'         => 'boolean',
	) );

	register_post_meta( 'reader-alert', 'rhdwp_alert__expire', array(
		'show_in_rest' => true,
		'single'       => true,
		'type'         => 'string',
	) );
}
add_action( 'init', 'rhdwp_reader_alert_init' );

/**
 * Sets the post updated messages for the `reader_alert` post type.
 *
 * @param  array $messages Post updated messages.
 * @return array Messages for the `reader_alert` post type.
 */
function rhdwp_reader_alert_updated_messages( $messages ) {
	global $post;

	$permalink = get_permalink( $post );

	$messages['reader-alert'] = array(
		0  => '', // Unused. Messages start at index 1.
		/* translators: %s: post permalink */
		1  => sprintf( __( 'Reader Alerts updated. <a target="_blank" href="%s">View Reader Alerts</a>', 'rhdwp' ), esc_url( $permalink ) ),
		2  => __( 'Custom field updated.', 'rhdwp' ),
		3  => __( 'Custom field deleted.', 'rhdwp' ),
		4  => __( 'Reader Alerts updated.', 'rhdwp' ),
		/* translators: %s: date and time of the revision */
		5  => isset( $_GET['revision'] ) ? sprintf( __( 'Reader Alerts restored to revision from %s', 'rhdwp' ), wp_post_revision_title(
			(int) $_GET['revision'], false ) ) : false,
		/* translators: %s: post permalink */
		6  => sprintf( __( 'Reader Alerts published. <a href="%s">View Reader Alerts</a>', 'rhdwp' ), esc_url( $permalink ) ),
		7  => __( 'Reader Alerts saved.', 'rhdwp' ),
		/* translators: %s: post permalink */
		8  => sprintf( __( 'Reader Alerts submitted. <a target="_blank" href="%s">Preview Reader Alerts</a>', 'rhdwp' ), esc_url( add_query_arg( 'preview', 'true', $permalink ) ) ),
		/* translators: 1: Publish box date format, see https://secure.php.net/date 2: Post permalink */
		9  => sprintf( __( 'Reader Alerts scheduled for: <strong>%1$s</strong>. <a target="_blank" href="%2$s">Preview Reader Alerts</a>', 'rhdwp' ),
			date_i18n( __( 'M j, Y @ G:i' ), strtotime( $post->post_date ) ), esc_url( $permalink ) ),
		/* translators: %s: post permalink */
		10 => sprintf( __( 'Reader Alerts draft updated. <a target="_blank" href="%s">Preview Reader Alerts</a>', 'rhdwp' ), esc_url( add_query_arg( 'preview', 'true', $permalink ) ) ),
	);

	return $messages;
}
add_filter( 'post_updated_messages', 'rhdwp_reader_alert_updated_messages' );

/**
 * Changes the post title placeholder text for reader-alert posts.
 *
 * @param [string] $title
 * @return string The new title
 */
function rhdwp_change_title_placeholder( $title ) {
	if ( 'reader-alert' == get_current_screen()->post_type ) {
		$title = __( 'Alert Title (Not displayed)', 'rhdwp' );
	}

	return $title;
}
add_filter( 'enter_title_here', 'rhdwp_change_title_placeholder' );

/**
 * Action hook for the expiration daily cron
 *
 * @return void
 */
add_action( 'wp', 'rhdwp_expire_reader_alert_daily' );
add_action( 'rhdwp_expire_reader_alert', 'rhdwp_expire_reader_alert_callback' );
function rhdwp_expire_reader_alert_daily() {
	if ( ! wp_next_scheduled( 'rhdwp_expire_reader_alert' ) ) {
		wp_schedule_event( current_time( 'timestamp' ), 'twicedaily', 'rhdwp_expire_reader_alert' );
	}
}

/**
 * Callback function for the expiration cron job. Changes post status to 'draft' and adds a notice to the post title (title used in backend only)
 *
 * @return void
 */
function rhdwp_expire_reader_alert_callback() {
	$q = new WP_Query( array(
		'post_type'      => 'reader-alert',
		'posts_per_page' => -1,
		'post_status'    => 'publish',
	) );

	if ( $q->have_posts() ) {
		while ( $q->have_posts() ): $q->the_post();

			$has_expiration = get_post_meta( get_the_id(), 'rhdwp_alert__has_expire', true );

			if ( $has_expiration == true ) {
				$expiration      = get_post_meta( get_the_id(), 'rhdwp_alert__expire', true );
				$expiration_date = strtotime( $expiration );

				if ( $expiration_date < current_time( 'timestamp' ) ) {
					wp_delete_post( get_the_id() );
				}
			}
		endwhile;

		wp_reset_postdata();
	}
}
