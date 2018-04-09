import BlockElement from 'src/ui/content_blocks/block/block_element'

class BooksElement extends BlockElement {
	get mediaSource() { return '/db/books/books.json' }
	get mediaType() { return 'Book' }
}

export default BooksElement