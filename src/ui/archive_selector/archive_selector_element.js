import {LEOElement} from 'leo'

class ArchiveSelector extends LEOElement {

	fetchHistory() {
		fetch('/db/archive.json')
		.then(response => response.json())
		.then(data => { this.data.history = data; })
	}

	onClick(e) {
		if (e.target.getAttribute('data-trigger') == 'toggle') this.toggle()
	}

	toggle() {
		this.attrs.open = (this.attrs.has('open')) ? null : true
	}

	generateItems() {
		return this.data.history.reduce((buffer, item) => {
			return buffer += this.generateItem(item)
		},'')
	}

	generateItem(item) {
		return `
			<li><a href="/archive/${item}">${item}</a></li>
		`
	}

	render() {
		this.innerHTML = `
			<section data-trigger="toggle">
				<p>Archive</p>
				<i data-icon="show">show dropdown</i>
			</section>
			<ul data-render="history">
				${ (!this.data.isEmpty) ? this.generateItems() : '' }
			</ul>
		`
	}

	mount() {
		this.historyNode = this.find('[data-render=history]')
		this.fetchHistory()
	}
}

export default ArchiveSelector