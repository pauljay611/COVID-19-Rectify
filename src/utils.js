export function traverseNode(node, keywordsMap) {
	if (node.nodeType === 3) {
		replaceWords(node, keywordsMap)
		return
	}
	let child = node.firstChild
	if (node.nodeType === 1 || node.nodeType === 9 || node.nodeType === 11)
		while (child) {
			traverseNode(child, keywordsMap)
			child = child.nextSibling
		}
	return node
}
function replaceWords(textNode, keywordsMap) {
	if (!keywordsMap) return
	const text = textNode.nodeValue
	const regText = Object.keys(keywordsMap).join('|')
	const re = new RegExp(regText, 'gim')
	textNode.nodeValue = text.replace(re, keyword => {
		return keywordsMap[keyword.toLowerCase()]
	})
}

export function createLangs() {
	const ch = ['新冠', '新型冠狀', '新型']
	const en = ['covid-19']

	const chMap = ch.reduce((acc, val) => {
		return {
			...acc,
			[val]: '中國武漢'
		}
	}, {})
	const enMap = en.reduce((acc, val) => {
		return {
			...acc,
			[val]: 'China Wuhan Virus'
		}
	}, {})
	return {
		...enMap,
		...chMap
	}
}
