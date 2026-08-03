import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2009/11/cinder1.jpg",
    "alt": "Cinder-Eyed Cats",
    "width": 222,
    "height": 226,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "This beautifully illustrated book by ",
      {
        "type": "link",
        "href": "http://www.childrensliteraturenetwork.org/aifolder/aipages/ai_r/rohmann.html",
        "external": true,
        "children": [
          "Eric Rohmann"
        ]
      },
      " portrays the journey of a boy who traverses the sky to dance in the night with wild cats and a vast array of sea animals. Kids will enjoy looking for signs of the cats before they ever appear on the pages of the book: as the boy flies through the clouds in his boat, for example, he passes hills shaped like sleeping cats. And that Rohmann leaves large expanses of his book without words is fun for kids and parents alike."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Most importantly, this book emphasizes the connections between people and 0ther animals without resorting to anthropomorphism. Rohmann’s animals do not wear clothes or talk; the cats investigate the boy on the beach, leap like playful kittens, and eventually curl up for a good cat nap."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ideal for ages 3-7. For more reviews, ",
      {
        "type": "link",
        "href": "http://www.commonsensemedia.org/book-reviews/Cinder-Eyed-Cats.html",
        "external": true,
        "children": [
          "click here"
        ]
      },
      "."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
