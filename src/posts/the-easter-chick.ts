import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "alt": "The Easter Chick",
    "href": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "width": 210,
    "height": 139,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Author Geraldine Elschner and illustrator ",
      {
        "type": "link",
        "href": "http://www.alexandrajunge.de/",
        "external": true,
        "children": [
          "Alexandra Junge"
        ]
      },
      " have put together a brilliantly multi-faceted book in ",
      {
        "type": "emphasis",
        "children": [
          "The Easter Chick"
        ]
      },
      ". Not only does book tell the story of an egg that wants to hatch on Easter, but it includes a clear and memorable description of how to determine when Easter is (I know I’m always confused about how they decide when Easter is) each year. The book also contains simple illustrations of phases of the moon, a recital of the days of the week, and hidden rabbits throughout the book for an Easter bunny search and find. Even though the story is geared for kids older than my three-year old, she still enjoyed the facial expressions on the animals and had a great time finding the hidden rabbits. I’m not sure if she remembers the three things that help set the date for Easter each year, but I sure do!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The story is entertaining with uniquely stylized illustrations that camouflage that it is marvelously fun teaching tool. Junge’s images are colorful and very expressive. Although not overtly religious, one of the illustrations contains three crosses in the background and sheep in the foreground. This subtlety, cleverness, and focus on the egg as a chick versus ",
      {
        "type": "link",
        "href": "http://www.wesleyan.edu/wsa/warn/eon/batteryfarming/index.html",
        "external": true,
        "children": [
          "egg as food or object"
        ]
      },
      " makes this my top pick for a ",
      {
        "type": "link",
        "href": "http://www.veganoutreach.org/whyvegan/",
        "external": true,
        "children": [
          "vegan"
        ]
      },
      "-friendly Easter story."
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
