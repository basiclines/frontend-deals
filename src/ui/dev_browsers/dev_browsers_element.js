import BlockElement from 'src/ui/block/block_element'

class DevBrowsersElement extends BlockElement {
	get mediaSource() { return '/db/dev_browsers/dev_browsers.json' }
	get mediaPictureExtension() { return 'png' }

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

export default DevBrowsersElement