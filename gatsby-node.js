const path = require('path');

exports.onCreateNode = function onCreateNode({ node, boundActionCreators }) {
	// We only care about JSON content.
	if (node.internal.owner === 'gatsby-transformer-json') {
		recurseOnObjectProcessingImages(node, node, boundActionCreators);
	}
};

const recurseOnObjectProcessingImages = async (node, content, boundActionCreators) => {
	if (!content) return;
	const { createNodeField } = boundActionCreators;

	if (Array.isArray(content)) {
		for (const object of content) {
			recurseOnObjectProcessingImages(node, object, boundActionCreators);
		}
	} else {
		for (const key of Object.keys(content)) {
			const value = content[key];
			if (typeof value !== 'string') {
				recurseOnObjectProcessingImages(node, value, boundActionCreators);
			} else {
				// Find all values on the object which end in an extension we recognise, then create a
				// file node for them so that all the standard image processing stuff will kick up
				const extensions = new Set([`.jpeg`, `.jpg`, `.png`, `.webp`, `.tif`, `.tiff`]);

				const extension = path.extname(value).toLowerCase();
				if (extensions.has(extension)) {
					// Ok, we're going to create a field for the image with a relative path
					// so that the incompatibility between gatsby-transformer-sharp and
					// NetlifyCMS is avoided.
					const contentPath = path.join(__dirname, 'content', '<My directory here where the content lives>');
					const imagePath = path.join(__dirname, 'static', value); // (This is my asset path)
					const relative = path.relative(contentPath, imagePath);

					const existingValue = node.fields && node.fields[`${key}_image`];

					if (existingValue && typeof existingValue === 'string') {
						createNodeField({
							node,
							name: `${key}_image`,
							value: [existingValue, relative],
						});
					} else if (existingValue && Array.isArray(existingValue)) {
						createNodeField({
							node,
							name: `${key}_image`,
							value: [...existingValue, relative],
						});
					} else {
						createNodeField({ node, name: `${key}_image`, value: relative });
					}
				}
			}
		}
	}
};