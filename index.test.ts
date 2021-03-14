import test from "ava";
import {fromFirstEntries, fromLastEntries} from "./index";

test("fromFirstEntries", t => {
    t.deepEqual(
        [
            ["a", 1],
            ["b", 2]
        ],
        Array.from(
            fromFirstEntries([
                ["a", 1],
                ["b", 2],
                ["a", 3]
            ])
        )
    );
});

test("fromLastEntries", t => {
    t.deepEqual(
        [
            ["a", 3],
            ["b", 2]
        ],
        Array.from(
            fromLastEntries([
                ["a", 1],
                ["b", 2],
                ["a", 3]
            ])
        )
    );
});
