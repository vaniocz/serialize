# Serialize TS

## Introduction
Serialize TS is a tool that can improve the OOP modeling of your Typescript projects.

If the answer for someone of them is "true" this library can help your project. In the other case, you can ignore this tool.

- Do you want to have methods inside of your model? 
- Do you write "mappers"?
- Do you want to make your logic depends on the model type?
- Do you have an entity that looks not very nice for you on your APIs? 
- Do you want to change your model structure in your code, but don't want to write tonnes of boilerplate code?

You can do all of these things with this tool and even more if you are ready to do community work to improve this tool.

## Getting started

### Instalation

1. Install as a dependency to your project:
`npm install serialize-ts --save` or `yarn add serialize-ts`;

2. Add the `emitDecoratorMetadata: true` to your `compilerOptions` in the `tsconfig.json` if it isn't already there.

### Examples

**Serialization**

Simple model:

```typescript
class TestModel {
  @Field()
  @Name("server-id")
  id: number;

  @Field()
  fullName: string;

  ignoredField: any;
}

const model = new TestModel();
model.id = 12;
model.fullName = "Default full name";
model.ignoredField = { customName: "test" };

console.log(serialize(model));

/*Output -> {
    server-id: 12,
    fullName: 'Default full name'
}*/

const obj = {
  "server-id": 12,
  fullName: "Default full name",
  ignoredField: "some ignored value"
};

console.log(deserialize(obj, TestModel));

/*Output -> TestModel {
    id: 12,
    fullName: 'Default full name'
}*/
```

Nested models:

```typescript

@Model()
class NestedModel {
    @Field()
    firstField: number;
    @Field()
    secondField: string;
}

class OuterModel {
    @Field()
    id: number;

    @Field()
    nestedModel: NestedModel;
}

const obj = {
    id: 12,
    nestedModel: {
        firstField: 24,
        secondField: 'Some awesome string!'
    }
};

const outerModel = deserialize(obj, OuterModel);
console.log(outerModel);

/*
    Output -> OuterModel {
        id: 12,
        nestedModel: NestedModel {
            firstField: 24,
            secondField: "Some awesome string!"
        }
    }
*/

console.log(serialize(outerModel));

/*
    Output -> {
        id: 12,
        nestedModel: {
            firstField: 24,
            secondField: "Some awesome string!"
        }
    }
*/

```

Arrays:

```typescript
class Test {
    @Field()
    id: number;

    @Field()
    @Name('numbers')
    @Type(new ArraySerializer(new PrimitiveSerializer()))
    arrayOfNumbers: number[];
}

const obj = {
    id: 12,
    numbers: [12, 24, 36, 48]
};

const deserializedModel = deserialize(obj, Test);
console.log(deserializedModel);
/*
    Output -> Test {
        id: 12,
        arrayOfNumber:  [12, 24, 36, 48]
    }
*/

```

Custom serializers:

```typescript
class CustomSerializer implements Serializer<Object> {
    serialize(model: Object) {
        // Do some custom logic
    }

    deserialize(json: Object) {
        // Do your custom logic and return deserialized object
    }
}

class Model {
    @Field()
    id: 12;

    @Field()
    @Type(new CustomSerializer())
    customField: any;
}

```

If you have some troubles with serialization without serializer decorator definition, you are able to define it with ```@Serializer(YourCustomModel)``` or with some default type like Date or String.
I am waiting for the issues of course!
