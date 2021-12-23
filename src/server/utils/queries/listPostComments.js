import axios from 'axios';

const listPostComments = async (url) => {
  const postComments = await axios({
    url,
    method: 'get',
  });

  return postComments.data.data;
};

module.exports = listPostComments;
