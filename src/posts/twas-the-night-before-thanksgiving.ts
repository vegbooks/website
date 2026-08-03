import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2009/11/twas-the-night-before-thanksgiving-sm1.jpg",
    "alt": "Twas the Night Before Thanksgiving - sm",
    "href": "http://www.pilkey.com/",
    "external": true,
    "width": 240,
    "height": 194,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "http://www.pilkey.com/",
        "external": true,
        "children": [
          "Dav Pilkey"
        ]
      },
      ", creator of Captain Underpants, wrote and illustrated a decidedly pro-vegetarian children’s book for publishing behemoth Scholastic."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "In a playful parody on the classic Christmas poem, Pilkey brings a busload of children to a turkey farm where they befriend birds Ollie, Stanley, Larry, Moe, Wally, Beaver, Shemp, and Groucho. The drama begins when the children question the farmer about an ax they have found, and his answer — that ",
      {
        "type": "link",
        "href": "http://www.petakids.com/feat-Thanksgiving09.html",
        "external": true,
        "children": [
          "he plans to slaughter their friends"
        ]
      },
      "— brings them to tears."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Happily for the children (and the turkeys), the farmer and teacher rush away to get cups of water to calm the crying children, which gives them time to become “calmer” and “mysteriously fatter.” After they waddle onto their school bus, many with feathers busting out of their jackets, the farmer discovers his turkeys have disappeared!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The end of this book so particularly sweet I’ve got to quote it to you:"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "“The very next evening, /Eight families were blessed/ With eight fluffy Thanksgiving turkeys/ As guests./ They feasted on veggies/ With jelly and toast,/ And everyone was thankful/ (The turkeys were most!).”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "It’s hard to believe that Dav Pilkey was not a vegetarian when he wrote this book, but it’s not surprising to learn he’s now a vegan."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4-8. For activities and lesson plans to accompany the book, click ",
      {
        "type": "link",
        "href": "http://www.teachingheart.net/turkey.html",
        "external": true,
        "children": [
          "here"
        ]
      },
      " or ",
      {
        "type": "link",
        "href": "http://www2.scholastic.com/browse/lessonplan.jsp?id=848",
        "external": true,
        "children": [
          "here"
        ]
      },
      "."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
