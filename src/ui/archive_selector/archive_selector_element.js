import {LEOElement} from 'leo'
import Router from 'src/router'

class ArchiveSelector extends LEOElement {

	fetchHistory() {
		fetch('/db/archive.json')
		.then(response => response.json())
		.then(data => {
			data.shift();
			this.data.history = data
		})
	}

	onClick(e) {
		if (e.target.getAttribute('data-trigger') == 'toggle') this.toggle()
		if (e.target.getAttribute('data-trigger') == 'followLink') this.followLink(e)
	}

	setSelection(selection) {
		this.data.selection = selection
	}

	followLink(e) {
		let url = e.target.getAttribute('href')
		this.setSelection(e.target.text)
		this.toggle()
		Router.navigate(url)
		e.preventDefault()
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
			<li><a data-trigger="followLink" href="/archive/${item}">${item}</a></li>
		`
	}

	generateThisWeekItem() {
		return `
			<li><a data-trigger="followLink" href="/">This week</a></li>
		`
	}

	render() {
		this.innerHTML = `
			<section data-trigger="toggle">
				<p>${this.data.selection}</p>
				<i data-icon="show">show dropdown</i>
			</section>
			<ul>
				${this.generateThisWeekItem()}
				${ (this.data.has('history')) ? this.generateItems() : '' }
			</ul>
		`
	}

	mount() {
		this.setSelection('This week')
		this.fetchHistory()
	}
}

export default ArchiveSelector