import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2009/11/berenstains-a-book1.jpg",
    "alt": "Berenstains’ A Book",
    "href": "/media/2009/11/berenstains-a-book1.jpg",
    "width": 144,
    "height": 178,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "http://www.berenstainbears.com/",
        "children": [
          "Stan and Jan Berenstain’s"
        ]
      },
      " silly book introduces readers to words that begin with A by following a trail of ants “across an apple and an acorn, across an apricot, an ax, and an angleworm” … all the way to an anteater and an anthill. The anteater is busy tying on a napkin and preparing for a tasty treat, when CHOMP! — the ants take a bite on her tail, causing her to make a hasty retreat and leave their friends in peace."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Kids might need to be told that what appears to be physical violence — biting — only causes the anteater momentary discomfort because the ants are so small. But they will certainly understand that animals don’t want to be eaten."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4-7."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
