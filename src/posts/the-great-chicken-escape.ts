import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/02/nikki-chicken-pict1.gif",
    "alt": "The Great Chicken Escape",
    "href": "/media/2010/02/nikki-chicken-pict1.gif",
    "width": 222,
    "height": 109,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "My love for Nikki McClure’s work is ",
      {
        "type": "link",
        "href": "/reviews/all-in-a-day/",
        "children": [
          "no secret"
        ]
      },
      ", and I was thrilled to read this small volume. There are no words to the story of ",
      {
        "type": "link",
        "href": "http://www.buyolympia.com/q/Item=NIKKI_CHICKEN",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "The Great Chicken Escape"
            ]
          }
        ]
      },
      ", only Ms. McClure’s expressive, charming papercut illustrations which treat us to a day of fun from the perspective of some chickens."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "When their nun caretaker comes in to collect eggs, she forgets to close the door behind her and the chickens make a break for it. Some are quickly recaptured but the fleeter of claw have themselves an adventure in a stream, amidst the beauty of a northwest forest and…the beach? Yes, the chickens make their way through the forest path to the beach and have a lovely time as they explore starfish, shells and seaweed, meeting up with shorebirds and an eagle. As the day wanes, they head home, with one girl in particular amusing us as she carries back a souvenir of her day, trailing it behind her all the way to the coop—a piece of seaweed."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The author’s note at the end explains that the book is based on a true- as near as she can tell- story based on events she witnessed while on a retreat at a monastic community in Alaska. She goes on to briefly describe the rhythm of the community’s day through the seasons and it dovetails in a very sweet way with the story she has just told through her illustrations. I really appreciate that she wove a beautiful tale out of observing a potentially nondescript event (this is a reason I am so taken with her ",
      {
        "type": "link",
        "href": "http://www.buyolympia.com/q/Artist=Nikki%20McClure",
        "external": true,
        "children": [
          "work"
        ]
      },
      " in general). Veg parents will take note that the hen’s eggs are collected, there are depictions of the community members using livestock and Ms. McClure’s description of community life includes catching and canning salmon for the winter. This book is perfect for any age of chicken friend or spirited adventurer."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "https://vegbooks.org/index.php/contributors/"
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
