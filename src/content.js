import { traverseNode } from './utils'

let keywordsMap
chrome.storage.sync.get(['keywordsMap'], function(result) {
	keywordsMap = result.keywordsMap
})

// enhance efficiency by only changing dom while the end of node mutation
new MutationObserver(function() {
	traverseNode(document.body, keywordsMap)
}).observe(document.body, {
	childList: true
})
