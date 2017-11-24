/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import Register from './Register';
const title = 'New User Registration';

async function action({fetch}) {
  const resp = await fetch('/graphql', {
    body: JSON.stringify({
    query: '{person{personemail,personpassword}}',
    }),
  });
  const  {data} = await resp.json();
  if (!data || !data.person) throw new Error('Failed to load USer data.');

  return {
    chunks: ['register'],
    title,
    component: (
      <Layout>
        <Register title={title} userdata ={data.person} />
      </Layout>
    ),
  };
}

export default action;
