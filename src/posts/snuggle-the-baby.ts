import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2014/08/9781419711244.jpg",
    "alt": "Snuggle the Baby board book cover",
    "href": "/reviews/snuggle-the-baby/",
    "width": 210,
    "height": 341,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I love Sara Gillingham’s illustrations, so it was with high expectations that I checked out this interactive board book. Designed for toddlers and preschoolers, the book incorporates flaps and pop-outs that allow the reader to feed, tickle, diaper, swaddle, shush, rock, and tuck in the baby. Although most of the pages are self-explanatory, I have to admit that I did not realize at first that the baby to tuck in on the final page is intended to be popped out from a previous page. (I thought it was missing at first!)"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "As always, the illustrations are adorable, and a wide array of babies are depicted, making this book a good fit for multicultural and multiethnic families, along with everyone else. However, like ",
      {
        "type": "link",
        "href": "https://www.kirkusreviews.com/book-reviews/sara-gillingham/snuggle-the-baby/",
        "external": true,
        "children": [
          "other reviewers"
        ]
      },
      ", I have reservations about the design of the book, which is perhaps too flimsy for small children."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Additionally, I was upset to see that nursing was not included on the feeding page, which offered bottle and spoon as two alternatives. Obviously, this isn’t an option for older siblings helping out with a new arrival, but still, I think it’s important to recognize the importance of nursing, particularly given how often our culture ostracizes and alienates nursing mothers. (And it’s National Breastfeeding Month, so it’s a good time to talk about breastfeeding in children’s literature!)"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Still, if you’re preparing your child for a new sibling, this book is worth checking out. Ages 2 to 4."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "The publisher sent a copy of this book for review."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
