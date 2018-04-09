import {LEOElement} from 'leo'

class ArchiveSelector extends LEOElement {

	fetchHistory() {
		fetch('/db/archive.json')
		.then(response => response.json())
		.then(data => { this.data.history = data; })
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
			<p>Archive</p>
			<ul data-render="history">${ (!this.data.isEmpty) ? this.generateItems() : '' }</ul>
		`
	}

	mount() {
		this.historyNode = this.find('[data-render=history]')
		this.fetchHistory()
	}
}

export default ArchiveSelector