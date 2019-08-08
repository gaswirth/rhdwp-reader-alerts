/**
 * BLOCK: rhdwp-reader-alerts
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss'
import './editor.scss'

const { __ } = wp.i18n // Import __() from wp.i18n
const { registerBlockType } = wp.blocks // Import registerBlockType() from wp.blocks
const { TextControl, CheckboxControl } = wp.components

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType('rhdwp/reader-alerts-link-meta-block', {
  title: __('Reader Alert Link'),
  icon: 'admin-links',
  category: 'rhdwp',

  attributes: {
    url: {
      type: 'string',
      source: 'meta',
      meta: 'rhdwp_alert_link_url'
    },
    openNewTab: {
      type: 'boolean',
      source: 'meta',
      meta: 'rhdwp_alert_link_url_new_tab'
    }
  },

  /**
   * The edit function describes the structure of your block in the context of the editor.
   * This represents what the editor will render when the block is used.
   *
   * The "edit" property must be a valid function.
   *
   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
   */
  edit: props => {
    const {
      attributes: { url, openNewTab },
      className,
      setAttributes
    } = props

    return (
      <div className={className}>
        <TextControl
          label={__('Notification Link', 'rhdwp')}
          value={url}
          onChange={url => setAttributes({ url })}
        />
        <CheckboxControl
          label={__(
            'Open this link in a new tab (not recommended for internal links).',
            'rhdwp'
          )}
          checked={openNewTab}
          onChange={openNewTab => setAttributes({ openNewTab })}
        />
      </div>
    )
  },

  /**
   * No information saved to the block
   * Data is saved to post meta via attributes
   */
  save () {
    return null
  }
})
