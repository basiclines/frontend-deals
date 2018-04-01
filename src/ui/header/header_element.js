import {LEOElement} from 'leo'

class HeaderElement extends LEOElement {
	render() {
		this.innerHTML = `
			<a class="logo" href="/">Frontend Deals Logo</a>
			<h1>Frontend Deals</h1>
			<p>A weekly curated list of front-end and javascript resources.</p>
		`
	}
}

export default HeaderElement