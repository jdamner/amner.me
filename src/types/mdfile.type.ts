/**
 * @file MDFile type definition
 * 
 * @typedef {Object} MDFile
 * @property {Object} data
 * @property {string} content
 */
export type MDFile = {
	data?: { [  key: string ] : string },
	content?: string,
};
