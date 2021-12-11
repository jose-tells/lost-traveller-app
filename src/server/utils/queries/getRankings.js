import axios from 'axios';
import { apiUrl } from '../../config';

export default async function getRankings() {
  let rankings = await axios({
    url: `${apiUrl}/api/rankings`,
    method: 'get',
  });

  rankings = rankings.data.data.map((ranking) => {
    return {
      ...ranking,
      rankId: ranking._id,
    };
  });

  return rankings;
};
