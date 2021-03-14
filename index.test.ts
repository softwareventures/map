import test from "ava";
import {mapOfAllEntries, mapOfFirstEntries, mapOfFoldEntries, mapOfLastEntries} from "./index";

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
