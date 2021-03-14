export type MapLike<TKey, TValue> = Iterable<[TKey, TValue]>;

export function mapOfFirstEntries<TKey, TValue>(entries: MapLike<TKey, TValue>): Map<TKey, TValue> {
    const map = new Map<TKey, TValue>();
    for (const [key, value] of entries) {
        if (!map.has(key)) {
            map.set(key, value);
        }
    }
    return map;
}

export function mapOfLastEntries<TKey, TValue>(entries: MapLike<TKey, TValue>): Map<TKey, TValue> {
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

export function fromFoldEntries<TKey, TValue, TFoldValue>(
    entries: MapLike<TKey, TValue>,
    f: (accumulator: TFoldValue, value: TValue, key: TKey) => TFoldValue,
    initial: TFoldValue
): Map<TKey, TFoldValue> {
    const map = new Map<TKey, TFoldValue>();
    for (const [key, value] of entries) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const accumulator = map.has(key) ? map.get(key)! : initial;
        map.set(key, f(accumulator, value, key));
    }
    return map;
}
