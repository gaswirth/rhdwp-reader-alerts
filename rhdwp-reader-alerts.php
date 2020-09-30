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
 * Block init
 */
require_once plugin_dir_path( __FILE__ ) . '/block.php';

/**
 * Post type and meta registrations.
 */
require_once plugin_dir_path( __FILE__ ) . '/includes/cpt.php';

/**
 * Display
 */
require_once plugin_dir_path( __FILE__ ) . '/includes/render.php';
