import { createLangs } from './utils'

chrome.storage.sync.set({ keywordsMap: createLangs() })
