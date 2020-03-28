function createLangs() {
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

chrome.storage.sync.set({ keywordsMap: createLangs() }, function() {})
