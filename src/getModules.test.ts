import getModules from "./getModules";

it("works", () => {
  const actual = getModules();
  // console.log('actual :>> ', actual);
  expect(actual.length).toBeGreaterThanOrEqual(40);
  expect(actual).toContain("@adobe/react-spectrum");
  expect(actual).toContain("@react-spectrum/button");
  expect(actual).toContain("@spectrum-icons/workflow");
});
