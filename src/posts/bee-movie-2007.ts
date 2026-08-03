import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Girl holding a movie camera - stock image to accompany movie review",
    "width": 210,
    "height": 317,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "“Bee Movie” was a big hit for family movie night. Written by Jerry Seinfeld, who also voices the lead bee, this movie is funny and entertaining for the entire family. It was enjoyed by the kids (ages 3 and 8) and the adults in our family."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Barry the Bee (Seinfeld) finds out that humans are stealing honey from hard working bees and sues the government. There is a settlement that results in only the sale of “bee-approved” honey being allowed. My 8-year-old said, “Aw, bee-approved. I like that.” There is even a scene at the end in which a cow is asking Barry the Bee for advice on how to keep humans from stealing her milk."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "https://www.commonsensemedia.org/movie-reviews/bee-movie",
        "external": true,
        "children": [
          "Common Sense Media"
        ]
      },
      " recommends this movie for ages 5+. I agree that older kids will understand the plot better, and also understand more of the jokes, but the movie is cute enough for younger kids as well. My three-year-old now says this is his favorite movie. Highly recommended for your next movie night. We were able to watch it on Netflix."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Rated PG."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
