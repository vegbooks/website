import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/05/fairly-fairy-tales-cover.jpg",
    "alt": "Fairly Fairy Tales",
    "href": "/media/2011/05/fairly-fairy-tales-cover.jpg",
    "width": 210,
    "height": 277,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "We’re going to have a hard time returning this book to the library. After having the book read to her once, kiddo was able to read it by herself, and she’s gotten in the habit over the past few weeks of reading it to me every morning before school as I pack her lunch."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I love the premise of the book — which takes familiar fairy tales and challenges the way they end — and the execution is spot-on perfect. Not only are the simple words easily accessible to beginning readers (well, at least after you explain what “solar panels” and “disco balls” are), but the illustrations are bright, cheerful, and funny."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Eco-minded parents will like that Esmé Raji Codell and Elisa Chavarri gave the Three Little Pigs a green twist — with the aforementioned solar panels on the brick house, an organic community garden, a benefit concert, and a leafleting/ activist wolf. And while there are meatballs in one of the illustrations, which depicts a restaurant run by the giant in Jack and the Beanstalk, they could easily be ",
      {
        "type": "link",
        "href": "http://veganproductguide.com/Default.aspx?VpgProductId=e435914a-e341-4580-aa0b-c53c106e1820",
        "external": true,
        "children": [
          "Gardein"
        ]
      },
      ". (In fact, I hope they are, since the cow is seated at the table.)"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This fantastic book is perfect for kids ages 4-8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
