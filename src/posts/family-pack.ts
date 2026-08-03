import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/02/family-pack.jpg",
    "alt": "Family Pack",
    "href": "/media/2011/02/family-pack.jpg",
    "width": 210,
    "height": 270,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "One of the challenges that children’s authors and animal rights activists alike face is to portray animals as they are — not as humans in costume, but as feeling, sentient, and diverse creatures. In the new book ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.kirkusreviews.com/book-reviews/childrens-books/sandra-markle/family-pack/",
            "external": true,
            "children": [
              "Family Pack"
            ]
          }
        ]
      },
      ", Sandra Markle hits just the right note, describing the reintroduction of wolves to Yellowstone National Park from one wolf’s perspective, without succumbing either to anthropomorphism or to stilted, overly factual writing. The result is a story that is at once personal and authentic."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "In reading this book with my daughter, I was reminded of ",
      {
        "type": "link",
        "href": "http://www.randomhouse.com/features/krakauer/author.html",
        "external": true,
        "children": [
          "John Krakauer’s book ",
          {
            "type": "emphasis",
            "children": [
              "Into the Wild"
            ]
          }
        ]
      },
      ". Like Krakauer, Markle is faced with a daunting challenge of trying to piece together a narrative based on scattered information about an event that really did occur — the reintroduction of wolves to the park and the formation of the Leopold Pack. I think her efforts are successful."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The story will appeal both to children interested in wildlife and parents who followed ",
      {
        "type": "link",
        "href": "http://www.yellowstonenationalpark.com/wolves.htm",
        "external": true,
        "children": [
          "the controversy surrounding the Yellowstone wolves"
        ]
      },
      ". Vegetarian parents should be aware that one of the critical issues in the book is a young female wolf’s attempts to hunt in order to feed herself. My daughter for one is still uncomfortable with the idea of ",
      {
        "type": "emphasis",
        "children": [
          "any animal"
        ]
      },
      " eating another, but this book presents an opportunity to discuss how some animals are obligate carnivores and others, like humans, are not."
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
