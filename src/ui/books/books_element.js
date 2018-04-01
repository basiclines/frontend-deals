import BlockElement from 'src/ui/block/block_element'

class BooksElement extends BlockElement {
	get mediaSource() { return '/db/books/books.json' }
}

export default BooksElement