let keywordsMap
chrome.storage.sync.get(['keywordsMap'], function(result) {
	keywordsMap = result.keywordsMap
})

// enhance efficiency by only changing dom while the end of node mutation
new MutationObserver(function() {
	traverseNode(document.body)
}).observe(document.body, {
	childList: true
})

function traverseNode(node) {
	if (node.nodeType === 3) {
		replaceWords(node)
		return
	}
	let child = node.firstChild
	if (node.nodeType === 1 || node.nodeType === 9 || node.nodeType === 11)
		while (child) {
			traverseNode(child)
			child = child.nextSibling
		}
}
function replaceWords(textNode) {
	if (!keywordsMap) return
	const text = textNode.nodeValue
	const regText = Object.keys(keywordsMap).join('|')
	const re = new RegExp(regText, 'gim')
	textNode.nodeValue = text.replace(re, keyword => {
		return keywordsMap[keyword.toLowerCase()]
	})
}
