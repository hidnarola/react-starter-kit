import {
  GraphQLList as List,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
  GraphQLInt,
  GraphQLString,
} from 'graphql';

import PersonType from '../types/PersonType';
import Db from '../models/Person';

const Person = {
  type: new List(PersonType),
  args: {
      id: {
        type: GraphQLInt
      },
      personemail:
      {
        type:GraphQLString
      },
      personpassword:
      {
        type:GraphQLString
      },
      personconfirmpassword:
      {
          type: GraphQLString
      }
  },
  resolve(root, args)
    {
      // return  Db.findAll({where:args})
    return Db.findAll()
    }
  }

export default Person;
