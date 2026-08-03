import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2019/04/seashells-more-than-a-home.jpg",
    "alt": "Seashells: More Than a Home",
    "href": "/",
    "width": 300,
    "height": 233,
    "align": "left"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "strong",
        "children": [
          {
            "type": "link",
            "href": "https://www.charlesbridge.com/products/seashells-more-than-a-home",
            "external": true,
            "children": [
              "SEASHELLS: MORE THAN A HOME"
            ]
          }
        ]
      },
      "by Melissa Stewart is a detailed and informative picture book appropriate for reading aloud and for children who enjoy learning about nature and science on their own. As the title suggests, the pages share the myriad ways seashells serve the creatures that live within them. With two sets of text, one version in larger print and another with more detail in smaller print, this is a book that will grow and continue to entertain over time."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Children will marvel at the travel, strength, protection, and usefulness different seashells provide. The illustrations, by Sarah S. Brannen, are creative accompaniments to the text, and they often use comparisons to other animals to highlight the abilities of seashells. Portrayals of various sea creatures like scallops, oysters, and more show action and emotion artistically without anthropomorphizing in a cartoonish manner."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The main text of the book is followed by an explanation of different kinds of seashells, as well as an author’s note and an illustrator’s note. We are confident that ",
      {
        "type": "strong",
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Seashells: More Than a Home"
            ]
          }
        ]
      },
      "will be a beloved addition to any bookshelf or collection. Highly recommended."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
