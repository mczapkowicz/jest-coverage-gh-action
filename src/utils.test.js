import {convertToCurrency} from "./utils";

test('convert', () => {
    const a = convertToCurrency(12)
    expect(a).toEqual("€ 12,00")
});
