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

export function fromAllEntries<TKey, TValue>(entries: MapLike<TKey, TValue>): Map<TKey, TValue[]> {
    const map = new Map<TKey, TValue[]>();
    for (const [key, value] of entries) {
        const values = map.get(key) ?? [];
        values.push(value);
        if (!map.has(key)) {
            map.set(key, values);
        }
    }
    return map;
}
