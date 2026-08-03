import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/11/9780763655983.jpg",
    "alt": "I Want My Hat Back",
    "href": "/media/2011/11/9780763655983.jpg",
    "width": 210,
    "height": 292,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I am so torn about this book! The artwork is spot on and just fits (you can see it in ",
      {
        "type": "link",
        "href": "http://www.youtube.com/watch?v=TYYQW_uCdzM",
        "external": true,
        "children": [
          "the book’s trailer"
        ]
      },
      "). The dialogue follows a trend I first noticed and liked in the Elephant and Piggie books where a font color denotes who is speaking. I was so excited when we got this on our reserve shelf at the library that I read it to my daughter without pre-reading it as it is from a great publisher, ",
      {
        "type": "link",
        "href": "http://www.candlewick.com/",
        "external": true,
        "children": [
          "Candlewick Press"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "A bear is looking for his hat and asks various animals if they have seen it, even helping one of them. Finally, upon describing his hat to one of the animals he realizes that he has already seen it, on someone else’s head. In fact, he has already asked this someone (a rabbit) if he has seen his hat and the rabbit replied that he hasn’t seen or stolen a hat. The bear runs back, past the other animals in a great spread, to where he spotted his hat and stares at him. Next, this is the “twist” of the book, so read no further if you don’t want to spoil it, you see the bear with his hat on his head being asked if he has seen a rabbit wearing a hat. He guiltily responds, much like the rabbit did earlier, with a hurried series of sentences to indicate that he hasn’t seen the rabbit or eaten him when, in fact, he has."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "No doubt the book is clever and well done. It is billed for ages 4 and up, while my daughter is a little bit over 3, but I couldn’t shake the feeling that I just didn’t like where the story went, that it shouldn’t be seen as having a “mischievous twist” when it is pretty violent to really consider that the rabbit was eaten in retribution. Granted, many fairy tales follow similar paths but I get the feeling this is a book that is for an older crowd and there are more uplifting choices for veg families."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
