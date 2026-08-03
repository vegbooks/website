import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/12/santa-green.jpg",
    "alt": "When Santa Turned Green",
    "href": "/media/2012/12/santa-green.jpg",
    "width": 214,
    "height": 240,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Polar bears aren’t the only victims of climate change. In real life, we know that species that inhabit mountaintops and islands are imperiled by the shifting tree compositions and rising sea levels. In fiction, that mythical man with his home snuggled in the glaciers of the north also faces the troubles that our overconsumption and pollution have wrought. That’s right, I’m talking about the big guy who delivers packages on Christmas Eve — none other than Santa Claus himself."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "That’s the premise of ",
      {
        "type": "link",
        "href": "http://www.mygreensanta.com/",
        "external": true,
        "children": [
          "this enchanting children’s book"
        ]
      },
      ". When Santa discovers his workshop leaking in December, he voyages to discover what’s causing this catastrophe and what can be done. But he finds out that the problem is bigger than delivering all the world’s gifts by sleigh in a single night — the problem is so big in fact that he must turn to the most powerful people in the world: its children."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The most touching passage of the whole book reveals what all of us at Vegbooks know — what motivates us, in fact, to write these reviews."
    ]
  },
  {
    "type": "quote",
    "children": [
      {
        "type": "paragraph",
        "children": [
          "Santa knows the world’s children better than anybody."
        ]
      },
      {
        "type": "paragraph",
        "children": [
          "How smart they are. And how good they are."
        ]
      },
      {
        "type": "paragraph",
        "children": [
          "(Remember he’s been checking that list a looooooooong time.)"
        ]
      },
      {
        "type": "paragraph",
        "children": [
          "But most of all, he knows that when a child believes … miracles happen."
        ]
      },
      {
        "type": "paragraph",
        "children": [
          "And this time, the world needed a huge miracle."
        ]
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "And so Santa visited the children with a message of the world’s peril, and in return, “the children gave Santa the greatest gift he ever received.” They recycled, turned off lights, planted trees, chose local, ditched disposables for reusables, and composted."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Whimsical illustrations save this book from becoming too preachy or didactic. Kiddo and I love it."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Parents should be aware, however, that the book casually depicts a chicken being eaten, and kids should know that the biggest contribution they can make to prevent further climate change isn’t listed in this book. Instead, it’s to keep on doing what so many of us are teaching them to do: ",
      {
        "type": "link",
        "href": "http://www.guardian.co.uk/environment/2010/jun/02/un-report-meat-free-diet",
        "external": true,
        "children": [
          "choose vegan"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4 to 7."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
