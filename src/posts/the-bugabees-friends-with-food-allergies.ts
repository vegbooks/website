import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/07/apple-and-books.jpg",
    "alt": "The Bugabees: Friends with Food Allergies",
    "href": "/media/2011/07/apple-and-books.jpg",
    "width": 210,
    "height": 252,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "My daughter experiences allergies to all of the top 8 allergens featured in ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.goodreads.com/book/show/6468795-the-bugabees",
            "external": true,
            "children": [
              "The Bugabees: Friends with Food Allergies"
            ]
          }
        ]
      },
      " except for fish and shellfish (a little ironic considering we’ve never had either as a vegetarian family) so I knew I needed to start with a broad book. Is this one that all kids will love? I’m not sure, to be honest. My nearly 3-year-old daughter was engaged and loved the bright and cheerful illustrations, but she was also confused by the message and as a parent I was frustrated at several points. With that hesitant introduction, I can still recommend ",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/1592982794/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=217145&creative=399369&creativeASIN=1592982794",
        "external": true,
        "children": [
          "this book"
        ]
      },
      " to food allergic vegetarian/vegan families."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The story features eight bugabees – ranging from a bee to a cricket to a dragonfly – who have food allergies, and jumps from scenario to scenario (a birthday, a day at the beach, Halloween, etc.) in which one of the eight friends cannot partake in the food being offered. (Parental gripe: friends really wouldn’t eat tree nuts when one of their party was allergic, right?) Then the affected character recites, “It’s really okay, I can still have lots of fun without [allergen] anyway.” Sometimes the book suggests an alternative, but the alternative usually contains another allergen – even in the back of the book where more alternatives are suggested. Considering that almost a third of food allergic children have multiple food allergies this can be viewed as a good teaching moment or a confusing scenario. The introduction of the book does state that every situation is different, a reminder that no book can stand alone when it comes to this area."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "My daughter was particularly confused by the pages that dealt with foods that we sometimes eat at home – made without allergens, of course. She kept saying, for example, that she wasn’t allergic to milk, referring of course to the rice milk she can have, and the book makes no distinction about milk being animal milk. I make wheat, soy, dairy, and corn free pizza for her so she thinks pizza is perfectly safe and the book doesn’t take that into account in the story. We discussed these issues, and she now understands that she is allergic to cow’s milk."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The fish and shellfish pages also confused her a little bit as she didn’t know why the bugs ate fish in the first place. The characters’ reactions to allergens include hives and vomiting which are heavy subjects indeed but the book is realistic in that way though it is weird to read a cheerful rhyme about losing the food in one’s stomach!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Upon repeated readings, the “I can have fun anyway” theme has stuck with my daughter. She asks me if other people are allergic to things and though we had discussed it before this book I think she likes identifying with the characters in the book. A discussion guide is included in the back but is geared to school-age children – still, this is a book parents of all children should read and discuss aloud, versus leaving a child alone to digest."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 3-7."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
