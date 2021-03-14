import test from "ava";
import {
    keys,
    mapOfAllEntries,
    mapOfFirstEntries,
    mapOfFoldEntries,
    mapOfLastEntries,
    values
} from "./index";

test("mapOfFirstEntries", t => {
    t.deepEqual(
        Array.from(
            mapOfFirstEntries([
                ["a", 1],
                ["b", 2],
                ["a", 3]
            ])
        ),
        [
            ["a", 1],
            ["b", 2]
        ]
    );
});

test("mapOfLastEntries", t => {
    t.deepEqual(
        Array.from(
            mapOfLastEntries([
                ["a", 1],
                ["b", 2],
                ["a", 3]
            ])
        ),
        [
            ["a", 3],
            ["b", 2]
        ]
    );
});

test("mapOfAllEntries", t => {
    t.deepEqual(
        Array.from(
            mapOfAllEntries([
                ["a", 1],
                ["b", 2],
                ["a", 3]
            ])
        ),
        [
            ["a", [1, 3]],
            ["b", [2]]
        ]
    );
});

test("mapOfFoldEntries", t => {
    t.deepEqual(
        Array.from(
            mapOfFoldEntries(
                [
                    ["a", 1],
                    ["b", 2],
                    ["a", 3]
                ],
                (a, n) => a + n,
                0
            )
        ),
        [
            ["a", 4],
            ["b", 2]
        ]
    );
});

test("keys", t => {
    t.deepEqual(
        Array.from(
            keys(
                new Map([
                    ["a", 1],
                    ["b", 2],
                    ["a", 3]
                ])
            )
        ),
        ["a", "b"]
    );
    t.deepEqual(
        Array.from(
            keys([
                ["a", 1],
                ["b", 2],
                ["a", 3]
            ])
        ),
        ["a", "b", "a"]
    );
});

test("values", t => {
    t.deepEqual(
        Array.from(
            values(
                new Map([
                    ["a", 1],
                    ["b", 2],
                    ["a", 3]
                ])
            )
        ),
        [3, 2]
    );
    t.deepEqual(
        Array.from(
            values([
                ["a", 1],
                ["b", 2],
                ["a", 3]
            ])
        ),
        [1, 2, 3]
    );
});
