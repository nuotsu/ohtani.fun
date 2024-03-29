import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// documents
import site from './documents/site'
import sticker from './documents/sticker'

export default createSchema({
	name: 'default',
	types: schemaTypes.concat([
		// documents
		site,
		sticker,
	]),
})
