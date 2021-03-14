import test from "ava";
import {fromFirstEntries, fromLastEntries} from "./index";

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
