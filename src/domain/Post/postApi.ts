import {postListMock} from './postListMock';
import {Post} from './types';

async function getList(): Promise<Post[]> {
  let response = await fetch('http://localhost:3333/user/post', {
    method: 'GET',
    headers: {
      Authorization:
        'Bearer Nw.ijprJVvOtayMRA1lcNNUFouZhP11cyLSc0H4L2gvy8HtrPsGqxWIhwX65Bsx',
    },
  });

  let data = await response.json();
  console.log('FETCH DATA:', data);

  // await new Promise(resolve => setTimeout(() => resolve(''), 1000));
  return postListMock;
}

export const postApi = {
  getList,
};
