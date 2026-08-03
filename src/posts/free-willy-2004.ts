import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Girl holding a movie camera - stock image to accompany movie review",
    "width": 282,
    "height": 426,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "We watched “Free Willy” for our family movie night with our six-year-old daughter. I hadn’t seen this movie since it came out years ago. I was amazed at how strong the anti-captivity message is in this lovely family movie."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The movie shows viscerally how animals are taken from the wild, put into tiny enclosures, and treated as commodities. Willy is sad, scared, and misses his family."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The scene that best demonstrates aquarium life is a scene in which kids are yelling and pounding on the tank. We hear what Willy is hearing under the water and see him getting more and more upset until he finally rams the glass with his nose. I’m always amazed at the plethora of kid-friendly animal rights movies."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "My daughter loved this movie. She laughed, she cried, and she cried some more. It was really helpful that we spent a week in Puget Sound this summer seeing orcas in the wild. She’s been kind of positive about zoos and aquariums in the past, despite our negative feelings toward them. After seeing this movie she now thinks the practice of putting wild animals in cages is deplorable. For now, that is, until her next field trip to the zoo…."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "https://www.commonsensemedia.org/movie-reviews/free-willy",
        "external": true,
        "children": [
          "Common Sense Media"
        ]
      },
      " recommends this film for ages 6+. We watched it on Amazon Prime."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
