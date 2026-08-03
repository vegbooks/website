import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/01/97807636424262.jpg",
    "alt": "Naamah and the Ark at Night",
    "href": "/media/2012/01/97807636424262.jpg",
    "width": 210,
    "height": 235,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I checked out this book based on ",
      {
        "type": "link",
        "href": "/about/",
        "children": [
          "Jessica’s"
        ]
      },
      " suggestion as it was just featured as a ",
      {
        "type": "link",
        "href": "http://wakingbraincells.com/2012/01/18/2012-sydney-taylor-book-award-winners/",
        "external": true,
        "children": [
          "2012 Sydney Taylor Honor Book for Younger Readers"
        ]
      },
      ". As is apparent from the title, ",
      {
        "type": "emphasis",
        "children": [
          "Naamah and the Ark at Night"
        ]
      },
      ", by Susan Campbell Bartoletti and illustrated by Caldecott Honoree Holly Meade, is a Noah’s Ark story but not exclusively so. It is also a bedtime story where the lady of the house (or in this case, ark) ensures that all its occupants are resting contentedly before retiring herself."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The book’s flap indicates that “Naamah is the wife of Noah, and her name means ‘great singer.'” Naamah sings the animals and people on the ark to sleep before going to bed herself. The illustrations are beautiful and creative, alternating between shadowy colors and silhouettes. The illustrations take center stage but the text is lyrical and reads softly while “[s]he sings for moon to fill the night […] Over the ark, song flows at night.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The animals are cramped but peaceful, responding gently to Naamah’s attentions as well as to one another. My favorite pages are where Naamah is looking up at the constellations of Greek myth in the sky, I think it is an interesting juxtaposition especially considering that flood stories pervade many cultures. My daughter liked how everyone was being tucked in and checked on, “[c]radled by the song of night. Hush hush hush, good night.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4 to 9."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
