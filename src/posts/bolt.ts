import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "paragraph",
    "children": [
      "Kiddo and I both loved “",
      {
        "type": "link",
        "href": "http://www.commonsensemedia.org/movie-reviews/bolt",
        "external": true,
        "children": [
          "Bolt"
        ]
      },
      ",” though I do think she was a little young to understand it entirely. It starts sweetly when Penny rescues Bolt as a puppy. Viewers soon discover that Bolt and Penny are stars of an action TV series, but Bolt has no idea that it’s all make-believe. When he is separated from Penny, he must traverse the country to be reunited with his person, all the while coming to grips with the reality that he does not have super powers."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Kids will love the movie’s fast pace and the rapport among Bolt, a cat named Mittens, and a hamster named Rhino. And parents who are concerned with animal welfare will appreciate the film’s message that people need to be ",
      {
        "type": "link",
        "href": "http://www.animalsheltering.org/programs_and_services/pets_for_life/",
        "external": true,
        "children": [
          "faithful to their animal companions for life"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 5+. Rated PG."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
