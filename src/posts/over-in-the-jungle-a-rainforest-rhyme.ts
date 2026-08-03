import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/08/jungle-cover-3inch.jpg",
    "alt": "Over in the Jungle: A Rainforest Rhyme",
    "href": "/media/2012/08/jungle-cover-3inch.jpg",
    "width": 210,
    "height": 189,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I am turning into Vegbooks’ resident reviewer for Dawn Publishing but so far I honestly can’t help loving all their offerings I’ve read. ",
      {
        "type": "emphasis",
        "children": [
          "Over in the Jungle: A Rainforest Rhyme"
        ]
      },
      ", is no exception. It follows the theme of another book I reviewed, ",
      {
        "type": "link",
        "href": "/reviews/over-in-the-forest/",
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Over in the Forest"
            ]
          }
        ]
      },
      ", but so much thought goes into matching the right illustrations with the right theme that both books are equally enjoyable. I had the opportunity to review an ebook version of ",
      {
        "type": "emphasis",
        "children": [
          "Over in the Jungle"
        ]
      },
      " and the vibrant polymer clay illustrations just popped off the screen. I imagine they look just as great in print. Jeanette Canyon manages to make the animals depicted look like joyful families on every page and my daughter was ooh-ing and ahh-ing at the bright blue morpho butterflies and the smiling boa family."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "You can listen to the whole book being sung or read (for free) ",
      {
        "type": "link",
        "href": "http://www.dawnpub.com/our-authorsillustrators/marianne-berkes/",
        "external": true,
        "children": [
          "here"
        ]
      },
      " on the publisher’s website: which is a great value-added feature in addition to the pages at the end of the book with facts and written music to help sing and count along with our rainforest friends."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Highly recommended for all ages, my children asked to read it again and again."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
