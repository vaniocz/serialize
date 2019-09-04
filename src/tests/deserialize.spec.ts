import { Field, Model } from "../decorators";
import { deserialize } from "../converters";

@Model()
class TestModel {
  @Field()
  id: number;

  @Field()
  body: string;
}

describe("Deserialize", () => {
  const JSON = {
    id: 12,
    body: "Lorem ipsum"
  };

  it("should deserialize with a short signature with the same logic", () => {
    const model = deserialize(TestModel)(JSON);
    expect(model).toEqual(deserialize(JSON, TestModel));
  });

  it("should throw type error if usage is incorrect", () => {
    expect(() => deserialize(<any>JSON, 12)).toThrow(TypeError);
    expect(() => deserialize(TestModel, TestModel)).toThrow(TypeError);
  });
});
