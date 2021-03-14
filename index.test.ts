import test from "ava";
import {fromFirstEntries} from "./index";

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
