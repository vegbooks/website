import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/06/manfish.jpg",
    "alt": "Manfish: A Story of Jacques Cousteau",
    "href": "/media/2011/06/manfish.jpg",
    "width": 210,
    "height": 202,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "June 21st ushered in summer, and nothing is more analogous to this season than spending time at the ocean. While kids explore tide pools and swim in the sandy-bottomed waters, they may start to wonder what lies beyond. ",
      {
        "type": "link",
        "href": "http://www.jenniferberne.com/",
        "external": true,
        "children": [
          "Jennifer Berne’s"
        ]
      },
      " biography on Jacques Cousteau, ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.chroniclebooks.com/index/main,book-info/store,books/products_id,7183/",
            "external": true,
            "children": [
              "Manfish"
            ]
          }
        ]
      },
      ", is a great seaside read to jumpstart the summertime mood, get the imagination flowing and set dreams about future careers in motion."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "From the start, readers will feel like they’re walking in Cousteau’s shoes – or rather swimming with his flippers – as Berne’s words wash over them and illustrator Eric Puybaret’s other-worldly artwork transports them to new watery depths. Like any good biography written for youth, a good deal is spent on Cousteau’s youth: drawing and tinkering, his developing interest in film, dreams about breathing underwater (he would go on to invent the first version of scuba gear, the aqualung), etc. As his career develops in the Navy, Cousteau learns to fashion wet suits, a waterproof box for his camera and other inventions which help him become a manfish, capable of exploring the ocean like his scaly, finned counterparts."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Kids will get a kick out of a three-page spread that requires the unfolding of a page and turning the book 90 degrees in order to view Cousteau and his friends as they dive deeper and deeper on one of their explorations and meet fascinating new creatures. The story wraps up with a polluted ocean floor scene, and Jacques’ dream that,"
    ]
  },
  {
    "type": "quote",
    "children": [
      {
        "type": "paragraph",
        "children": [
          "someday it would be you, exploring worlds never seen, never imagined. Whole new worlds, silent and shimmering. Worlds that are now yours. To discover. To care for. And to love."
        ]
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "As a resource, Berne provides a short list of ideas on how to bring more Cousteau into a child’s life at the end of the text. Overall, this is a great, kid-friendly overview of this famed oceanographer for a new generation."
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
