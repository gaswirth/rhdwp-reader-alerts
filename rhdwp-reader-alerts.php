<?php
/**
 * Plugin Name: Reader Alerts
 * Description: Adds customizable reader alerts to your home page.
 * Author: Roundhouse Designs
 * Author URI: https://roundhouse-designs.com
 * Plugin URI: https://github.com/gaswirth/rhdwp-reader-alerts
 * Version: 1.0
 * License: GPL2+
 *
 * @package RHDWP_Reader_Alerts
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';

/**
 * Display
 */
require_once plugin_dir_path( __FILE__ ) . 'src/display.php';
