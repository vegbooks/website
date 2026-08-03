import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/05/sometimes-its-turkey-cover.jpg",
    "alt": "Sometimes It’s Turkey, Sometimes It’s Feathers",
    "href": "/media/2011/05/sometimes-its-turkey-cover.jpg",
    "width": 213,
    "height": 276,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I’d first heard of Lorna Balian’s picture book ",
      {
        "type": "emphasis",
        "children": [
          "Sometimes It’s Turkey, Sometimes It’s Feathers"
        ]
      },
      " because it was recommended on the ",
      {
        "type": "link",
        "href": "http://groups.yahoo.com/group/vrgparents/",
        "external": true,
        "children": [
          "Vegetarian Resource Group’s veg parents listserv"
        ]
      },
      ". Then I noticed that readers had also ",
      {
        "type": "link",
        "href": "http://www.goodreads.com/list/show/3838.Vegetarian_Vegan_Friendly_Books_for_Kids",
        "external": true,
        "children": [
          "listed it on Goodreads"
        ]
      },
      " as a good book for vegetarian and vegan kids. So of course I had to read it!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The bad news is that the hardcover edition is out of print, so you’ll have to visit your library, score a copy on ",
      {
        "type": "link",
        "href": "http://www.paperbackswap.com/index.php",
        "external": true,
        "children": [
          "Paperback Swap"
        ]
      },
      " (like I did), or settle for paperback if you want to read it to your child. The good news is, well, all the rest. This book is funny, the illustrations are darling, and the message is one that will make vegetarian and vegan kids happy."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Simply put, veggie families will love the story of Mrs. Gumm, who stumbles across a turkey egg and learns, in rearing the animal to become her Thanksgiving dinner, that turkeys are friends, not food. Parents of very young children may want to prepare them for a scary moment in which Mrs. Gumm sharpens her hatchet, but rest assured, no harm comes to the turkey."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 3-7."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
