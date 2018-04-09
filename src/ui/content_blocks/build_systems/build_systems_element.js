import BlockElement from 'src/ui/content_blocks/block/block_element'

class BuildSystemsElement extends BlockElement {
	get mediaSource() { return '/db/build_systems/build_systems.json' }
	get mediaPictureExtension() { return 'png' }
	get mediaType() { return 'Build system' }

	generateItem(item) {
		let image = this.data.media.images+item.id+'.'+this.mediaPictureExtension
		return `
			<li>
				<a href="${item.url}" target="_blank">
					<figure style="background-color: ${item.color}">
						<img src="${image}" alt="${item.title}">
					</figure>
					<h1>${item.title}</h1>
				</a>	
			</li>
		`
	}
}

export default BuildSystemsElement