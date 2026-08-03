import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2013/11/book-cover.jpg",
    "alt": "BookCover",
    "href": "/media/2013/11/book-cover.jpg",
    "width": 210,
    "height": 190,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I received this book to review from ",
      {
        "type": "link",
        "href": "http://purplecarrotbooks.com/books/",
        "external": true,
        "children": [
          "the publisher"
        ]
      },
      " and I would have to say that it was received quite timely in our household. Our four-year-old, who once ate anything and everything, has gotten pickier and pickier such that she may only be surviving on tofu at this point. The storyline of ",
      {
        "type": "emphasis",
        "children": [
          "The Prisoner of Carrot Castle"
        ]
      },
      " is an attempt to encourage children to eat their veggies."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "In the story, a boy is trapped in a castle which he comes to realize is made of carrots and broccoli. His only way free is to eat his way out. When the people of the kingdom find out that he has eaten their castle, they are angry and explain that carrots and broccoli are for building, not eating. The townspeople appear sickly and the boy realizes that it’s because they don’t eat their veggies. Right when it seems the boy is doomed, he wakes up and realizes that it is only a day dream he was having during dinner, and that while day dreaming, he had actually eaten his vegetables."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This is an enjoyable book and the illustrations are nice. If the point is to get kids to eat their veggies, I would say it does a decent job, though the point could be delivered a bit stronger. One issue I have with the book is that the people of the town are described as ugly because they don’t eat their vegetables. Ugly is not a word we use to describe people in our house, and I’m not sure that not eating veggies makes a person ugly. More accurately the people could have been described as sickly. Other than this one aspect, I find this a cute and engaging story that would make a good start to a conversation on eating your veggies."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Note that the author has the goal of creating learning entertainment and is developing ",
      {
        "type": "link",
        "href": "http://purplecarrotbooks.com/parents-teachers/",
        "external": true,
        "children": [
          "a curriculum"
        ]
      },
      " to go along with this book for use by schools and homeschoolers."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4+."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
