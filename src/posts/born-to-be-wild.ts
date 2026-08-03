import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Born to Be Wild (2012)",
    "href": "/media/2010/06/movie-pic-from-istock.jpg",
    "width": 210,
    "height": 321,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "http://www.imax.com/borntobewild/",
        "external": true,
        "children": [
          "“Born to Be Wild”"
        ]
      },
      " is an IMAX film focusing on the conservation efforts of two women working a world away from each other in different conditions but with aligned goals. Both have set up systems of caring for and ultimately releasing orphaned wild animals back into the wild. ",
      {
        "type": "link",
        "href": "http://www.sheldrickwildlifetrust.org/html/about_daphne_sheldrick.html",
        "external": true,
        "children": [
          "Daphne Sheldrick"
        ]
      },
      ", who founded the ",
      {
        "type": "link",
        "href": "http://www.sheldrickwildlifetrust.org/about_us.asp",
        "external": true,
        "children": [
          "David Sheldrick Wildlife Trust"
        ]
      },
      ", maintains facilities in Kenya where young elephants who have lost their mothers to poachers are taken in, cared for and, years later, reintroduced to their native habitat. ",
      {
        "type": "link",
        "href": "http://www.orangutan.org/dr-galdikas-bio",
        "external": true,
        "children": [
          "Birute Galdikas"
        ]
      },
      " founded ",
      {
        "type": "link",
        "href": "http://www.orangutan.org/about-ofi",
        "external": true,
        "children": [
          "Orangutan Foundation International"
        ]
      },
      ", which advocates and cares for orphaned orangutans in Indonesia as well as works to preserve their ",
      {
        "type": "link",
        "href": "http://www.orangutan.org/rainforest/the-effects-of-illegal-logging",
        "external": true,
        "children": [
          "rapidly declining habitat"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Narrated by Morgan Freeman, “Born to Be Wild” contains amazing footage of the lush Borneo rainforests and the dry Kenyan terrain. While the narrative explains the conditions, history and current work of each organization, the generous shots of the young elephants and orangutans (and their caregivers) are heartwrenchingly adorable — so much so that it is almost possible to forget the two distinct yet equally disturbing reasons that create the need. At the same time, it is the lack of emphasis on the deforestation in Borneo and poaching in Kenya that makes this movie not just appropriate but enjoyable for younger kids. Instead, while the issues are mentioned, the film specifically focuses on the work of these two women and those in their employ, as well as the stated goal of returning the orphaned babies back to the wild."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "There are a couple of points in the movie which may be uncomfortable — namely, the reenactment of the arrival of one of the orangutans at OFI’s Camp Leakey and the footage of a capture of a baby elephant who had been spotted with a group of bulls, a scenario in which the young elephant would have starved to death. Both seemed contrived to add an unnecessary sense of drama to the film, though I later learned that yes, the elephant rescue just happened to occur while the film crew was on location. These are small blips in this compelling movie. I recommend this film for kids 5 and up (though as with all IMAX features, the noise levels and large images can be overwhelming for sensitive folk of any age). The experience of watching this, especially for children who are being raised with a heightened awareness of human interaction with animals, may be a very profound one."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "http://www.youtube.com/results?search_query=born+to+be+wild+webisodes&page=&utm_source=opensearch",
        "external": true,
        "children": [
          "Some webisodes"
        ]
      },
      " have been created around the film. Check them out to get a flavor for the movie. You can enjoy some of the information and adorability from the comfort of your own computer."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
