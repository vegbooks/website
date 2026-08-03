import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "paragraph",
    "children": [
      "This 1939 classic features everyone’s favorite little red-headed ",
      {
        "type": "emphasis",
        "children": [
          "fille"
        ]
      },
      ", Madeline. We love this book! The French orphans care deeply for Madeline and are understandably distressed when she needs to have her appendix out. But when they visit her at the hospital and see her scar, they’re just like any other kids — they want their appendixes out too."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "There’s not much to criticize in ",
      {
        "type": "link",
        "href": "http://www.madeline.com/author.htm",
        "external": true,
        "children": [
          "Ludwig Bemelmans"
        ]
      },
      "‘s lovely little book, though I will say that his depiction of a zoo seems rather outdated. Regardless, I think that Madeline’s teacher and classmates’ sense of compassion toward her in her time of need still makes this a good book for vegetarian and vegan kids."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4-8. To read another perspective, visit ",
      {
        "type": "link",
        "href": "http://www.commonsensemedia.org/book-reviews/Madeline.html",
        "external": true,
        "children": [
          "Common Sense Media"
        ]
      },
      "."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
