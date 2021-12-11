import axios from 'axios';
import listPostComments from './listPostComments';
import { apiUrl } from '../../config';
import getPostRankings from './getPostRankings';

export default async function getPosts() {
  try {
    let postsList = await axios({
      url: `${apiUrl}/api/posts`,
      method: 'get',
    });

    postsList = postsList.data.data;

    const posts = await Promise.all(postsList.map(async (post) => {
      const comments = await listPostComments(`${apiUrl}/api/comments?postId=${post._id}`);
      const rankings = await getPostRankings(`${apiUrl}/api/posts-rankings?postId=${post._id}`);
      return {
        ...post,
        id: post._id,
        comments,
        rankings,
      };
    }));

    return posts;

  } catch (err) {
    return {};
  }
};
