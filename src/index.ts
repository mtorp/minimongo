import * as quickfind from './quickfind'
import * as utils from './utils'

export * from './types'

import { default as MemoryDb } from './MemoryDb'
import { default as LocalStorageDb } from './LocalStorageDb'
import { default as IndexedDb } from './IndexedDb'
import { default as WebSQLDb } from './WebSQLDb'
import { default as RemoteDb } from './RemoteDb'
import { default as HybridDb } from './HybridDb'
import { default as ReplicatingDb } from './ReplicatingDb'

export { quickfind, utils, MemoryDb, LocalStorageDb, IndexedDb, WebSQLDb, RemoteDb, HybridDb, ReplicatingDb }

export default { quickfind, utils, MemoryDb, LocalStorageDb, IndexedDb, WebSQLDb, RemoteDb, HybridDb, ReplicatingDb }