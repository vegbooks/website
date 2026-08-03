import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "paragraph",
    "children": [
      "Published in 1941, ",
      {
        "type": "link",
        "href": "http://www.nytimes.com/2003/07/01/arts/robert-mccloskey-88-of-make-way-for-ducklings-is-dead.html",
        "external": true,
        "children": [
          "Robert McCloskey"
        ]
      },
      "‘s well-known picture book conveys respect for animals and kindness toward them. Mr. and Mrs. Mallard set up their home in Boston, carefully selecting a safe location, building their nest, and hatching eight ducklings. When they agree to meet in the pond in the ",
      {
        "type": "link",
        "href": "http://www.schon.com/public/ducklings-boston.php",
        "external": true,
        "children": [
          "Public Garden"
        ]
      },
      ", Mrs. Mallard must navigate the way from the Charles River to the park with her eight little ones."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The challenge of Mrs. Mallard’s route is navigating the busy street with the ducklings in tow. Happily, a police officer named Michael comes to her rescue, stopping traffic at one intersection and eventually phoning three other officers to assist with getting the ducks safely across Beacon Street."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "As someone who is mindful of ",
      {
        "type": "link",
        "href": "http://www.hsus.org/press_and_publications/press_releases/give_wildlife_a_brake_102709.html",
        "children": [
          "wildlife along my route"
        ]
      },
      " (going so far as to carry turtles across the street when I see them), I love the message this book conveys. Pair that with Mr. McCloskey’s attention to detail and gentle prose, and the result is a timeless book that I expect my child is likely to read to her own someday."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 3-8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
