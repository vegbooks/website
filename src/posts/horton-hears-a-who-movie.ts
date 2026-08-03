import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Horton Hears a Who! (2008)",
    "href": "/media/2010/06/movie-pic-from-istock.jpg",
    "width": 210,
    "height": 321,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I absolutely adore Dr. Seuss’s storybook ",
      {
        "type": "link",
        "href": "/reviews/horton-hears-a-who-the-book/",
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Horton Hears a Who!"
            ]
          }
        ]
      },
      " and the 1970 animated short of the same name (sometimes included with the old ",
      {
        "type": "emphasis",
        "children": [
          "Grinch"
        ]
      },
      " on DVD). So when I heard that talents ",
      {
        "type": "link",
        "href": "http://www.imdb.com/title/tt0451079/",
        "external": true,
        "children": [
          "Jim Carrey, Steve Carell, and Carol Burnett"
        ]
      },
      " were teaming up to do the voice work for a full-length feature film based on the book, I had high hopes."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "http://www.commonsensemedia.org/movie-reviews/dr-seuss-horton-hears-who",
        "external": true,
        "children": [
          "Common Sense Media"
        ]
      },
      " recommends this film for kids ages 4 and up, so we waited until after kiddo’s 4th birthday to make a huge bowl of popcorn with margarine and nutritional yeast and have our first family movie night. Unfortunately, we were disappointed. While kiddo did like some of the silliness in the movie — she wants me to tell you that Horton shaking his bottom was funny — the parts featuring villain Vlad were too scary for her. And to my dismay, I heard her repeating language from the movie (the word “boob”) that I thought was inappropriate for little kids."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "As for me, I was put off by the film’s lack of a coherent message. While Horton did recite his catch phrase from the book — “A person’s a person, no matter how small” — it was unclear whether the movie was about the consequences of stifling imagination, or believing in what you can’t see, or even the existence of life on other planets. The book’s emphasis on standing up for others and being true to yourself, no matter the consequences, was somehow lost in the shuffle."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Rated G. Ages 5-10. While there are a few jokes geared to parents, such as the fussy momma kangaroo’s reference to pouch-schooling, I don’t think most adults will enjoy this one."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
