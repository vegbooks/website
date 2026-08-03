import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Martin & Mahalia"
        ]
      },
      " is a book that wants to be read out loud. Andrea Davis Pinkney combines history, biography, and poetry to tell a story of two influential people in the Civil Rights Movement: Martin Luther King Jr., civil rights leader; and Mahalia Jackson, “Queen of Gospel” music. With artful illustrations by Brian Pinkney and colorful text in varying sizes, it reaches towards spoken word and song, emphasizing the power of words and music. The collaboration between author and illustrator cleverly reiterates the partnership between Martin and Mahalia. Colorful and casual, the story plays up the strength and positive impact Martin and Mahalia made and takes a brief journey from segregation to the March on Washington for Jobs and Freedom, a defining moment in civil rights history."
    ]
  },
  {
    "type": "image",
    "src": "/media/2015/02/m-mimage.jpg",
    "alt": "MMimage",
    "width": 464,
    "height": 359,
    "align": "center"
  },
  {
    "type": "paragraph",
    "children": [
      "Brilliantly and artistically written and illustrated, it evokes emotions while telling an amazing story. The Pinkneys added a note from each of them at the end which fills in biographical, historical, and personal details that were not included in the main story (like last names, other well known people in the civil rights movement, Presidents, and inspiration). A list of additional reading and discography follows as well as an illustrated timeline."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 6 +."
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
            "href": "http://www.hachettebookgroup.com/kids/",
            "external": true,
            "children": [
              "The publisher"
            ]
          },
          " sent a copy of this book for review."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
