import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/02/0395378001-lres.jpg",
    "alt": "Annie and the Wild Animals",
    "href": "/media/2010/02/0395378001-lres.jpg",
    "width": 222,
    "height": 270,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Prolific, award-winning author and illustrator ",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/Jan_Brett",
        "external": true,
        "children": [
          "Jan Brett’s"
        ]
      },
      " ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.powells.com/biblio/1-9780395510063-0",
            "external": true,
            "children": [
              "Annie and the Wild Animals"
            ]
          }
        ]
      },
      " is the lushly illustrated winter tale of a girl and her cat Taffy. When Taffy begins acting strangely and disappears in the deep of winter, lonely Annie tries to entice another animal into becoming her friend by setting corn cakes out near the woods. The wild animals she encounters are clearly not suitable replacements but enjoy her corn cakes. Soon, the animals become dependent upon Annie’s hand outs and invade her house to demand food. When the weather changes to spring, the wild animals return to the woods and Taffy returns to Annie– with three kittens in tow."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This engaging tale is perfect for reading together on a snowy day and opens doors to many discussions about animal welfare issues. Opportunities abound to discuss the relationship between humans and animals, including why we don’t leave food out for wild animals and why we spay and neuter our companion animals."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "A special treat in Ms. Brett’s books are the richly illustrated borders around each page which augment the main illustration. These borders contain hints and clues about what is going on with other characters in the story and what will happen in the coming pages. Enjoy reading and discussing this story with ages 3 and up. Find a bit more about discussing this story with your child ",
      {
        "type": "link",
        "href": "http://www.janbrett.com/piggybacks/annie.htm",
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
