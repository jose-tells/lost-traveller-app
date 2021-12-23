import axios from 'axios';
import { apiUrl } from '../../config';

export default async function getRootUser(username, email, id, token) {
  try {
    const userData = await axios.get(`${apiUrl}/api/users/${token ? username : ''}`);

    const { firstName, verified, profilePhoto } = userData.data.data;

    return {
      id,
      name: firstName,
      username,
      email,
      verified,
      profilePhoto,
    };
  } catch (err) {
    return {};
  }
};
