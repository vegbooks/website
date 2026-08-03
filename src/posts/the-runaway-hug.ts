import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2014/02/runaway.jpeg",
    "alt": "Runaway",
    "href": "/reviews/the-runaway-hug/",
    "width": 210,
    "height": 255,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "What the world needs now is hugs — taken from one person only to pass it on or return it in an improved state. The wonderful picture book ",
      {
        "type": "emphasis",
        "children": [
          "The Runaway Hug"
        ]
      },
      ", written by Nick Bland and illustrated with luscious drawings by Freya Blackwood, will leave you feeling warm, fuzzy, and wanting to find a loved one to hug."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Centered around a good night routine for preschooler Lucy, ",
      {
        "type": "emphasis",
        "children": [
          "The Runaway Hug"
        ]
      },
      " follows the journey of Lucy and a hug she borrowed from her Mommy. She brings it eagerly to her Daddy, who takes a break from watching a soccer game to share a snuggle. Then she moves on to her twin brothers and eventually her baby sister. It’s Annie the dog who creates the final havoc by running off with the slobbery hug from her best friend. Not to worry, the hug eventually comes around full circle."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "The Runaway Hug"
        ]
      },
      "is a loving and joyful story, but it is the illustrations that really set it apart. Mommy is drawn in her undies and a t-shirt. Daddy watches television in a toy-strewn living room. The twins have a room with dirty shirts on the floors, and the toddler has gotten into the refrigerator to make a delicious mess of peanut butter, bananas, and a bottle of ketchup. The final family image is also comfortable and real; it shows the parents sitting on the couch, nursing their toddler."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The realistic images of family life will be appreciated by families who are less-then-perfect. From the evening chores to the squabbling children to the kitchen floor mess and rambunctious dog, the story and illustrations are easy to connect with and return to again and again."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Highly recommended for children ages 2-8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
