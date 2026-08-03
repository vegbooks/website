import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/09/s-pick-a-pet.jpg",
    "alt": "First Pooch",
    "href": "/media/2011/09/s-pick-a-pet.jpeg",
    "width": 210,
    "height": 270,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I’m charmed by Carole Boston Weatherford’s picture book on ",
      {
        "type": "link",
        "href": "/reviews/now-hiring-white-house-dog/",
        "children": [
          "how First Dog Bo became part of the First Family"
        ]
      },
      ". Living in Washington, DC, my family and I are intimate with the president’s motorcade, helicopters, and even the National Christmas Tree on the south lawn. But the man himself? We know as much about him and his family as anyone with a cable connection. So we enjoyed this peek into the president’s life from the perspective of his daughters, and of course the heartwarming story of how Bo found his home."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The real-life details of the First Family’s search for a White House dog irked me a little when they were in the news. Remember how the Obamas promised to rescue a dog from a shelter, but ",
      {
        "type": "link",
        "href": "http://www.msnbc.msn.com/id/30194173/ns/health-pet_health/t/obamas-new-pooch-rescue-or-not/",
        "external": true,
        "children": [
          "ultimately did not"
        ]
      },
      "? Fortunately, this book does a good job of sticking to the facts without glamorizing breeders or downplaying the importance of shelters."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "People concerned with animal rights will note that the book states, in small type under a portrait, that George W. Bush “owned” a terrier. And in recounting the promises of presidents over the years, the book also describes that Calvin Coolidge promised to put “a chicken in every pot and a car in every garage.” (Fortunately, the bird pictured is still alive, and the people holding the pot appear clueless that they’re supposed to eat the poor bird.)"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "All in all, this is a fun read about the White House for kids ages 3-7."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
