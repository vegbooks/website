import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2013/02/war-dogs-300.jpg",
    "alt": "War Dogs",
    "href": "/media/2013/02/war-dogs-300.jpg",
    "width": 210,
    "height": 190,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "As a history buff and an avid animal lover-advocate, I can’t help but do a little dance when these two interests come together in a historical picture book for kids. I’ve reviewed others that have told history from an animal companion’s perspective or with animals at least heavily featured, including ",
      {
        "type": "link",
        "href": "/reviews/emily-and-carlo/",
        "children": [
          "Emily Dickinson and her dog Carlo"
        ]
      },
      " and ",
      {
        "type": "link",
        "href": "/reviews/dog-of-discovery-a-newfoundlands-adventures-with-lewis-and-clark/",
        "children": [
          "Lewis & Clark and their canine friend Seaman"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Author and artist ",
      {
        "type": "link",
        "href": "http://www.kathrynselbert.com/",
        "external": true,
        "children": [
          "Kathryn Selbert"
        ]
      },
      " paints a more intimate picture of World War II in ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.charlesbridge.com/productdetails.cfm?PC=5704",
            "external": true,
            "children": [
              "War Dogs"
            ]
          }
        ]
      },
      ", an introductory biographical look at Winston Churchill through the eyes of his first miniature poodle, Rufus. While sorely lacking in the text is the reason for the war, Selbert conveys the strong bond the prime minister had with Rufus while also showing his trying role in the war: dealing with the bombings in London, launching D-Day, and paving the road to recovery. Rufus not only softens the harsh realities of the war, but humanizes Winston, I think, through this difficult time. Graphically, this is an engaging book with Selbert’s beautiful and sometimes stark illustrations in acrylic and collage. Interspersed throughout the book are pinned memos with type-written text, reliving the prime minister’s words:"
    ]
  },
  {
    "type": "quote",
    "children": [
      {
        "type": "paragraph",
        "children": [
          "We three must remain friends in order to ensure happy homes in all countries."
        ]
      },
      {
        "type": "paragraph",
        "children": [
          "– November 1943"
        ]
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Although Selbert did not dive into the reasons for the war and some of the more intricate, yet important details, she does provide an informative timeline for older audiences, a small essay on Churchill and his affinity for animals, including cats and chickens, and another essay on Winston himself. ",
      {
        "type": "emphasis",
        "children": [
          "War Dogs"
        ]
      },
      " is a great addition to this growing body of kid lit."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 7 – 10."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "A review copy was provided by the publisher, which also offers a ",
          {
            "type": "link",
            "href": "http://www.charlesbridge.com/client/client_pdfs/downloadables/WarDogs_DiscussionGuide.pdf",
            "external": true,
            "children": [
              "free discussion guide"
            ]
          },
          " to the book."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
