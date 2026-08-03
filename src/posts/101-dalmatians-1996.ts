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
      "I was home sick with two kids (ages 2 and 6) by myself and took care of them the only way I could manage – an all day movie marathon. I was interested in showing them the super cute animated “101 Dalmatians” that I remember enjoying as a child, positively ",
      {
        "type": "link",
        "href": "/reviews/101-dalmatians/",
        "children": [
          "reviewed on this blog previously"
        ]
      },
      ". But the live action version was available for free on Netflix, so that is what we watched."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The movie is sweet enough, with a cute love story paralleled between the dogs and the owners. The puppies are super swoon-worthy. There were some hard parts for my daughter to get through. Fur is a tough subject matter and once she realized what Cruella De Vil’s intentions were with the puppies, she was reduced to a sobbing mess. She had me reassure her throughout that no one would die, and in the end declared it a great movie. It was an emotional journey but she enjoyed it."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "My son, only two years old, didn’t follow the movie but he liked the dogs and enjoyed the slapstick comedy of the dog thieves, yelling “CRASH!” every time they crashed into something."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Overall, this is a nice movie. Not movie of the year great, but an enjoyable time. There are some great stars that make the movie shine – Glenn Close, Jeff Daniels, and Hugh Laurie as a surprisingly comedic dog thief. I would recommend it for your next rainy day."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Rated G. ",
      {
        "type": "link",
        "href": "https://www.commonsensemedia.org/movie-reviews/101-dalmatians-live-action",
        "external": true,
        "children": [
          "Common Sense Media"
        ]
      },
      " recommends this for ages five and older. My six-year-old enjoyed it but was very emotional throughout."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
