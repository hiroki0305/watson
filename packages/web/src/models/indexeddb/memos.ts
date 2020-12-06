import Dexie from "dexie";

export type MemoRecord = {
    datetime: string
    title: string
    content: string
}

const database = new Dexie('markdown-editor')
database.version(1).stores({memos: '&datetime'})
const memos: Dexie.Table<MemoRecord, string> = database.table('memos')

export const putMemo = async (title: string, content: string): Promise<void> => {
    const datetime = new Date().toISOString()
    await memos.put({datetime, title, content})
}

export const getMemos = (): Promise<MemoRecord[]> => {
    return memos.orderBy('datetime')
        .reverse()
        .toArray()
}