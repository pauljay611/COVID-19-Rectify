import { traverseNode, createLangs } from '../utils'

describe('test content script', () => {
	test('test replace words', () => {
		expect(traverseNode(document.body, createLangs()).textContent).toBe(
			'中國武漢肺炎中國武漢肺炎中國武漢'
		)
	})
})
