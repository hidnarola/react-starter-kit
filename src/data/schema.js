/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLSchema as Schema,
  GraphQLObjectType as ObjectType,
} from 'graphql';

import me from './queries/me';
import news from './queries/news';
import intl from './queries/intl';
import person from './queries/person';
import  Mutation from "../data/mutations/personMutations";

// const schema = makeExecutableSchema({ typeDefs });
const schema = new Schema({
  query: new ObjectType({
    name: 'Query',
    fields: {
      me,
      news,
      intl,
      person
    },
  }),
  mutation: Mutation
});

// addMockFunctionsToSchema({ schema, mocks });
export default schema;
