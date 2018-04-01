import BlockElement from 'src/ui/block/block_element'

class CodeEditorsElement extends BlockElement {
	get mediaSource() { return '/db/code_editors/code_editors.json' }
	get mediaPictureExtension() { return 'png' }
}

export default CodeEditorsElement