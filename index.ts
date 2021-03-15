import {map as mapIterable} from "@softwareventures/iterable";

export type MapLike<TKey, TValue> = Iterable<[TKey, TValue]>;

export function isMap<TKey, TValue>(
    value: MapLike<TKey, TValue> | {} | null | undefined
): value is Map<TKey, TValue> {
    return value instanceof Map;
}

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

export function mapOfAllEntries<TKey, TValue>(entries: MapLike<TKey, TValue>): Map<TKey, TValue[]> {
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

export function mapOfFoldEntries<TKey, TValue, TFoldValue>(
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

export function mapOfFoldEntriesFn<TKey, TValue, TFoldValue>(
    f: (accumulator: TFoldValue, value: TValue, key: TKey) => TFoldValue,
    initial: TFoldValue
): (entries: MapLike<TKey, TValue>) => Map<TKey, TFoldValue> {
    return entries => mapOfFoldEntries(entries, f, initial);
}

export function entries<TKey, TValue>(map: ReadonlyMap<TKey, TValue>): Iterable<[TKey, TValue]> {
    return map.entries();
}

export function keys<TKey, TValue>(map: MapLike<TKey, TValue>): Iterable<TKey> {
    return map instanceof Map ? map.keys() : mapIterable(map, ([key]) => key);
}

export function values<TKey, TValue>(map: MapLike<TKey, TValue>): Iterable<TValue> {
    return map instanceof Map ? map.values() : mapIterable(map, ([_, value]) => value);
}

export function mapValues<TKey, TValue, TNewValue>(
    map: ReadonlyMap<TKey, TValue>,
    f: (value: TValue, key: TKey) => TNewValue
): Map<TKey, TNewValue> {
    return new Map(mapIterable(map, ([key, value]) => [key, f(value, key)]));
}

export function mapValuesFn<TKey, TValue, TNewValue>(
    f: (value: TValue, key: TKey) => TNewValue
): (map: ReadonlyMap<TKey, TValue>) => Map<TKey, TNewValue> {
    return map => mapValues(map, f);
}
