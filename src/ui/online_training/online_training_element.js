import BlockElement from 'src/ui/block/block_element'

class OnlineTrainingElement extends BlockElement {
	get mediaSource() { return '/db/online_training/online_training.json' }

	generateItem(item) {
		return `
			<li>
				<a href="${item.url}" target="_blank">
					<figure style="background-image: url(${item.preview})"></figure>
					<h1>${item.title}</h1>
					<p>${item.meta}</p>	
				</a>	
			</li>
		`
	}

}

export default OnlineTrainingElement