import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/09/bb-new-kitten.jpg",
    "alt": "The Berenstain Bears’ New Kitten",
    "href": "/media/2010/09/bb-new-kitten.jpg",
    "width": 210,
    "height": 316,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "In ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.powells.com/biblio?isbn=9780060583576",
            "external": true,
            "children": [
              "The Berenstain Bears’ New Kitten"
            ]
          }
        ]
      },
      ", the popular ",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/Berenstain_Bears",
        "external": true,
        "children": [
          "series"
        ]
      },
      " tackles the subject of stray animals. When Brother finds a kitten in a pond and brings her home, the whole family becomes involved in cleaning and comforting the animal. The Bear family elects to keep the kitten, but not before they take the feelings of Little Lady, the family dog, into account. Most of the story revolves around the decision-making process."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "There are a few small things that vigilant animal activists will quibble with in this book, such as the fact that Brother is “hunting” frogs, the methodology by which Little Lady is temper tested around the kitten and that the kitten is introduced to the dog prior to her visit to the vet. One of the most glaring omissions in terms of how to ",
      {
        "type": "link",
        "href": "http://www.aspca.org/adoption/10-ways-to-help-stray-cats.html",
        "external": true,
        "children": [
          "handle finding a stray kitten"
        ]
      },
      " is that the Bear family does not contact the local shelter to inquire about whether anyone is looking for a lost kitten."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Despite the above issues, there are many reasons to recommend this book. One reason is that the schoolyard bully is depicted as being very worried about the kitten and gives Brother the hat off of his head to use as a temporary kitten carrier– another reminder that animal lovers are a diverse lot and that we may find common ground when we least expect to. I also liked the Bear parents’ calm handling of Brother’s arrival with the kitten. I appreciated that the book shows Papa and Mama being open to adopting the stray and bringing the kitten to the vet as soon as possible. The ending also models a very important message: the vet encourages the Bear siblings to give Little Lady extra love and affection during the transition period as the family welcomes Gracie, the grey kitten, into their lives."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This feel-good book is a nice story for kitty lovers ages 4 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
