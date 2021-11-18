const initialState = {
  'user': {},
  'createUser': {},
  'userRequest': {},
  'users': [
    {
      'id': 5877,
      'firstName': 'Agustín',
      'lastName': 'Vergara',
      'username': 'agus_69',
      'profilePhoto': '',
      'verified': false,
      'contributions': {
        'posts': [],
        'photos': [],
        'comments': [],
      },
    },
    {
      'id': 6969,
      'firstName': 'José',
      'lastName': 'Marquínez',
      'username': 'jose_tells',
      'profilePhoto': '',
      'verified': true,
      'contributions': {
        'posts': [
          {
            'id': 2345,
            'name': 'Costa del Este',
            'province': 'Panama',
            'photo': '',
            'comments': [
              {
                'id': 1,
                'user': {
                  'id': 6,
                  'username': 'jose_tells',
                  'photo': '',
                },
                'content': 'Hi!!!!',
                'date': '1/10/2021',
                'replies': [
                  {
                    'id': 2,
                    'user': {
                      'id': '1',
                      'username': 'jony_xd',
                      'photo': '',
                    },
                    'content': 'Hello!',
                    'date': '1/10/2021',
                  },
                  {
                    'id': 3,
                    'user': {
                      'id': '1',
                      'username': 'jony_xd',
                      'photo': '',
                    },
                    'content': 'Xopaa!',
                    'date': '1/10/2021',
                  },
                ],
              },
            ],
          },
        ],
        'photos': [
          {
            'id': '1',
            'media': '',
            'metadata': 'sky.jpg',
          },
          {
            'id': '2',
            'media': '',
            'metadata': 'cat.jpg',
          },
        ],
        'comments': [
          {
            'id': 1,
            'postId': 2345,
            'user': {
              'id': '1',
              'username': 'jose_tells',
              'photo': '',
            },
            'content': 'Try to find all easter eggs!',
            'inResponse': '',
            'leadComment': true,
            'date': '1/10/2021',
          },
          {
            'id': 2,
            'postId': 2346,
            'user': {
              'id': 1,
              'username': 'jose_tells',
              'photo': '',
            },
            'content': 'Hell yeah!',
            'inResponse': true,
            'leadComment': '',
            'date': '1/10/2021',
          },
        ],
      },
    },
  ],
  'post': {},
  'posts': [
    {
      'id': 2345,
      'name': 'Costa del Este',
      'province': 'Panama',
      'averagePrice': 24,
      'photo': '',
      'weather': 30,
      'weatherEmoji': [
        'https://img.icons8.com/emoji/48/000000/sun-emoji.png',
        'sunny',
      ],
      'userCreator': {
        'name': 'Jose',
        'username': 'jose_tells',
        'photo': '',
        'verified': true,
      },
      'usersContributors': [
        {
          'id': 1,
          'name': 'Agustín',
          'username': 'agus_02',
          'photo': '',
        },
        {
          'id': 2,
          'name': 'Jonathan',
          'username': 'jony_xd',
          'photo': '',
        },
        {
          'id': 3,
          'name': 'José',
          'username': 'jose_tells',
          'photo': '',
        },
        {
          'id': 4,
          'name': 'David',
          'username': 'dave_32',
          'photo': '',
        },
      ],
      'addRankings': {},
      'rankings': [
        {
          'rankId': 1,
          'rankName': 'Security',
          'rankEmoji': 'https://img.icons8.com/emoji/48/000000/woman-police-officer.png',
          'rankStatus': '80',
        },
        {
          'rankId': 2,
          'rankName': 'Beaches',
          'rankEmoji': 'https://img.icons8.com/emoji/48/000000/beach-with-umbrella.png',
          'rankStatus': '30',
        },
        {
          'rankId': 3,
          'rankName': 'Cleanly',
          'rankEmoji': 'https://img.icons8.com/emoji/48/000000/wastebasket-emoji.png',
          'rankStatus': '74',
        },
        {
          'rankId': 4,
          'rankName': 'Hotels',
          'rankEmoji': 'https://img.icons8.com/emoji/48/000000/hotel-emoji.png',
          'rankStatus': '100',
        },
      ],
      'review': "So this is Costa del este, it's not wow, but is good, there are places to hang out and to exercise, evenly.",
      'comments': [
        {
          'id': 1,
          'user': {
            'id': 6,
            'username': 'jose_tells',
            'photo': '',
          },
          'content': 'Hi!!!!',
          'date': '1/10/2021',
          'replies': [
            {
              'id': 2,
              'user': {
                'id': '1',
                'username': 'jony_xd',
                'photo': '',
              },
              'content': 'Hello!',
              'date': '1/10/2021',
            },
            {
              'id': 3,
              'user': {
                'id': '1',
                'username': 'jony_xd',
                'photo': '',
              },
              'content': 'Xopaa!',
              'date': '1/10/2021',
            },
          ],
        },
        {
          'id': 2345,
          'user': {
            'id': 6,
            'username': 'jose_tells',
            'photo': '',
          },
          'content': 'Costa del Este is great, just look at the sky and see those birds!',
          'date': '1/10/2021',
          'replies': [
            {
              'id': 2,
              'user': {
                'id': '1',
                'username': 'jony_xd',
                'photo': '',
              },
              'content': 'Meh, the girls are much better!',
              'date': '1/10/2021',
            },
          ],
        },
      ],
    },
    {
      'id': 2346,
      'name': 'San Blas',
      'province': 'Kuna Yala',
      'averagePrice': 300,
      'photo': '',
      'weather': 35,
      'weatherEmoji': [
        'https://img.icons8.com/emoji/48/000000/sun-emoji.png',
        'sunny',
      ],
      'userCreator': {
        'name': 'Jonathan',
        'username': 'jony_xd',
        'photo': '',
        'verified': true,
      },
      'usersContributors': [
        {
          'id': 1,
          'name': 'José',
          'username': 'jose_tells',
          'photo': '',
        },
        {
          'id': 2,
          'name': 'Jonathan',
          'username': 'jony_xd',
          'photo': '',
        },
        {
          'id': 3,
          'name': 'Agustín',
          'username': 'agus_02',
          'photo': '',
        },
        {
          'id': 4,
          'name': 'David',
          'username': 'dave_32',
          'photo': '',
        },
        {
          'id': 9,
          'name': 'Demian',
          'username': 'des_43_2',
          'photo': '',
        },
      ],
      'addRankings': {},
      'rankings': [
        {
          'rankId': 1,
          'rankName': 'Security',
          'rankEmoji': 'https://img.icons8.com/emoji/48/000000/woman-police-officer.png',
          'rankStatus': '20',
        },
        {
          'rankId': 5,
          'rankName': 'Accessibility',
          'rankEmoji': 'https://img.icons8.com/emoji/48/000000/motorway.png',
          'rankStatus': '20',
        },
      ],
      'review': 'San blas, oh San blas and them clearly waters, are just amazing!',
      'comments': [
        {
          'id': 1,
          'user': {
            'id': 6,
            'username': 'jose_tells',
            'photo': '',
          },
          'content': 'Yeah bro, but you just only saw the beaches?',
          'date': '1/10/2021',
          'replies': [
            {
              'id': 2,
              'user': {
                'id': '1',
                'username': 'jony_xd',
                'photo': '',
              },
              'content': 'yeah, why?',
              'date': '1/10/2021',
            },
          ],
        },
      ],
    },
  ],
  'rankings': [
    {
      'rankId': 456,
      'rankName': 'Security',
      'rankEmoji': 'https://img.icons8.com/emoji/48/000000/woman-police-officer.png',
    },
    {
      'rankId': 457,
      'rankName': 'Beaches',
      'rankEmoji': 'https://img.icons8.com/emoji/48/000000/beach-with-umbrella.png',
    },
    {
      'rankId': 458,
      'rankName': 'Cleanly',
      'rankEmoji': 'https://img.icons8.com/emoji/48/000000/wastebasket-emoji.png',
    },
    {
      'rankId': 459,
      'rankName': 'Hotels',
      'rankEmoji': 'https://img.icons8.com/emoji/48/000000/hotel-emoji.png',
    },
    {
      'rankId': 460,
      'rankName': 'top',
      'rankEmoji': 'https://img.icons8.com/emoji/48/000000/top-arrow-emoj.png',
    },
  ],
  'filterRanks': [],
};
export default initialState;
