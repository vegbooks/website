import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Apples, Bean Dip, & Carrot Cake"
        ]
      },
      " is more than a collection of recipes. It is a thoughtful cookbook aimed at helping children of nearly any level become comfortable in the kitchen by learning to make healthy snacks and meals, skills which will help them make healthy cooking and eating choices throughout their lives. The book (",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/0942401220/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=0942401220&linkCode=as2&tag=vegbooks-20&linkId=FJ4W2LW6H6HUHYAI",
        "external": true,
        "children": [
          "Amazon affiliate link"
        ]
      },
      ") is divided into four levels, and each level adds new skills and introduces different tools or appliances (such as blenders, knives, the stove and oven). Level One, appropriate for very young children, has extremely basic preparations. Levels Three and Four support kids who have the maturity, dexterity and knowledge to bake, slice, blend and use the stovetop."
    ]
  },
  {
    "type": "image",
    "src": "/media/2015/01/abc-front-cover-somewhat-compressed.jpg",
    "alt": "Apples-Bean-Dip",
    "width": 464,
    "height": 605,
    "align": "center"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "lineBreak"
      },
      " This book is also abundantly full of pictures, which are all put to great use. The explanatory sections use photos to identify and illustrate, and the recipes show children of all ages modeling what the steps of the recipe. All recipes are simple and straightforward. They are all vegan and the ones we tried were tasty. If a child would like to cook through from beginning to end, there are certificates provided in the back of the book to be awarded upon completion of each level."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This is a welcome book and has been readily embraced by my own child, who really enjoys seeing the photos of children making different dishes, buttressing his own feelings of competency in the kitchen. Despite the fact that this book is distractingly printed cover to cover in ",
      {
        "type": "link",
        "href": "http://mashable.com/2012/10/03/comic-sans-history/",
        "external": true,
        "children": [
          "Comic Sans MS font"
        ]
      },
      ", I highly recommend ",
      {
        "type": "emphasis",
        "children": [
          "Apples, Bean Dip, & Carrot Cake"
        ]
      },
      " for families with kids from 2 to 14. You may not make every recipe, but your children will enjoy seeing other kids cooking vegan food — and learning to cooking for your family and their own needs."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "I received a copy of this book from the ",
          {
            "type": "link",
            "href": "http://www.americanvegan.org/",
            "external": true,
            "children": [
              "American Vegan Society"
            ]
          },
          " to review."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
