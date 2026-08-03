import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Girl holding a movie camera - stock image to accompany movie review",
    "href": "/media/2010/06/movie-pic-from-istock.jpg",
    "width": 210,
    "height": 321,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "“",
      {
        "type": "link",
        "href": "http://www.apple.com/trailers/fox/iceagedawnofthedinosaurs/large_t2.html",
        "external": true,
        "children": [
          "Ice Age 3: Dawn of the Dinosaurs"
        ]
      },
      "” brings us more silliness from prehistory’s most unusual herd. Ellie and Manny are on the verge of welcoming a baby mammoth, and we’re introduced to Buck, short for Buckminster, long for Buh. Buck is a swashbuckling (there is no other word for him!) muskrat who leads the herd on a quest through a heretofore unknown subterranean dinosaur world."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The object of their search is fellow herd member Sid the Sloth, who has removed dinosaur eggs from an underground nest. Once the mother dinosaur discovers that her eggs have been taken, she comes for her hatchlings. Loyal to his “children,” Sid refuses to relinquish them and is carried away along with the babies in their mother’s monstrous jaws to the dinosaur nursery."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Hot on his heels with Buck guiding them, the rest of the herd proves that just because a child enters the family, the adventures don’t stop. Reunited at the end, the usual Ice Age themes of herd love and loyalty prevail. We’re also treated to more screen time devoted to Scrat the Squirrel and his attempts to get his acorn, which are complicated by a love interest, Scratte."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Veg folks may be particularly interested in a ",
      {
        "type": "link",
        "href": "http://vegetarianstar.com/2009/07/03/ice-age-dawn-of-the-dinosaurs-raised-vegetarian-clip-video/",
        "external": true,
        "children": [
          "scene that made the rounds online"
        ]
      },
      "in which Sid tries to convince the mother T Rex that the babies should be raised vegetarian (he does not prevail). I am not in love with the end of that scene, in which Sid attempts to save a bird by taking it away from the hungry little T Rexes and throwing it over a cliff, only to realize too late that it is flightless. Immediately after, another predator eats it. It’s only a blip but one might want to be prepared to explain this scene. I do give Sid credit for holding fast to his values and doing his best to live by them in the face of a giant, carnivorous dinosaur."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "We really enjoy this movie, though as with the other two movies, this is rated PG and contains mild rude humor and peril. Ages 6 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
