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
      "The movie “",
      {
        "type": "link",
        "href": "http://www.bookoflifemovie.com/",
        "external": true,
        "children": [
          "Book of Life"
        ]
      },
      "” lived up to my expectations and then some. I absolutely loved the clever and detailed animation as well as the story within a story (within a story!). All the characters looked like marionettes and the colors were varied and vivid. Black and white was used beautifully for emphasis. Not only was the imagery delightful, but the movie was packed full of life lessons; lessons about friendship, death, honoring family, staying true to yourself, forgiveness, and even touched on some animal rights! Yet, it was not overdone and I felt it added to the storyline. Some of the analogies were trite, but bits of humor or music helped liven up the predictability."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I enjoyed the cultural elements in this movie and felt they could have been played up more with the music selection. Instead, the music was more pop tunes altered to add a little Latino flavor and I believe it was meant to add humor."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The story revolves around the Day of the Dead and a bet the Gods make using two boys and a girl. There is love and lots of fast-paced action (which should keep those with short attention spans entertained) and ancestors as well as a trip to the two worlds after death. The characters emphasize keeping our loved ones alive by honoring and remembering them. Those that are not honored, disappear in the Land of the Forgotten. Our hero, Manolo, travels through the worlds on a quest to return to his love and save his town. There are some malevolent bad guys which may scare the young ‘uns but that’s probably why it’s recommended for ages 8 and up. If you haven’t seen it, go take a journey through a this colorful legend."
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
