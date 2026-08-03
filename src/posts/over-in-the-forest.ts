import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/02/over-in-the-forest-cover.jpg",
    "alt": "Over in the Forest",
    "href": "/media/2012/02/over-in-the-forest-cover.jpg",
    "width": 210,
    "height": 189,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Much like ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "/reviews/jo-macdonald-had-a-garden/",
            "children": [
              "Jo MacDonald Had a Garden"
            ]
          }
        ]
      },
      " and generously provided in review form from the ",
      {
        "type": "link",
        "href": "http://www.dawnpub.com/",
        "external": true,
        "children": [
          "same publisher"
        ]
      },
      ", ",
      {
        "type": "emphasis",
        "children": [
          "Over in the Forest: Come and Take a Peek"
        ]
      },
      " is patterned after a well known childhood song, “Over in the Meadow.” Counting, nature, animal families, and animal tracks all come into play as the song progresses, illustrated by Jill Dubin and written by Marianne Berkes. Starting from one, we see mother animals with their babies. For example for the number five involves a turkey family:"
    ]
  },
  {
    "type": "quote",
    "children": [
      {
        "type": "paragraph",
        "children": [
          "Over in the forest",
          {
            "type": "lineBreak"
          },
          " Where wild berries thrive",
          {
            "type": "lineBreak"
          },
          " Lived an old mother turkey",
          {
            "type": "lineBreak"
          },
          " And her little poults five."
        ]
      },
      {
        "type": "paragraph",
        "children": [
          "“Scratch,” said the mother.",
          {
            "type": "lineBreak"
          },
          " “We scratch,” said the five.",
          {
            "type": "lineBreak"
          },
          " So they scratched on the ground",
          {
            "type": "lineBreak"
          },
          " Where the wild berries thrive."
        ]
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The animals featured are beavers, deer, possums, turtles, turkeys, squirrels, woodpeckers, raccoons, skunks, and foxes. My favorite extra in the book were the animal tracks on each page that matched the subject animals. Cultivating an interest in the natural world, as well as animals in their natural habitats, makes this a great choice for veg families. A number of pages at the end of the book act as a teaching guide useful for expanding on the lessons of the book. I know my three year old daughter was especially excited about footprints after we read this together."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Well crafted books are a treat and this definitely falls into that category. The stated age range is 3 to 8 but I imagine at each age and stage different aspects of this book will be of interest, even if your singing voice (like mine) is not always up to the task. My favorite sung version of “Over in the Meadow,” if you are looking for the song, is ",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/B0014DJQBG/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=B0014DJQBG",
        "external": true,
        "children": [
          "by Raffi"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "What animal-themed children’s tune is your favorite?"
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
