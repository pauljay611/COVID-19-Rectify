import { JSDOM } from 'jsdom'

const dom = new JSDOM(
	`<body><div><h1>新冠肺炎<p>新型冠狀肺炎<span>新型</span></span></p></h1></div></body>`
)
global.document = dom.window.document
global.window = dom.window
