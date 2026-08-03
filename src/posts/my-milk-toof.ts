import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/11/9780811878135.jpg",
    "alt": "My Milk Toof",
    "href": "/media/2011/11/9780811878135.jpg",
    "width": 210,
    "height": 158,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Inhae Lee’s children’s book was my introduction to her ",
      {
        "type": "link",
        "href": "http://mymilktoof.blogspot.com/",
        "external": true,
        "children": [
          "delightfully funny photo essays"
        ]
      },
      " about two milk “teef” named Ickle and Lardee. Lest you’re concerned the term “milk teef” refers to cow’s milk, Lee explains in the introduction to the book that milk teeth are merely baby teeth that fall out and are replaced by permanent teeth. When she was told that the Tooth Fairy took her teeth, she wondered where they went and whether she’d ever see them again."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Delve into her book and you’ll discover that she does in fact see them again. They take up residence in her home and go on adventures!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Lee’s style is photo essay-meets-comic book, and the way she stages her scenes is reminiscent of Nathalie VanBalen’s ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "/reviews/garlic-onion-beet-spinach-mango-carrot-grapefruit-juice/",
            "children": [
              "Garlic- Onion- Beet- Spinach- Mango- Carrot- Grapefruit Juice"
            ]
          }
        ]
      },
      ". For that reason alone, I’d love this book. Add to that the little milk teef are just so sweet — in fact, one has a ",
      {
        "type": "emphasis",
        "children": [
          "nightmare"
        ]
      },
      " she (he?) is being naughty — and this book is a gem."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Vegetarian and vegan families should be warned that while none of the plot deals with meat or dairy, those foods are depicted in the book. My kiddo didn’t notice, seeing only a carton of milk (we drink soy) and a plate of leftover food. And if you’re worried the book will lead your kid to eat meat, don’t, the depiction isn’t too appetizing — in fact, the milk teef commit themselves to an exercise regime after what I can only assume was a Thanksgiving feast. (Is that a dead turkey on the plate? I don’t know. It might be a dead chicken. Doesn’t matter, it looks gross.)"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Leaving aside the glimpses of animal products, I think this imaginative and humorous book will delight most kids and parents."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4-8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
