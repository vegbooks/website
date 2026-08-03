import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "The Muppets (2011)",
    "href": "/media/2010/06/movie-pic-from-istock.jpg",
    "width": 210,
    "height": 321,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Anyone who believes the old adage that publishers and producers can make works featuring male protagonists because they will appeal to both boys and girls (in contrast to female protagonists, which allegedly are of little interest to boys) has not watched a movie with my daughter. When we saw “The Muppets” in the theater, she zoned out for the first twenty minutes, repeatedly asking when Miss Piggy would make her appearance. The new character of the movie, Walter, held absolutely no appeal to her."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "On the other hand, I adored this flick, which delivers a heavy dose of nostalgia for those of us who grew up in the ’80s. I loved the Muppet Show as a child — in part because my whole family would make popcorn and gather to watch it each week — and so I instantly connected with Kermit and the gang, and cheered for songs like “The Rainbow Connection” and “Manamana.” I also appreciated this film’s ",
      {
        "type": "link",
        "href": "http://www.gomemphis.com/news/2011/nov/23/movie-reviewsholiday-films-for-kids-the-muppets/",
        "external": true,
        "children": [
          "cultural references"
        ]
      },
      ", from the ’80s robot serving cans of Tab to the nods to contemporary pop culture via ",
      {
        "type": "link",
        "href": "http://www.imdb.com/title/tt1204342/fullcredits#cast",
        "external": true,
        "children": [
          "appearances"
        ]
      },
      " by stars of the tv shows “Parks and Recreation,” “Modern Family,” and “The Office.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I didn’t notice any aspects of the movie that would be inappropriate for vegetarian or vegan families. While many of the animals are anthropomorphized, I personally appreciate the hens in the film, who sing a song like chickens might."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Rated PG. Ages 6 and up. For more intel on the movie (including when to take a potty break), check out ",
      {
        "type": "link",
        "href": "http://www.wired.com/geekdad/2011/11/10-things-parents-should-know-about-the-muppets-geekdad-weekly-rewind/",
        "external": true,
        "children": [
          "Geek Dad"
        ]
      },
      "."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
