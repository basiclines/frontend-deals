import BlockElement from 'src/ui/block/block_element'

class LibrariesElement extends BlockElement {
	get mediaSource() { return '/db/libraries/libraries.json' }
	get mediaType() { return 'Library' }

	generateItem(item) {
		return `
			<li>
				<a href="${item.url}" target="_blank">
					<p class="stars-counter">
						${item.stars}
					</p>
					<h1>${item.title}</h1>
					<p>${item.meta}</p>
				</a>	
			</li>
		`
	}

}

export default LibrariesElement