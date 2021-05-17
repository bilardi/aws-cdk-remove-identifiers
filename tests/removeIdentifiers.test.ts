/**
 * Test class of RemoveIdentifiers
 * 
 * There is a basic comparison between a template with identifiers and the same without identifiers.
 * 
 * **license**: MIT,
 * **see**: https://github.com/bilardi/aws-cdk-remove-identifiers
 */
import "jest-extended";
import { RemoveIdentifiers } from "../lib";
import templateWithIdentifiers from "./templateWithIdentifiers.json";
import templateWithoutIdentifiers from "./templateWithoutIdentifiers.json";

describe("Simple tests", () => {
    test("Passes when RemoveIdentifiers can remove identifiers", () => {
        const templateCleaned = new RemoveIdentifiers(templateWithIdentifiers);
        expect(templateCleaned).toMatchObject(templateWithoutIdentifiers);
    });
});
