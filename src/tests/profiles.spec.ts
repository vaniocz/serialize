import {Field, Model} from '../decorators';
import {serialize} from '../converters';
import {ModelMetadataSerializer} from '../serializers/model-metadata.serializer';
import {deserialize} from '../converters/deserialize';

enum SerializeProfiles {
    reference
}

@Model()
class User {
    @Field()
    id: string;

    @Field()
    firstName: string;
}

@Model()
class Reference {
    @Field() id: string;
}

@Model()
class TestModel {
    @Field({
        profiles: {
            [SerializeProfiles.reference]: new ModelMetadataSerializer(Reference)
        }
    })
    user: User | Reference;
}

describe('Profiles', () => {
    it('should serialize using serializer from profile', () => {
        const testModel = createTestModel(createUser('identifier', 'firstName'));
        const expectedJson = {
            user: {id: 'identifier', firstName: 'firstName'}
        };

        const json = serialize(testModel);

        expect(json).toEqual(expectedJson);
    });

    it('should deserialize using serializer from profile', () => {
        const expectedModel = createTestModel(
            createUser('identifierForDeserialization', 'firstName')
        );
        const json = {
            user: {id: 'identifierForDeserialization', firstName: 'firstName'}
        };

        const model = deserialize(json, TestModel);

        expect(model).toEqual(expectedModel);
    });

    it('should serialize using serializer from profile', () => {
        const testModel = createTestModel(createUser('id', 'Some random name'));
        const expectedJson = {user: {id: 'id'}};

        const json = serialize(testModel, SerializeProfiles.reference);

        expect(json).toEqual(expectedJson);
    });

    it('should deserialize using serializer from profile', () => {
        const testJson = {user: {id: 'id'}};
        const expectedModel = createTestModel(createReference('id'));

        const model = deserialize(testJson, TestModel, SerializeProfiles.reference);

        expect(model).toEqual(expectedModel);
    });
});

function createTestModel(user: User | Reference): TestModel {
    const testModel = new TestModel();
    testModel.user = user;
    return testModel;
}

function createUser(id: string, firstName: string): User {
    const user = new User();
    user.id = id;
    user.firstName = firstName;
    return user;
}

function createReference(id: string): Reference {
    const reference = new Reference();
    reference.id = id;
    return reference;
}
