<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   0.1.0
 * @package rhdwp-reader-alerts
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * Assets enqueued:
 * 1. blocks.style.build.css - Frontend + Backend.
 * 2. blocks.build.js - Backend.
 * 3. blocks.editor.build.css - Backend.
 *
 * @uses {wp-blocks} for block type registration & related functions.
 * @uses {wp-element} for WP Element abstraction — structure of blocks.
 * @uses {wp-components} for UI components.
 * @uses {wp-i18n} to internationalize the block's text.
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function rhdwp_reader_alerts_block_assets() { // phpcs:ignore
	// Register block styles for both frontend + backend.
	wp_register_style(
		'rhdwp_reader_alerts-style-css', // Handle.
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block style CSS.
		array( 'wp-editor' ), // Dependency to include the CSS after it.
		null // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.style.build.css' ) // Version: File modification time.
	);

	// Register block editor script for backend.
	wp_register_script(
		'rhdwp_reader_alerts-block-js', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-components' ), // Dependencies, defined above.
		null, // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: filemtime — Gets file modification time.
		true // Enqueue the script in the footer.
	);

	// Register block editor styles for backend.
	wp_register_style(
		'rhdwp_reader_alerts-block-editor-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
		null // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ) // Version: File modification time.
	);

	/**
	 * Register Gutenberg block on server-side.
	 *
	 * Register the block on server-side to ensure that the block
	 * scripts and styles for both frontend and backend are
	 * enqueued when the editor loads.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/blocks/writing-your-first-block-type#enqueuing-block-scripts
	 * @since 1.16.0
	 */
	register_block_type(
		'rhdwp/reader-alert-link-meta-block', array(
			// Enqueue blocks.style.build.css on both frontend & backend.
			'style'         => 'rhdwp_reader_alerts-style-css',
			// Enqueue blocks.build.js in the editor only.
			'editor_script' => 'rhdwp_reader_alerts-block-js',
			// Enqueue blocks.editor.build.css in the editor only.
			'editor_style'  => 'rhdwp_reader_alerts-block-editor-css',
		)
	);

	// Frontend JS
	wp_register_script(
		'js-cookie',
		plugins_url( '/node_modules/js-cookie/src/js.cookie.js', dirname( __FILE__ ) ),
		array(),
		null,
		true
	);

	wp_enqueue_script(
		'rhdwp_reader_alerts-frontend-js',
		plugins_url( '/dist/frontend.js', dirname( __FILE__ ) ), 
		array( 'jquery', 'js-cookie' ),
		null,
		true
	);
}

// Hook: Block assets.
add_action( 'init', 'rhdwp_reader_alerts_block_assets' );

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
			array( 'core/paragraph', array(
				'placeholder'      => 'Enter your alert message here.'
			)),
			array( 'rhdwp/reader-alerts-link-meta-block', array() )
		),
		'template_lock'         => 'all'
	) );

	// Post meta
	register_post_meta( 'reader-alert', 'rhdwp_alert_link_url', array(
		'show_in_rest'	=> true,
		'single'		=> true,
		'type'			=> 'string'
	) );

	register_post_meta( 'reader-alert', 'rhdwp_alert_link_url_new_tab', array(
		'show_in_rest'	=> true,
		'single'		=> true,
		'type'			=> 'boolean'
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
 * * Changes the post title placeholder text for reader-alert posts.
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