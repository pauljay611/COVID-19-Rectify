const ch = ['新冠', '新型冠狀', '新型']
const en = ['covid-19']

const keywordsMap = {
	[ch]: '中國武漢',
	[en]: 'China Wuhan Virus'
}

function mappingKeywords() {
	const keywordsMap = ch.reduce(key => {
		key
	}, {})
	return keywordsMap
}

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
	const text = textNode.nodeValue
	const regText = Object.keys(keywordsMap).join('|')
	const re = new RegExp(regText, 'gim')
	textNode.nodeValue = text.replace(re, keyword => {
		console.log(keyword)
		return keywordsMap[keyword.toLowerCase()]
	})
}

// enhance efficiency by only changing dom while the end of node mutation
new MutationObserver(function() {
	traverseNode(document.body)
}).observe(document.body, {
	childList: true
})
