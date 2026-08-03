import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2013/12/vfaz-cover.jpg",
    "alt": "View from a Zoo",
    "href": "/reviews/view/",
    "width": 210,
    "height": 266,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I received this book as a review copy from ",
      {
        "type": "link",
        "href": "http://viewfromazoo.wordpress.com/",
        "external": true,
        "children": [
          "the author"
        ]
      },
      ". It is the story of a house cat that has a nice cushy life in a warm, comfy house. But she gets bored staring out the window at the world – she wants to experience the world. After sneaking out of the house and roaming the streets, she finds her way to the zoo. A lion trapped in a cage shares with her his secret to enduring the boredom. It is a nice educational and inspirational twist that I won’t spoil should you decide to read the book (",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/1931308004/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=1931308004&linkCode=as2&tag=vegbooks-20",
        "external": true,
        "children": [
          "Amazon affiliate link"
        ]
      },
      ")."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The lion in the zoo is quite content. He mentions that he is bored and he has a trick to get past the boredom that actual lions in real zoos do not. This is a good conversation starter for what it must be like to be a lion in a zoo with nowhere to go and nothing new to experience. Just the same small cage day in and day out. It may also start a conversation about how bored house cats must be as well, which might be a more difficult conversation if you have an indoor house cat."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 3-8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
