<?php

/**
 * Plugin Name:     Reader Alerts
 * Description:     Text alerts and notices for your visitors, with optional linking.
 * Version:         1.0.8
 * Author:          Roundhouse Designs
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     rhdwp-reader-alerts
 *
 * @package         rhdwp
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit();
}

/**
 * Post type and meta registrations.
 */
require_once plugin_dir_path( __FILE__ ) . 'includes/cpt.php';

/**
 * Display
 */
require_once plugin_dir_path( __FILE__ ) . 'includes/render.php';

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
function rhdwp_reader_alerts_block_init() {
	if ( is_admin() ) {
		global $pagenow;
		$typenow = '';
		$cpt     = 'reader-alert';

		if ( 'post-new.php' === $pagenow ) {
			if ( isset( $_REQUEST['post_type'] ) && post_type_exists( $_REQUEST['post_type'] ) ) {
				$typenow = $_REQUEST['post_type'];
			}
		} elseif ( 'post.php' === $pagenow ) {
			if ( isset( $_GET['post'] ) && isset( $_POST['post_ID'] ) && (int) $_GET['post'] !== (int) $_POST['post_ID'] ) {
				// Do nothing
			} elseif ( isset( $_GET['post'] ) ) {
				$post_id = (int) $_GET['post'];
			} elseif ( isset( $_POST['post_ID'] ) ) {
				$post_id = (int) $_POST['post_ID'];
			}
			if ( $post_id ) {
				$post    = get_post( $post_id );
				$typenow = $post->post_type;
			}
		}

		if ( $typenow != $cpt ) {
			return;
		}
	}
	$dir = dirname( __FILE__ );

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "rhdwp/reader-alerts" block first.'
		);
	}
	$index_js     = 'build/index.js';
	$script_asset = require $script_asset_path;
	wp_register_script(
		'rhdwp-reader-alerts-block-editor',
		plugins_url( $index_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);
	wp_set_script_translations( 'rhdwp-reader-alerts-block-editor', 'rhdwp-reader-alerts' );

	$editor_css = 'build/index.css';
	wp_register_style(
		'rhdwp-reader-alerts-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'build/style-index.css';
	wp_register_style(
		'rhdwp-reader-alerts-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type( 'rhdwp/reader-alerts', array(
		'editor_script' => 'rhdwp-reader-alerts-block-editor',
		'editor_style'  => 'rhdwp-reader-alerts-block-editor',
		'style'         => 'rhdwp-reader-alerts-block',
	) );
}
add_action( 'init', 'rhdwp_reader_alerts_block_init' );

/**
 * Frontend assets
 */
function rhdwp_reader_alerts_block_frontend_enqueue() {
	if ( ! is_admin() ) {
		$cookie_js = 'static/js.cookie.js';
		wp_register_script(
			'js-cookie',
			plugins_url( $cookie_js, __FILE__ ),
			array(),
			filemtime( "$dir/$cookie_js" )
		);

		$frontend_js = 'static/frontend.js';
		wp_enqueue_script(
			'rhdwp-reader-alerts-frontend',
			plugins_url( $frontend_js, __FILE__ ),
			array( 'js-cookie', 'jquery' ),
			filemtime( "$dir/$frontend_js" )
		);
	}
}
add_action( 'wp_enqueue_scripts', 'rhdwp_reader_alerts_block_frontend_enqueue' );