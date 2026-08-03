import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2013/03/moosen-me.jpg",
    "alt": "Moose n’ Me",
    "href": "/media/2013/03/moosen-me.jpg",
    "width": 210,
    "height": 181,
    "align": "right"
  },
  {
    "type": "quote",
    "children": [
      {
        "type": "paragraph",
        "children": [
          "I offer it [this book] to those parents struggling to find a way to console a distraught child who may have lost that closest of all best friends, the beloved pet. I sincerely hope this will make the tears ease a little sooner and bring a smile to all your faces. – Kenny Loggins"
        ]
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "http://www.kennyloggins.com/",
        "external": true,
        "children": [
          "Kenny Loggins"
        ]
      },
      " — yes the same Kenny Loggins of world famous tunes such as “Footloose” and “Danger Zone” — has a soft spot…for dogs. In losing his best friend, Moose, Loggins needed a way to console and deal, and it turns out song was his method of choice. This book review is based on the lyrics of his song, “",
      {
        "type": "link",
        "href": "http://www.charlesbridge.com/productdetails.cfm?PC=5749",
        "external": true,
        "children": [
          "Moose n’ me"
        ]
      },
      ",” which have now been compiled with artist Joshua Nash’s illustrations into a sweet little story about love and loss."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The story is a little spotty in its telling; Loggins highlights a few scenes from his life with Moose, including a boat ride down the Delta, an encounter with a hobo, and a goodbye as Loggins boards the train to pursue his musical career. While on stage at a concert, he realizes that Moose is gone. The remainder of the text focuses on the “pearly gates” and his indubitable reunion with Moose, who will be waiting for him when he gets there. Such a tender moment!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The illustrations are very cute, mostly smiles, and will make this subject an easier one to broach. If you and your family have recently lost an animal companion, this title might be a good one. My recommendation would be to play Loggins’ song as you flip through the pages. You can stream “Moose n’ Me” through his ",
      {
        "type": "link",
        "href": "http://www.myspace.com/kennylogginsdotcom/music/songs/moose-n-me-51173050",
        "external": true,
        "children": [
          "Myspace page"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4 – 7."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "The publisher Charlesbridge provided a review copy of this book."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
