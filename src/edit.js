/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import {
	TextControl,
	RangeControl,
	CheckboxControl,
	DateTimePicker,
} from '@wordpress/components';
import { is12HourTime } from './utils/api';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @param {Object} [props]           Properties passed from the editor.
 * @param {string} [props.className] Class name generated for the block.
 *
 * @return {WPElement} Element to render.
 */
export default function Edit(props) {
	const {
		attributes: { url, text, minHeight, openNewTab, hasExpiration, expireDateTime },
		className,
		setAttributes,
	} = props;

	return (
		<div className={className}>
			<div className="reader-alert-options">
				<h4 className="reader-alert-options__heading">Alert Options</h4>
				<div className="reader-alert-options__url">
					<TextControl
						label={__('Link URL:', 'rhdwp')}
						value={url}
						onChange={(url) => setAttributes({ url })}
					/>
				</div>
				<div className="reader-alert-options__settings">
					<div className="reader-alert-options__settings__checkboxes">
						<CheckboxControl
							label={__(
								'Open this link in a new tab (not recommended for internal site links).',
								'rhdwp'
							)}
							checked={openNewTab}
							onChange={(openNewTab) => setAttributes({ openNewTab })}
						/>
						<CheckboxControl
							label={__(
								'Automatically expire this post at a specified date/time',
								'rhdwp'
							)}
							checked={hasExpiration}
							onChange={(hasExpiration) => setAttributes({ hasExpiration })}
							is12Hour={is12HourTime}
						/>
						{hasExpiration ? (
							<div className="reader-alert-options__expire">
								<p>Expiration:</p>
								<DateTimePicker
									currentDate={expireDateTime}
									onChange={(expireDateTime) =>
										setAttributes({ expireDateTime })
									}
									is12Hour={is12HourTime}
								/>
							</div>
						) : (
							''
						)}
					</div>
					<div class="reader-alert-options__settings__height">
						<RangeControl
							label={__('Alert minimum height:', 'rhdwp')}
							min={0}
							max={400}
							type="stepper"
							allowReset={true}
							resetFallbackValue={100}
							value={minHeight ? minHeight : 100}
							onChange={(minHeight) => setAttributes({ minHeight })}
						/>
					</div>
				</div>
			</div>
			<div className="reader-alert-options__text">
				<TextControl
					label={__('Alert text:', 'rhdwp')}
					value={text}
					rows={4}
					onChange={(text) => setAttributes({ text })}
				/>
			</div>
		</div>
	);
}
