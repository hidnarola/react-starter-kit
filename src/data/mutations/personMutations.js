import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} from 'graphql';

import PersonType from '../types/PersonType';
import Person from '../models/Person';

const Mutation = new GraphQLObjectType({
  name: 'Mutations',
  description: 'Functions to set stuff',
  fields :()=> {
    return {
      addPerson: {
        type: PersonType,
        args: {
            personemail: {
            type: new GraphQLNonNull(GraphQLString)
          },
          personpassword: {
            type: new GraphQLNonNull(GraphQLString)
          },
          personconfirmpassword:{
            type: new GraphQLNonNull(GraphQLString)
          }

        },
        resolve(source, args) {
          return Person.create({
            personemail: args.personemail,
            personpassword: args.personpassword,
            personconfirmpassword:args.personconfirmpassword
          })
        }
      },
    };
  }
});
export default Mutation;

