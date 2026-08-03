import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/05/9781404867857.jpg",
    "alt": "The Ocean Story",
    "href": "/media/2011/05/9781404867857.jpg",
    "width": 210,
    "height": 178,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "How do you write a story about one of the greatest, biggest, and most delicate stories of all time: the ocean? Husband and wife, author John Seven and illustrator Jana Christy, make a mighty effort to relate a reader’s involvement in ",
      {
        "type": "link",
        "href": "http://www.capstonepub.com/product/9781404867857",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "The Ocean Story"
            ]
          }
        ]
      },
      " by briefly and poetically (“Jellyfish look like dreams floating into space…”), mentioning the numerous ways one interacts with saltwater: boating, sea shell-collecting, the water cycle, and the beautiful, dangerous and strange sea creatures that fascinate us."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Seven spends more time explaining some parts of this story (oil spills) than others. In a page with a picture of fish all caught in a net, the accompanying words simply say, “Sometimes the ocean story is filled with wind and waves and fury,” leaving much to the reader to infer and interpret. Another spread shows fossilized remains of a prehistoric creature (my interpretation) with no explanation in the text. But this just leaves more to explore and discuss with each read."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Expressively written and superbly illustrated, this is a timely read for the 1-year anniversary of the Gulf Oil Spill."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4-8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
