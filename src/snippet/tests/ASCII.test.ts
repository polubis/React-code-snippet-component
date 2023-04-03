import { ASCII_IMGS, generateASCIIArt } from "../ASCII";

describe("generateASCIIArt()", () => {
  const placeholder = "RRRRRRRR";

  it(`
    returns ASCII image 
    without any trim operations
    when lines count is equal to height of ASCII image
  `, () => {
    const catLines = 33;
    const art = generateASCIIArt(ASCII_IMGS.CAT, catLines, placeholder);
    const lines = art.split("\n");

    expect(art).toBe(ASCII_IMGS.CAT);
    expect(lines.length).toBe(33);
  });

  it(`
    add additional lines
    when lines of code
    are higher than generated
    ASCII image height
  `, () => {
    const art = generateASCIIArt(ASCII_IMGS.CAT, 34, placeholder);
    const lines = art.split("\n");

    expect(art).toContain(placeholder);
    expect(lines.length).toBe(34);
  });

  it(`
    removes not needed lines
    when lines of code
    are lower than
    ASCII image height
  `, () => {
    const art = generateASCIIArt(ASCII_IMGS.CAT, 30, placeholder);
    const lines = art.split("\n");

    expect(art).not.toContain(placeholder);
    expect(lines.length).toBe(30);
  });
});
