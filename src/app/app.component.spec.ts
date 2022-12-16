import { AppComponent } from "./app.component";
describe("Converting from decimal to binary method", () => {
  const comp = new AppComponent();
  it("If we passed 7 should return 111", () => {
    expect(comp.convertDecemalToBinary(7)).toEqual(111);
  })
  it("If we passed 10 should return 1010", () => {
    expect(comp.convertDecemalToBinary(10)).toEqual(1010);
  })
  it("If we passed 255 should return 11111111", () => {
    expect(comp.convertDecemalToBinary(255)).toEqual(11111111)
  })
  it("If we passed 15 should return 1111", () => {
    expect(comp.convertDecemalToBinary(15)).toEqual(1111);
  })
})
