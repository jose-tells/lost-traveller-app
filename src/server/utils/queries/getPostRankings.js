import axios from 'axios';

export default async function getPostRankings(url) {
  try {
    let postRankings = await axios({
      url,
      method: 'get',
    });

    postRankings = postRankings.data.data;

    return postRankings;
  } catch (err) {
    return [];
  };
};
