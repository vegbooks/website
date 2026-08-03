import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Rio (2011)",
    "href": "/media/2010/06/movie-pic-from-istock.jpg",
    "width": 210,
    "height": 321,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "The animated movie “Rio” really had me at the first scene, where all the birds of the rainforest ascend into the sky to sing and fly in a huge, showy musical number. Add to the lush animation and the spirited music a storyline that revolves around the evils of the ",
      {
        "type": "link",
        "href": "http://animal.discovery.com/tv/fatal-attractions/exotic-pet-trade-overview.html",
        "external": true,
        "children": [
          "pet trade"
        ]
      },
      " and wild animals belonging in the wild, and you know I was in movie heaven."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "My daughter, who is 5 years old, enjoyed the humor, repeatedly cracking up until tears came down her face, and my husband was pleasantly surprised to discover that the voice of one of the main bad guys, a cockatoo, was none other than ",
      {
        "type": "link",
        "href": "http://www.imdb.com/name/nm1318596/",
        "external": true,
        "children": [
          "Jemaine Clement"
        ]
      },
      " from “Flight of the Conchords.” Needless to say, we had a great time watching this family flick."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The story follows Blu, a blue macaw, from the time he is a fledgling in the rainforest of Brazil until he becomes a father, saving his species from extinction. Along the way, he serendipitously escapes from a truck hauling him to a pet store, lives in a bookstore in Minnesota, meets and eventually falls in love with the last female of his kind, overcomes his fear of flying, escapes wildlife traffickers, and rescues a bunch of other birds. As you can guess, this story moves fast!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Vegetarian families should know that meat is depicted briefly in one scene, but not in a very appetizing way. Parents should also be prepared to discuss with their kids the message this movie has about pet stores and about keeping wildlife captive — while it may seem obvious to grownups, pet stores saw a surge of clown fish sales after “",
      {
        "type": "link",
        "href": "/reviews/finding-nemo/",
        "children": [
          "Finding Nemo"
        ]
      },
      ",” despite its anti-captivity theme."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Rated G, this movie is appropriate for kids ages 4 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
