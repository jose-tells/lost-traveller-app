import axios from 'axios';
import { apiUrl } from '../../config';

export default async function getUserData(username, getPosts) {
  try {
    let userData = await axios({
      url: `${apiUrl}/api/users/${username}`,
      method: 'get',
    });
    userData = userData.data.data;

    let userPosts = await axios({
      url: `${apiUrl}/api/user-posts?userId=${userData.id}`,
      method: 'get',
    });
    userPosts = userPosts.data.data;

    const posts = await getPosts();

    const gotUserPosts = [];
    userPosts.forEach((userPost) => {
      const foundPosts = posts.find((post) => post.id === userPost.postId);
      gotUserPosts.push(foundPosts);
    });

    let comments = await axios.get(`${apiUrl}/api/comments`);

    comments = comments.data.data;

    let userComments = await axios({
      url: `${apiUrl}/api/user-comments?userId=${userData.id}`,
      method: 'get',
    });
    userComments = userComments.data.data;

    const gotUserComments = [];
    userComments.forEach((userComment) => {
      const foundComments = comments.find((comment) => comment._id === userComment.commentId);
      gotUserComments.push(foundComments);
    });

    return {
      ...userData,
      contributions: {
        posts: gotUserPosts,
        photos: [],
        comments: gotUserComments,
      },
    };
  } catch (err) {
    console.log(err);
    return {};
  }
};
