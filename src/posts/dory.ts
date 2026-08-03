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
      "When my older daughter was three, we tried watching “",
      {
        "type": "link",
        "href": "/reviews/finding-nemo/",
        "children": [
          "Finding Nemo"
        ]
      },
      ",” a movie beloved by many but way too scary for my daughter. My youngest is now three, and a parent of a friend of his suggested we watch “Finding Dory.” A look of horror must have crossed my face when she said that because she quickly followed it up with “It’s not scary like Finding Nemo!”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "We were on vacation in Burlington, VT, and wanted to see a movie at the ",
      {
        "type": "link",
        "href": "http://www.sunsetdrivein.com/)",
        "external": true,
        "children": [
          "drive-in theatre"
        ]
      },
      ", and they were playing “Finding Dory,” so we gave it a try. I enjoyed the movie more than “Finding Nemo,” and it’s definitely less scary. My daughter, seven years old, said she really liked the movie, and thought the characters were really funny, but it was sad. My son, three years old, said, “Ooh fish!” when the movie started, but he fell asleep before it ended, though the next day he said that he liked the movie and thought Dory was funny, but was worried because Dory couldn’t find her parents. I thought the movie was quiet and slow but a good story with enjoyable characters."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Much of the movie takes place in a ocean animal rescue center in California. My daughter loved hearing about how Ellen DeGeneres, the voice of Dory and a animal activist, suggested changes to the script that changed the setting from a Sea World-type aquarium to an animal rescue center. We talked about the power of speaking up for what you believe in. Even in that setting, you do get the feeling that the animals are trapped. It’s clear that though it is a rehabilitation center, many of the animals have been there for years. There is a conversation between a whale shark and a beluga whale in which the whale shark is considering whether or not to escape. The beluga whale says, “There are no walls in the ocean!” and the whale shark gets so excited. There is a big escape scene at the end that is particularly telling. All of the animals in the tanks start shouting “Release, release!”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "https://www.commonsensemedia.org/movie-reviews/finding-dory",
        "external": true,
        "children": [
          "Common Sense Media"
        ]
      },
      " recommends this movie for ages 6+. I watched it with my children ages 7 and 3."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
