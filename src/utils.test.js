import {convertToCurrency} from "./utils";

test('convert', () => {
    const a = convertToCurrency(12)
    expect(a).toEqual("€ 12,00")
});

test('convert2' , () => {
    const a = convertToCurrency(12, "PLN")
    expect(a).toEqual("PLN 12,00")
});