export default {
	name: 'player',
	title: 'Player',
	type: 'document',
	__experimental_actions: ['update', 'publish'],
	fields: [
		{
			name: 'name',
			type: 'object',
			fields: [
				{ name: 'en', title: 'πΊπΈ English', type: 'string', },
				{ name: 'jp', title: 'π―π΅ Japanese', type: 'string', },
			],
		},
		{
			name: 'description',
			type: 'object',
			fields: [
				{
					name: 'content',
					type: 'text',
					rows: 4,
				},
				{
					name: 'source',
					type: 'object',
					fields: [
						{ name: 'name', type: 'string', },
						{ name: 'url', title: 'URL', type: 'url', },
					],
				},
			],
		},
	],
	preview: {
		select: {
			title: 'name.en',
		},
	},
}
