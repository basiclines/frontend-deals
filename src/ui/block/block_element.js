import {LEOElement} from 'leo'

class BlockElement extends LEOElement {

	get mediaSource() { return '' }
	get mediaType() { return '' }
	get mediaPictureExtension() { return 'jpg' }

	fetchData() {
		fetch(this.mediaSource)
		.then(response => response.json())
		.then(media => { this.data.media = media })
	}

	getFeaturedMedia() {
		return this.data.media.featured[0].items.reduce((buffer, featured) => {
			buffer.push(this.data.media.items[featured])
			return buffer
		}, [])
	}

	generateItems() {
		let featured = this.getFeaturedMedia();
		return featured.reduce((buffer, item) => {
			return buffer += this.generateItem(item)
		}, '')
	}

	generateItem(item) {
		let image = this.data.media.images+item.id+'.'+this.mediaPictureExtension
		return `
			<li>
				<a href="${item.url}" target="_blank">
					<figure style="background-color: ${item.color}">
						<img src="${image}" alt="${item.title}">
					</figure>
					<h1>${item.title}</h1>
					<p>${item.meta}</p>	
				</a>	
			</li>
		`
	}

	generateProposalItem() {
		let url = `https://github.com/basiclines/frontenddeals/blob/master/src${this.mediaSource}`
		return `
			<li class="proposal-item">
				<a href="${url}" target="_blank">
					<h1>Create a Pull Request to add a ${this.mediaType}</h1>
					<em class="fd-button">View in GitHub</em>
				</a>
			</li>
		`
	}

	render() {
		if (!this.data.isEmpty) {
			this.innerHTML = `
				<h1>${this.attrs.title}</h1>
				<ul>${this.generateItems()} ${this.generateProposalItem()}</ul>
			`
		}
	}

	mount() {
		this.fetchData()
	}
}

export default BlockElement
