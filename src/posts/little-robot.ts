import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "paragraph",
    "children": [
      "When I received a ",
      {
        "type": "link",
        "href": "http://us.macmillan.com/books/9781626720800",
        "external": true,
        "children": [
          "publisher’s"
        ]
      },
      " review copy of Ben Hatke’s hardcover graphic novel ",
      {
        "type": "emphasis",
        "children": [
          "Little Robot"
        ]
      },
      ", it was first on the list to read that night at bedtime with my almost 5- and 7-year-olds. The artwork is beautiful, much like Hatke’s last book, ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "/reviews/julia/",
            "children": [
              "Julia’s House for Lost Creatures"
            ]
          },
          ","
        ]
      },
      " but the style of storytelling is more reminiscent of Andy Runton’s ",
      {
        "type": "link",
        "href": "/reviews/the-owly-books/",
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Owly"
            ]
          },
          " series"
        ]
      },
      " because the words are sparse and the pictures tell the story."
    ]
  },
  {
    "type": "image",
    "src": "/media/2015/09/9781626720800.jpg",
    "alt": "9781626720800",
    "width": 484,
    "height": 573,
    "align": "center"
  },
  {
    "type": "paragraph",
    "children": [
      "Having a boy and a girl in the home makes me rejoice when books aren’t specifically gendered — the emotions are universal and a little girl befriending a lost robot resonated with both my kids. Enough is left to their imagination as well — the protagonist is nameless but she waits until other kids have gone to school (is she skipping school? is she too young to attend school? – the reader is left to decide) before having her adventures. One day she opens a box containing a lost robot (Unit 00012), while she is learning to interact with the robot a much larger robot comes to recover the missing unit. A kitty cat does get “eaten” by the larger robot but it is just how he picks up his quarry and the cat is rescued unharmed later on."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "One moment in the story that gives pause is when the little girl locks Unit 00012 up so she can try to make him some friends. Even if her intent is good, she has deprived her friend of his own choice to go away in search of those like him so we were able to discuss as we read whether or not it was a kind choice to make. Even the large recovery robot is ultimately turned to a good path and friendship prevails."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Highly recommended for ages 2 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
