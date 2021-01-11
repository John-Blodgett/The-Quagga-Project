import ColorChanger from '../src/ColorChanger';

document.body.style.background = "black";

test('checks to see if dark bacground became white',() => {
    expect(ColorChanger(document)).toBe("Light Mode");
});