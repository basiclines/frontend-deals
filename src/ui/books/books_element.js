import {LEOElement} from 'leo'

class BooksElement extends LEOElement {

	fetchData() {
		fetch('/db/books/books.json')
		.then(response => response.json())
		.then(books => { this.data.books = books })
	}

	getFeaturedBooks() {
		return this.data.books.featured[0].items.reduce((buffer, featured) => {
			buffer.push(this.data.books.items[featured])
			return buffer
		}, [])
	}

	generateItems() {
		let featured = this.getFeaturedBooks();
		return featured.reduce((buffer, item) => {
			return buffer += this.generateBook(item)
		}, '')
	}

	generateBook(item) {
		let image = this.data.books.images+item.id+'.jpg'
		return `
			<li>
				<a href="${item.url}" target="_blank">
					<figure style="background-color: ${item.color}">
						<img src="${image}" alt="${item.title}">
					</figure>
					<p>${item.title}</p>
					<p><em>${item.author}</em></p>	
				</a>	
			</li>
		`
	}

	render() {
		if (!this.data.isEmpty ) {
			this.innerHTML = `
				<h1>Books</h1>
				<ul>${this.generateItems()}</ul>
			`
		}
	}

	mount() {
		this.fetchData()
	}
}

export default BooksElement
