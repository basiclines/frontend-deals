import HeaderElement from 'src/ui/header/header_element'
import BooksElement from 'src/ui/content_blocks/books/books_element'
import CodeEditorsElement from 'src/ui/content_blocks/code_editors/code_editors_element'
import FrameworksElement from 'src/ui/content_blocks/frameworks/frameworks_element'
import ToolsElement from 'src/ui/content_blocks/tools/tools_element'
import OnlineTrainingElement from 'src/ui/content_blocks/online_training/online_training_element'
import DevBrowsersElement from 'src/ui/content_blocks/dev_browsers/dev_browsers_element'
import BuildSystemsElement from "src/ui/content_blocks/build_systems/build_systems_element"
import ConferencesElement from "src/ui/content_blocks/conferences/conferences_element"
import ArticlesElement from "src/ui/content_blocks/articles/articles_element"
import LibrariesElement from "src/ui/content_blocks/libraries/libraries_element"
import TabsElement from "src/ui/tabs/tabs_element"
import ArchiveSelector from "src/ui/archive_selector/archive_selector_element"


customElements.define('fd-header', HeaderElement)
customElements.define('fd-books', BooksElement)
customElements.define('fd-code-editors', CodeEditorsElement)
customElements.define('fd-frameworks', FrameworksElement)
customElements.define('fd-tools', ToolsElement)
customElements.define('fd-online-training', OnlineTrainingElement)
customElements.define('fd-dev-browsers', DevBrowsersElement)
customElements.define('fd-build-systems', BuildSystemsElement)
customElements.define('fd-conferences', ConferencesElement)
customElements.define('fd-articles', ArticlesElement)
customElements.define('fd-libraries', LibrariesElement)
customElements.define('fd-tabs', TabsElement)
customElements.define('fd-archive-selector', ArchiveSelector)