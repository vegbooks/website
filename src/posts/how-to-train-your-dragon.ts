import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "How to Train Your Dragon (2010)",
    "href": "/media/2010/06/movie-pic-from-istock.jpg",
    "width": 210,
    "height": 321,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Last year’s big screen release, “",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/How_to_Train_Your_Dragon_(film)",
        "external": true,
        "children": [
          "How to Train Your Dragon"
        ]
      },
      "” has a powerful message about tolerance and respect for animals. Set in a Viking village, the film opens on a scene of terrible violence in which humans and dragons are waging battle. The lead character Hiccup is eager to win his father’s approval and so sets out to kill a dragon. He’s sure he’s hit his mark, but no one is around to witness his act and the dragon appears to have gotten away. The next day, Hiccup takes to the woods to find his quarry, and there must decide whether to kill the wounded and bound dragon. He spares the dragon, who looks and acts like a combination cat-bat-shark and whom he later names Toothless, and this decision sets the stage for the rest of the film, which deals with his chosen role as a peacemaker in a culture of violence."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ultimately, dragons and humans come to live together in harmony, but not before banding together to kill a gigantic dragon who rules over all the others (he’s the reason the dragons steal food from the humans)."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "While vegetarian and vegan families may be uncomfortable with some aspects of this film — humans ride the dragons and Hiccup refers to them as “pets,” and there is a lot of violence — ultimately, the story is about the two species coming to live in peaceful coexistence. No wonder the Humane Society of the United States honored the movie in its annual ",
      {
        "type": "link",
        "href": "http://latimesblogs.latimes.com/awards/2011/03/genesis-awards-honor-dragon-oprah-others-for-portrayal-of-animal-rights-issues.html",
        "external": true,
        "children": [
          "Genesis Awards"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "As for me, I was particularly taken by a scene in which the Vikings are eating meat and discussing how a dragon bit off one of the character’s legs and thought it was delicious. It didn’t take much of a leap to reach the conclusion that just because something tastes good, it doesn’t mean that it’s worth causing another creature to suffer."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Rated PG. I’d recommend this movie for kids ages 7 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
