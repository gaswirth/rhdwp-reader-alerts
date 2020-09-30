import { __experimentalGetSettings } from '@wordpress/date';
const dateTimeSettings = __experimentalGetSettings();

/**
 * To know if the current timezone is a 12 hour time with look for an "a" in the time format.
 * We also make sure this a is not escaped by a "/".
 */
export const is12HourTime = /a(?!\\)/i.test(
	dateTimeSettings.formats.time
		.toLowerCase() // Test only the lower case a
		.replace(/\\\\/g, '') // Replace "//" with empty strings
		.split('')
		.reverse()
		.join('') // Reverse the string and test for "a" not followed by a slash
);
