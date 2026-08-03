import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/12/santas-littlest-helper-hires.jpg",
    "alt": "Santa’s Littlest Helper",
    "href": "/media/2012/12/santas-littlest-helper-hires.jpg",
    "width": 210,
    "height": 262,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Sometimes you just come across a gem. This one is one of a couple library books we checked out while looking for stories about elves. (Yes, my daughter is into that ",
      {
        "type": "link",
        "href": "http://www.elfontheshelf.com/",
        "external": true,
        "children": [
          "Elf on a Shelf"
        ]
      },
      "craze and wanted to learn more about elves like her Mr.Whistler scout elf.) I thought ",
      {
        "type": "emphasis",
        "children": [
          "Santa’s Littlest Helper"
        ]
      },
      " would be a story similar to ",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/Rudolph_the_Red-Nosed_Reindeer",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Rudolph the Red Nosed Reindeer"
            ]
          }
        ]
      },
      ", and it was… yet it wasn’t. My daughter has recently pointed out that Santa doesn’t treat his reindeer very nicely- and we’ve noticed in most movies and stories, it’s true! I don’t want to give anything away but ",
      {
        "type": "emphasis",
        "children": [
          "Santa’s Littlest Helper"
        ]
      },
      " is definitely more animal-friendly."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "One of the best things about children’s books for a visual person like me is the illustrations and Henrike Wilson creates some delightful and appealing black-outlined images. I do have to say, it is a little unsettling that Wilson’s elves all look exactly like little Santas! Once I got over that, I found the painterly images adorable and I suddenly got a craving for a white Christmas."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
