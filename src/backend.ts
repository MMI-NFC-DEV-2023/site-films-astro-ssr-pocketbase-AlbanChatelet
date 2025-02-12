import Pocketbase from 'pocketbase'
import type { TypedPocketBase } from './pocketbase-typegen'

export const pb = new Pocketbase('https://127.0.0.1:8090/') as TypedPocketBase
