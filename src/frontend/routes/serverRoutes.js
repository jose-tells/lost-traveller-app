import Home from '../containers/Home';
import Posts from '../containers/Posts';
import SignIn from '../containers/SignIn';
import SignUp from '../containers/SignUp';
import UserProfile from '../containers/UserProfile';
import UserProfileRequest from '../containers/UserProfileRequest';
import UploadPosts from '../containers/UploadPosts';
import NotFound from '../containers/NotFound';

const routes = [
  {
    exact: true,
    path: '/',
    component: Home,
  },
  {
    exact: true,
    path: '/post/:id',
    component: Posts,
  },
  {
    exact: true,
    path: '/signin',
    component: SignIn,
  },
  {
    exact: true,
    path: '/signup',
    component: SignUp,
  },
  {
    exact: true,
    path: '/profile',
    component: UserProfile,
  },
  {
    exact: true,
    path: '/user/:userId',
    component: UserProfileRequest,
  },
  {
    exact: true,
    path: '/upload',
    component: UploadPosts,
  },
  {
    name: 'NotFound',
    component: NotFound,
  },
];
export default routes;
