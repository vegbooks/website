import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/04/one-nighttime-sea.jpg",
    "alt": "One Nighttime Sea",
    "href": "/media/2011/04/one-nighttime-sea.jpg",
    "width": 210,
    "height": 255,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "What a wonderful book, packed with so much!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.thereviewzone.com/books/onenighttimesea.html",
            "external": true,
            "children": [
              "One Nighttime Sea"
            ]
          }
        ]
      },
      " is a book about discovering the many creatures who lurk in the sea at night—while we sleep (which makes it a perfect bedtime story). As we count up from one to 10 and back down again, we learn that there is a whole lively world that exists under the sea, from one blue whale calf who swims close to her mother to 10 turtle hatchlings who plunge into the surf. We see creatures whom many of us are quite familiar with, including beluga whales, otters, and lobsters, but we are also introduced to many other unknown creatures, including basket stars, nudibranchs, and coral polyps. Through the night, they dance, sing, play, swim, eat, lay eggs, rock on the tide, and engage in many more behaviors that kids will find fascinating—and regular at the same time. The ending is sweet; as night fades and morning enters, we are left with one brand-new seal pup discovering the day."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "In a world filled with so many books about whales and other popular sea animals that it’s nice to have one in the mix who also highlights the not as popular or well-known ones. This book does a great job of introducing us to some of those interesting characters."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Kids will have fun counting the creatures on each page; the collage-like pictures are large and colorful and lend themselves well to counting. The book also includes an appendix explaining each creature in a detailed paragraph."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This is an enjoyable book that incorporates many educational aspects; it’s a book that teaches counting and rhymes and also gives us a new respect for the creatures who live in the sea, many of whom we had no idea even existed! It reminds us that there is a whole world out there, hidden in the sea."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 2-6."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
