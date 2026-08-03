import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Ice Age (2002)",
    "href": "/media/2010/06/movie-pic-from-istock.jpg",
    "width": 210,
    "height": 316,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "“",
      {
        "type": "link",
        "href": "http://www.apple.com/trailers/fox/ice_age/trailer1_medium.html",
        "external": true,
        "children": [
          "Ice Age"
        ]
      },
      ",” released in 2002 and narrated by an all-star cast, follows Sid, a socially outcast sloth, Manny the crusty mammoth and a sneaky smilodon named Diego. They cross paths during an ice age, attempting to return a baby to its tribe on a journey that will forever change them. Several scenes are scary or sad, including the ambush of a village, the death of the baby’s mother, and a flashback to a deadly encounter with human hunters. The unlikely trio are sometimes flippant or deceitful toward each other."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Moving past the perilous situations and irreverent attitudes, the movie is great. The dialogue is witty and scenes change quickly without being confusing. A subplot regarding a squirrel and his acorn is especially silly. Adults will appreciate additional humorous elements, including that the anthropomorphized non-human animals converse in complex dialogue while the humans only grunt."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Sitting with your children to discuss the story that unfolds in this movie, you will be rewarded with giggles and an opportunity for nice conversation. The takeaways from the unsurprisingly heartwarming ending include important themes of forgiveness and openness."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "There are positive or neutral references to vegetarianism and veganism in this movie (Sid is veg*n, and there is a brief appearance by a veg rhino couple, who are not very sympathetic) but they are quick slices of dialogue not central to the themes of the movie."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Rated PG. Ages 6-12."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "More info on this funny movie ",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/Ice_Age_%28film%29",
        "external": true,
        "children": [
          "here,"
        ]
      },
      " ",
      {
        "type": "link",
        "href": "http://movies.nytimes.com/movie/review?_r=1&res=9804EED61039F936A25750C0A9649C8B63",
        "external": true,
        "children": [
          "here"
        ]
      },
      " and ",
      {
        "type": "link",
        "href": "http://www.commonsensemedia.org/movie-reviews/Ice-Age.html/details",
        "external": true,
        "children": [
          "here."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
