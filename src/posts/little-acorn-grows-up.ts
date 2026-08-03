import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2013/05/acorn.jpg",
    "alt": "Acorn",
    "href": "/media/2013/05/acorn.jpg",
    "width": 210,
    "height": 163,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Young children marvel at the interesting things they find on the ground. An acorn is a particularly curious object to budding scientists. With its beret-like top, smooth exterior, and comforting weight in one’s palm, it holds the promise of a towering oak tree. When you think about it, though, it’s a pretty hefty concept for a child to buy into. A tiny acorn certainly doesn’t look anything like a tree."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "With whimsical, almost cartoonish drawings, Edward Gibbs uses his board book ",
      {
        "type": "emphasis",
        "children": [
          "Little Acorn Grows Up"
        ]
      },
      " to illustrate how a tree actually does perform this feat and how that tree makes life easier for the animals that live around it. The book opens with the line, “A little yellow acorn fell to the ground … and lay there patiently without a sound.” One by one, different creatures ask the acorn what he will be, and each time he promises to turn into “a great big tree.” The acorn also tells each animal a specific way that the tree will prove useful to him or her. The white mouse, for example, is promised a home in the tree’s roots. When the last animal has received his answers and departed, the acorn begins to change. A tiny sprout emerges and a taproot finds its way into the ground. And the reader can see through a series of detailed drawings how that little acorn grows into a majestic oak. On the last page, we see the delighted animals enjoying what was promised to them by the little acorn."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "What’s particularly fun about this story is what the author chooses not to say and instead lets the child discover on her own. As each new animal enters the scene at the beginning, for example, we see the legs or tail of the previous creature leaving the page, providing a comforting sense of continuity. Once the tree has grown, an observant reader will notice many acorns hanging from the branches and lying about on the ground. This quiet detail allows them to connect the dots independently, when they are ready."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Parents of very young children should note the warning on the back cover: “Not suitable for children under 3 years old. Small part.” The small part in question is something that will appeal greatly to babies. On the cover, the two leaves of the sprouted acorn are actually made of felt and are three-dimensional, sticking out from the page invitingly. This will attract curious little fingers. The leaves appear well attached to the book; I pulled on them hard to see if they would come off and they didn’t budge. Nevertheless, you will probably want children under three to have “supervised visits” with the book, in the unlikely case that your book’s leaves become unattached."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 3 to 6."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.hachettebookgroup.com/titles/none/little-acorn-grows-up/9780316127080/",
            "external": true,
            "children": [
              "The publisher"
            ]
          },
          " provided a review copy of this book."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
