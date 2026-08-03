import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "alt": "Christian, the Hugging Lion",
    "href": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "width": 210,
    "height": 139,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "You may have read about ",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/Christian_the_lion",
        "external": true,
        "children": [
          "Christian, a well-known lion"
        ]
      },
      ", or seen ",
      {
        "type": "link",
        "href": "http://www.youtube.com/watch?v=zVNTdWbVBgc",
        "external": true,
        "children": [
          "a video that went viral several years ago featuring him"
        ]
      },
      ". ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.amazon.com/Christian-Hugging-Lion-Justin-Richardson/dp/1416986626",
            "external": true,
            "children": [
              "Christian, the Hugging Lion"
            ]
          }
        ]
      },
      ", by Justin Richardson and Peter Parnell, is another telling about Christian and his caregivers Ace and John."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "At the well-known London department store, Harrods, one day, the two men see a young cub who has come from a zoo. Declaring “[a] store is no place for a lion to live,” they bring him home to…their apartment. Christian is depicted as affectionate and loving and the trio have many adventures in London, from strolling down Kings Road to playing in a churchyard to heading to the local pub. Christian loves hugging the men, and others he encounters as well. As the book notes, being hugged by a lion is not an experience everyone might wish to have."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "As Christian grows, Ace and John decide he would be happier somewhere other than their apartment and decide to introduce him into the wild. They make arrangements with a Mr. Adamson (noted wildlife conservationist ",
      {
        "type": "link",
        "href": "http://www.fatheroflions.org/",
        "external": true,
        "children": [
          "George Adamson"
        ]
      },
      ") to transport Christian to Kenya and release him. Christian is — unsurprisingly — depicted as being very happy as he is released, roaring with joy. The couple returns to London but have a lion-sized hole in their lives. When they arrange for a visit to Kenya, Mr. Adamson warns them that Christian may not recognize them. Instead, Christian comes running to them, giving them hugs."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The author’s note at the end of the book gives further insight into the story. Christian was from zoo stock, therefore he was the first member of his family to live free in many generations. While this book is a nice story in some ways, it misses an opportunity to make serious mention of the many problems with keeping wildlife in captivity. Check out Carolyn’s review of ",
      {
        "type": "link",
        "href": "/reviews/christian-the-lion/",
        "children": [
          "another book about these three"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
