import { traverseNode, createLangs } from '../utils'

describe('test traverseNode ', () => {
	test('should return the word without 新冠', () => {
		expect(traverseNode(document.body, createLangs()).textContent).toBe(
			'中國武漢肺炎中國武漢肺炎中國武漢'
		)
	})
})
