import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2013/05/72-dpi-mind-of-my-own-cover-art.jpg",
    "alt": "72 dpi Mind of My Own Cover Art",
    "href": "/media/2013/05/72-dpi-mind-of-my-own-cover-art.jpg",
    "width": 210,
    "height": 189,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "A friend with 2-1/2-year and six-month old daughters told me to check out singer/songwriter ",
      {
        "type": "link",
        "href": "http://francesengland.com/",
        "external": true,
        "children": [
          "Frances England’s CDs"
        ]
      },
      "from the library and I’m so glad I did. The first CD to come up on reserve was her 2010 album “Mind of My Own.” As I listened in the car with my 4-1/2-year-old daughter and 2-1/2-year-old son I realized that this represents a segment of music aimed at children that really speaks to their interests. For example, when my daughter heard the song “Bicycle” (Track 7), she was captivated and wanted to learn how to sing it herself right away:"
    ]
  },
  {
    "type": "quote",
    "children": [
      {
        "type": "paragraph",
        "children": [
          "Bicycle, bicycle, how I love you",
          {
            "type": "lineBreak"
          },
          " Bicycle, bicycle, things that we do",
          {
            "type": "lineBreak"
          },
          " Bicycle, bicycle, ride around in circle for hours at a time",
          {
            "type": "lineBreak"
          },
          " Bicycle, bicycle, I’m so glad you’re mine"
        ]
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "“Red Balloon” follows a child from age two to age five – the only lyric veg families may have to explain is one that identifies being age five with a wishbone but my children didn’t notice it or ask about it. And it is a fantastic song, the kind that makes parents tear up as it sums up growing up fast. Another favorite of mine is “Ladybug.” The songs cover nature, playing outside, science, love, and more, all delivered with a beautiful voice, charming lyrics, sweet melodies, and a folksy guitar sound. The CD is a good mix of the peaceful music and toe-tapping tunes that average 2 minutes to 3 minutes in length (15 songs in total)."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I thought I’d mention that in “Cookies and Milk,” a song about friends, England sings, “We go together like cookies and milk, we go together like peanut butter and jelly.” My daughter does have a hard time with songs that have peanut butter references in their lyrics because of her food allergies but she usually substitutes (much like in real life) “peanut butter” with “sunbutter” (also known as sunflower seed butter). I try to tell her that there’s nothing wrong with singing about nuts but I do respect that she is honest when it makes her uncomfortable. Also, as a heads up for vegan families, in the track “All the Ways” there is a reference to cracking eggs to mix into dough."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "We truly enjoyed this album and wanted to share it with Vegbooks’ readers just in time for summer roadtrips – maybe you have favorite music to share? Leave a comment below! (Though I love him, Morrissey is probably a little too gloomy to play for the kids. My husband’s favorite, Bob Dylan, isn’t always ideal either.)"
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
