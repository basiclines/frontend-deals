import BlockElement from 'src/ui/content_blocks/block/block_element'

class LibrariesElement extends BlockElement {
	get mediaSource() { return '/db/libraries/libraries.json' }
	get mediaType() { return 'Library' }

	generateItems() {
		let featured = this.getFeaturedMedia();
		return featured.reduce((buffer, item) => {
			let clonedItem = Object.assign({}, item)
			let parts = clonedItem.url.replace('https://github.com/', '')
				parts = parts.split('/')

			clonedItem.author = parts[0]
			clonedItem.title = parts[1]

			return buffer += this.generateItem(clonedItem)
		}, '')
	}

	generateItem(item) {
		return `
			<li>
				<a href="${item.url}" target="_blank">
					<h1>
						${item.author}/<strong>${item.title}</strong>
					</h1>
					<p>${item.meta}</p>
					<p class="stars-counter"> ${item.stars} </p>
				</a>	
			</li>
		`
	}

}

export default LibrariesElement