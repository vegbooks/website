import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/09/mc-kenzies-frosty-surprise.jpg",
    "alt": "McKenzie’s Frosty Surprise",
    "href": "/media/2010/09/mc-kenzies-frosty-surprise.jpg",
    "width": 210,
    "height": 212,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "In ",
      {
        "type": "link",
        "href": "http://www.woodlilypublishers.com/titles.html",
        "external": true,
        "children": [
          "this story"
        ]
      },
      " by Patricia L. Atchison and Jo-Anne Jagers, McKenzie is a Mallard duck with a mind of his own. Rather than follow the other ducks and make the annual migration when the weather starts to get colder, he insists on staying behind."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Soon thereafter, McKenzie learns that it wasn’t a good idea not to follow his mother on the migration. As he wakes up to a frosty morning and needs help, he is assisted by the Chinook wind that blows down from the Rocky Mountains. The wind helps him catch up with his mother and make the migration."
    ]
  },
  {
    "type": "image",
    "src": "/media/2010/09/wlp-page-illustration.jpg",
    "alt": "",
    "href": "/media/2010/09/wlp-page-illustration.jpg",
    "width": 210,
    "height": 210,
    "align": "left"
  },
  {
    "type": "paragraph",
    "children": [
      "This is a cute book that most parents can appreciate because McKenzie is a lot like our children, pushing their limits and often finding out that mom was right. Sometimes, it is definitely better to take mom’s advice and stick by her side. Also, vegetarian parents would find this ",
      {
        "type": "link",
        "href": "http://www.patriciaatchison.ca/",
        "external": true,
        "children": [
          "a good book selection"
        ]
      },
      " as it respects animals and shows they have interests and personalities."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4-8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
