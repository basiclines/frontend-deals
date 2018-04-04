import {LEOElement} from 'leo'

const SCROLL_OFFSET = 240
class HeaderElement extends LEOElement {

	bind(e) {
		super.bind()
		window.addEventListener('scroll', () => {
			requestAnimationFrame(() => { this.modulateScroll(window) })
		})
	}

	modulateScroll(target) {
		let scroll = target.scrollY
		let opacity = (scroll < SCROLL_OFFSET) ? 1 - (scroll * 1) / SCROLL_OFFSET : 0

		this.inner.style.opacity = opacity;

		(scroll + 1 > SCROLL_OFFSET) ? this.classList.add('stacked-tabs') : this.classList.remove('stacked-tabs')
	}

	render() {
		this.innerHTML = `
			<div data-select="inner">
				<a class="logo" href="/">Frontend Deals Logo</a>
				<h1>Frontend Deals</h1>
				<p>A weekly curated list of front-end and javascript resources.</p>
			</div>
			<fd-tabs scroll-offset="${SCROLL_OFFSET}"></fd-tabs>
		`
	}

	mount() {
		this.inner = this.find('[data-select=inner]')
	}
}

export default HeaderElement