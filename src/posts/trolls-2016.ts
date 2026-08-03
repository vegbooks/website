import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Girl holding a movie camera - stock image to accompany movie review",
    "width": 210,
    "height": 317,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I took my kids (ages 3 and 7) to see the movie “Trolls.” I had heard that it was about happiness but didn’t know much beyond that, so I was pleasantly surprised at the animal friendly message. In the middle of it, my daughter exclaimed, “You have to review this one!”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The entire movie is about the Trolls trying to avoid being eaten by the Bergens. At one point, a scared Troll exclaims, “I don’t want to be food!” There is a lot of color, hair, singing, dancing, and talk of happiness to round out this story about not wanting to be someone else’s food."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The movie was cute and had a lot of great music. My daughter, age 7, really loved the movie. My son, age 3, was afraid of the Bergens and didn’t really enjoy it. ",
      {
        "type": "link",
        "href": "https://www.commonsensemedia.org/movie-reviews/trolls",
        "external": true,
        "children": [
          "Common Sense Media"
        ]
      },
      " suggests this movie for ages 6 and older and that seems about right."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Rated PG."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
