import {
  GraphQLObjectType as ObjectType,
  GraphQLID as ID,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const PersonType = new ObjectType({
  name: 'Perosn',
  fields: {
    id: { type: new NonNull(ID) },
    personemail: { type: StringType },
    personpassword:{type: StringType},
    personconfirmpassword:{type: StringType},
  },
});

export default PersonType;
