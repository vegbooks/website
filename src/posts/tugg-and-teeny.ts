import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/05/9781585366859.jpg",
    "alt": "Tugg and Teeny",
    "href": "/media/2012/05/9781585366859.jpg",
    "width": 210,
    "height": 319,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "After falling in love with J. Patrick Lewis’ ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "/reviews/swan-song/",
            "children": [
              "Swan Song"
            ]
          }
        ]
      },
      ", I was certain I would like his early reader ",
      {
        "type": "emphasis",
        "children": [
          "Tugg and Teeny"
        ]
      },
      ", published last year. It’s a sweet, short book of 1,100 words that focuses on the friendship between Tugg, a gorilla, and Teeny, a monkey."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Entitled “The Strange Stick,” “What’s in a Picture?” and “Teeny’s Poem,” each of the chapters in this book focuses on the primates’ first attempts to create art (music, painting, and poetry). It’s obvious that J. Patrick Lewis, the U.S. Children’s Poet Laureate, knows something about the creative process. When Teeny learns how to play a flute, we read:"
    ]
  },
  {
    "type": "quote",
    "children": [
      {
        "type": "paragraph",
        "children": [
          "At first, she could only squeak. But as the weeks passed, her squeaks turned into peeps, and the peeps turned into tweets and toodles."
        ]
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Each of the chapters demonstrates that mastery requires diligence and focus. But paired with the vivid portrayal of friendship between the animals, the use of humor, and the delightful illustrations by Christopher Denise, the effect is far from didactic. I particularly liked the friendship between Tugg and Teeny, which is respectful and loving, and the clear portrayal of a gorilla and a monkey — which is no small feat in a culture that celebrates its ignorance of our closest primate cousins (by, for example, calling Curious George a “monkey” when he’s clearly a chimpanzee)."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book is ideal for kids ages 7 to 9. Be sure to check out an introduction and activity for each chapter on the ",
      {
        "type": "link",
        "href": "http://www.tuggandteeny.com/tt/tugg-teeny/book-one/",
        "external": true,
        "children": [
          "publisher’s website"
        ]
      },
      "."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
