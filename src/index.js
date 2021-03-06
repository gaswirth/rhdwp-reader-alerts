/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType('rhdwp/reader-alerts', {
	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __('Reader Alerts', 'rhdwp-reader-alerts'),

	/**
	 * This is a short description for your block, can be translated with `i18n` functions.
	 * It will be shown in the Block Tab in the Settings Sidebar.
	 */
	description: __(
		'Text alerts and notices for your visitors, with optional linking.',
		'rhdwp-reader-alerts'
	),

	/**
	 * Blocks are grouped into categories to help users browse and discover them.
	 * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
	 */
	category: 'common',

	/**
	 * An icon property should be specified to make it easier to identify a block.
	 * These can be any of WordPress’ Dashicons, or a custom svg element.
	 */
	icon: 'warning',

	/**
	 * Block attributes
	 */
	attributes: {
		url: {
			type: 'string',
			source: 'meta',
			meta: 'rhdwp_alert__url',
		},
		text: {
			type: 'string',
			source: 'meta',
			meta: 'rhdwp_alert__text'
		},
		minHeight: {
			type: 'number',
			source: 'meta',
			meta: 'rhdwp_alert__min_height',
			default: 100
		},
		openNewTab: {
			type: 'boolean',
			source: 'meta',
			meta: 'rhdwp_alert__url_new_tab',
		},
		hasExpiration: {
			type: 'boolean',
			source: 'meta',
			meta: 'rhdwp_alert__has_expire',
		},
		expireDateTime: {
			type: 'string',
			source: 'meta',
			meta: 'rhdwp_alert__expire',
		},
	},

	/**
	 * Optional block extended support features.
	 */
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},

	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
});
