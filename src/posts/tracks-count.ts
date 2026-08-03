import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "paragraph",
    "children": [
      "I’ve been reviewing for Vegbooks for over three years so I’ve seen a fair share of standard books – ABC books (",
      {
        "type": "link",
        "href": "/reviews/all-the-asleep-animals/",
        "children": [
          {
            "type": "emphasis",
            "children": [
              "All the Asleep Animals"
            ]
          }
        ]
      },
      ", ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "/reviews/click-clack-abc/",
            "children": [
              "Click, Clack, ABC"
            ]
          },
          ","
        ]
      },
      "and ",
      {
        "type": "link",
        "href": "/reviews/letters-of-the-west-an-abc-book-of-the-many-plants-animals-and-other-curious-features-of-the-west/",
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Letters of the West"
            ]
          }
        ]
      },
      ") and song books (",
      {
        "type": "link",
        "href": "/reviews/jo-macdonald-had-a-garden/",
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Jo MacDonald Had a Garden"
            ]
          }
        ]
      },
      ", ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "/reviews/over-in-the-jungle-a-rainforest-rhyme/",
            "children": [
              "Over in the Jungle"
            ]
          },
          ","
        ]
      },
      "and ",
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
      "), but this is the first dedicated counting book (though not the first I’ve reviewed to feature animal tracks)."
    ]
  },
  {
    "type": "image",
    "src": "/media/2014/11/tracks-review-vegbooks.jpg",
    "alt": "Tracks-Review-Vegbooks",
    "width": 480,
    "height": 479,
    "align": "center"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Tracks Count"
        ]
      },
      " depicts animals, their tracks, and a short line of explanatory text. The illustrations are all done in a sepia tone. Each animal is in the wild except for the corresponding animal/track for the number one. The horse’s hoof is accompanied with text indicating the horse is in the corral. Later numbers include multiple animals to reach the requisite number of toes needed, for example, the number eight features the track of a tapir and a coatimundi. The tapir has three toes, the coatimundi has five. The book wraps up with facts about each animal featured and information about the book’s author, a nature program supervisor at a wetland preserve and the illustrator who teaches children with Art4Life."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Geared a little older than a typical counting book, the accurate illustrations of tracks were an invitation for my kids to wonder what their own tracks would look like. Great science read from Craigmore Creations’ “Little Naturalist” line."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Review copy from Craigmore Creations"
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
