import test from "ava";
import {fromAllEntries, fromFirstEntries, fromFoldEntries, fromLastEntries} from "./index";

test("fromFirstEntries", t => {
    t.deepEqual(
        Array.from(
            fromFirstEntries([
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

test("fromLastEntries", t => {
    t.deepEqual(
        Array.from(
            fromLastEntries([
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

test("fromAllEntries", t => {
    t.deepEqual(
        Array.from(
            fromAllEntries([
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

test("fromFoldEntries", t => {
    t.deepEqual(
        Array.from(
            fromFoldEntries(
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
