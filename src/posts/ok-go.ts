import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/05/okgo-hc-c.jpg",
    "alt": "OK Go",
    "href": "/media/2011/05/okgo-hc-c.jpg",
    "width": 210,
    "height": 210,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I love Carin Berger’s style. From the playful to the contemplative, her children’s book illustrations never fail to delight me. And so it was with great enthusiasm that I dove into ",
      {
        "type": "emphasis",
        "children": [
          "OK Go"
        ]
      },
      ", a picture book for young children with an eco twist."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Using sparse words and collages made of found materials, this book contrasts a carbon-based lifestyle, consisting of bumper to bumper vehicles spurting fumes, with one that’s a little more green. Although the former is full of energy and humor — “Go! Go! Go!” — kids will appreciate the reminders about how we can all be a little more mindful of the environment, with a particular emphasis on transportation. “Catch a ride, Clyde. Roller-skate, Kate. Ride a bike, Mike and Ike.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The last page includes additional suggestions for recycling and reusing everyday items, as well as a list of further reading on how kids can take care of the environment, including ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "/reviews/where-does-the-garbage-go/",
            "children": [
              "Where Does the Garbage Go?"
            ]
          }
        ]
      },
      "and ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://ecochildsplay.com/2008/06/05/eco-kids-books-recycle-a-handbook-for-kids-by-gail-gibbons/",
            "external": true,
            "children": [
              "Recycle! A Handbook for Kids"
            ]
          }
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 2-5."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
