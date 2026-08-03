import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/08/lucky-lobsters.jpg",
    "alt": "The Lucky Lobsters",
    "href": "/media/2011/08/lucky-lobsters.jpg",
    "width": 210,
    "height": 263,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Life isn’t so lucky for most lobsters. Snatched from their habitats, they are kept in crowded tanks until they’re bought and boiled alive. Given new evidence that despite their simple nervous systems, lobsters may ",
      {
        "type": "link",
        "href": "http://dsc.discovery.com/news/2009/03/27/crab-lobster-pain.html",
        "external": true,
        "children": [
          "feel pain"
        ]
      },
      " and I think you’d be hard pressed to find any human who’d be willing to trade their lot for the life of a lobster."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Into this sad state of affairs, enter Gary Dorion’s children’s book, ",
      {
        "type": "emphasis",
        "children": [
          "The Lucky Lobsters."
        ]
      },
      "Written after he ",
      {
        "type": "link",
        "href": "http://gary-dorion.blogspot.com/2011/08/no-exit-lucky-lobsters-why-i-wrote-this.html",
        "external": true,
        "children": [
          "liberated some crustaceans"
        ]
      },
      " from traps in the Atlantic Ocean, this book looks at life from the lobster’s point of view. The characters in Dorion’s story face the same unenviable fate as so many of their kin, but instead of being boiled alive, they find themselves returned home. Talk about lucky."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The storybook lobsters are not freed from their traps underwater, like the lobsters Dorion encountered while diving. Instead, he chose for their freedom to be purchased. As a vegan, I would never buy lobsters from a store in order to free them, because I wouldn’t want my purchase to support lobster-fishing and -selling — but I understand Dorion’s choice. First, I think this approach may be more palatable to some parents, who want to present bright-line rules about stealing to their children. Second, this decision allows the reader to experience what a store lobster tank must be like from a lobster’s perspective. I, for one, had never considered that in addition to crowding, the lobsters may face hunger, since there is no food in the tank."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/1412046610/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=217145&creative=399373&creativeASIN=1412046610",
        "external": true,
        "children": [
          "This book"
        ]
      },
      " is a great choice for vegetarian and vegan children ages 5-8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
