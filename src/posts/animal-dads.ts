import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/06/0395836212-lres.jpg",
    "alt": "Animal Dads",
    "href": "/media/2011/06/0395836212-lres.jpg",
    "width": 210,
    "height": 205,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Beginning with the words, “Dads do many things,” this ",
      {
        "type": "link",
        "href": "http://www.nytimes.com/books/97/09/14/reviews/970914.14childrt.html",
        "external": true,
        "children": [
          "charming book"
        ]
      },
      " by Sneed B. Collard III and Steve Jenkins draws parallels between the dads of other species and human dads. The use of the first person plural is inclusive, and invites readers to reflect on all the ways that dads make the world a better place."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Short snippets of natural history follow each general statement about dads, giving kids and adults alike a glimpse into the lives of other species, including sicklebacks, emperor penguins, and prairie voles."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "While most of the acts described in the book show paternal devotion — such as keeping us snug and warm, bathing us, and sheltering us from harm — the book also acknowledges that not all fathers in the animal kingdom stick around, explaining in one instance, “After gopher tortoise dads mate with gopher tortoise moms, the dads go their own way.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Complete with gorgeous illustrations, this book is perfect for Father’s Day, or any day of the year."
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
