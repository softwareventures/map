export type MapLike<TKey, TValue> = Iterable<[TKey, TValue]>;

export function fromFirstEntries<TKey, TValue>(entries: MapLike<TKey, TValue>): Map<TKey, TValue> {
    const map = new Map<TKey, TValue>();
    for (const [key, value] of entries) {
        if (!map.has(key)) {
            map.set(key, value);
        }
    }
    return map;
}

export function fromLastEntries<TKey, TValue>(entries: MapLike<TKey, TValue>): Map<TKey, TValue> {
    return new Map(entries);
}
