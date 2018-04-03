import BlockElement from 'src/ui/block/block_element'

class ArticlesElement extends BlockElement {
	get mediaSource() { return '/db/articles/articles.json' }
	get mediaType() { return 'Article' }

	generateItem(item) {
		return `
			<li>
				<a href="${item.url}" target="_blank">
					<figure style="background-image: url(${item.preview})"></figure>
					<h1>${item.title}</h1>
				</a>	
			</li>
		`
	}

}

export default ArticlesElement