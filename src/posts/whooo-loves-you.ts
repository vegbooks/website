import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/08/whooo-loves-you.jpg",
    "alt": "Whooo Loves You?",
    "href": "/media/2011/08/whooo-loves-you.jpg",
    "width": 210,
    "height": 210,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I read this lift a flap board book (a review copy from the publisher) to both my 1 year old and my 3 year old. My 1 year old was interested in pulling at the flaps which, sadly, are a structural weak point in a book with otherwise sturdy pages (which is the case with most lift-the-flap books in the hands of babies, I’ve found). My 3 year old loved the word play and had me read it several times to her before “reading” it to her brother by herself."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Each two page spread features animals making varied statements of love. The birds sing about “tweethearts,” a cow says “I moo you,” an owl says “owl always love you,” and puppies say “we ruff you.” At the end of the book the reader says “I love you, I love you” to a child. The artwork is bright and, in what I presume is the artist’s signature style (we already own another book of hers, ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.goodreads.com/book/show/5870188-peek-a-boo-i-love-you",
            "children": [
              "Peek-a-Boo, I Love You!"
            ]
          }
        ]
      },
      "), the animals are all depicted with hidden hearts (for example, the cow’s spots are heart-shaped)."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "A cheerful read aloud for ages as old as 3."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
