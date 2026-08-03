import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "paragraph",
    "children": [
      "I’ve heard people cite ",
      {
        "type": "emphasis",
        "children": [
          "The Giving Tree"
        ]
      },
      " by ",
      {
        "type": "link",
        "href": "http://www.shelsilverstein.com/indexSite.html",
        "external": true,
        "children": [
          "Shel Silverstein"
        ]
      },
      " as an example of ",
      {
        "type": "link",
        "href": "http://teachers.net/archive/envirobks.html",
        "external": true,
        "children": [
          "environmental children’s literature"
        ]
      },
      ", but I’m not so sure. Of course, the boy’s connection with the tree, at least at the beginning of the book, is beautiful — but why oh why does she keep taking him back, regardless of how he abuses her?? (I can’t help but think of the kicked dog who returns to her master with her tail wagging between her legs.)"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I’ll admit this book does have one good message: Nature is not infinite. Even so, that just doesn’t save this book in my eyes."
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
