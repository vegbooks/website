import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "alt": "First Dog Fala",
    "href": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "width": 210,
    "height": 139,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "In one sense, ",
      {
        "type": "link",
        "href": "http://www.powells.com/biblio/1-9781561454112-2",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "First Dog Fala"
            ]
          }
        ]
      },
      " is the ordinary story of the loving relationship between a dog and a human. However, the human in the story is President Franklin Roosevelt, who, at the time this book takes place, was facing extraordinary situations: re-election for an unprecedented third term, war in Japan and Europe and declining health. Throughout the story, the Scottie brings the president joy and moments of light and laughter, and the book does not shy away from mentioning that these were moments President Roosevelt sorely needed. Fala was clearly a small dog with a big of personality and the book describes him riding on President Roosevelt’s lap as he was wheeled throught the White House, escaping from the grounds and having a birthday party. My son and I had a laugh when the book described Fala taking the train with President Roosevelt– the Secret Service had to walk him at different stations, thereby giving obvious signals about the president’s location."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book not only illustrates the meaningful friendship between a man and his dog (Fala is buried with President Roosevelt) but also provides a concise history lesson about important events of our collective past. Because of the complexities of some of the situations described, such as discussions about World War II and President Roosevelt’s decline and eventual death, this book may be better suited for older children. More ",
      {
        "type": "link",
        "href": "http://www.humanesocietyyouth.org/awards/2009_book_award.asp",
        "external": true,
        "children": [
          "here"
        ]
      },
      " and ",
      {
        "type": "link",
        "href": "http://articles.sfgate.com/2008-08-31/books/17125079_1_scottish-terrier-first-dog-fala-secret-service-detail",
        "external": true,
        "children": [
          "here"
        ]
      },
      "."
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
