export default function filterUserContributors(comments) {

  const users = comments.map((comment) => {
    return comment.userCreator;
  });

  const usersContributors = users.filter((item, index, array) => {
    return array.findIndex((element) => {
      return element.userId === item.userId;
    }) === index;
  });

  const filteredUsers = usersContributors.filter((item, index) => {
    return index < 4;
  });

  return filteredUsers;
};
