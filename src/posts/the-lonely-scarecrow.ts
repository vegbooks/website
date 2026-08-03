import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "paragraph",
    "children": [
      "All that the scarecrow in ",
      {
        "type": "link",
        "href": "http://www.librarything.com/work/911629",
        "external": true,
        "children": [
          "Tim Preston and Maggie Kneen’s picture book"
        ]
      },
      " wants is for the animals to like him. If only he weren’t so, well, scary."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This simple story follows the progression of the seasons with stunning illustrations of foxes, badgers, ducks, mice, and even a snail. The wheat grows, the animals scurry away from the passing of the combine, and the leaves fall from the trees. Eventually, a heavy snow falls, transforming the ugly scarecrow into a jolly snowman. At last, the animals come near to be with him! And when the snow melts away, they remain his friends."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The messages in this book are many: the importance of patience, the changes brought by the passage of time, the kinship of all animals."
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
