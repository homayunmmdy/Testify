import { db } from './db';

export const handlers = [
    ...db.posts.toHandlers('rest')
]