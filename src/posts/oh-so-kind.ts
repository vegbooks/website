import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2021/03/oh-so-kind.jpg",
    "alt": "Oh So Kind!",
    "href": "/media/2021/03/oh-so-kind.jpg",
    "width": 300,
    "height": 300,
    "align": "left"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "https://www.indiebound.org/book/9781338356359",
        "external": true,
        "children": [
          {
            "type": "strong",
            "children": [
              "OH SO KIND!"
            ]
          }
        ]
      },
      " is author Joy Cho’s third book in a series of “Oh Joy!” board books for babies and toddler-age children. It follows an unnamed llama, who uses a wheelchair, throughout their day. The little llama’s friends are kind, and everyone helps each other as apples spill from a shopping basket, a little sister falls down and cries, and their mother returns from a business trip. Everyday kindnesses are performed and saying “thank you” when they are received is demonstrated, as is reaching out when someone is having a tough time."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The art by Angie Stalker shows a variety of brightly colored and happy animals going about their days. The illustrations are simple but expressive, and children will delight in the bird’s joyful feathers and discovering faces on doorways or counting different details like hearts and balloons."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This board book has the added aspect of also being a flip-book. The pages and flaps are sturdy, but the flaps may be difficult for little fingers to open at first or even notice if they are looking at the book on their own. However, the simplicity and positivity in the book will ensure that the first time reading ",
      {
        "type": "link",
        "href": "https://www.indiebound.org/book/9781338356359",
        "external": true,
        "children": [
          {
            "type": "strong",
            "children": [
              "OH SO KIND!"
            ]
          }
        ]
      },
      "won’t be the last."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
