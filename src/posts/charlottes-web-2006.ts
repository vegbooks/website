import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Movie pic",
    "href": "/media/2010/06/movie-pic-from-istock.jpg",
    "width": 210,
    "height": 321,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I have fond memories of watching the animated “Charlotte’s Web” movie as a kid. In particular I’ve always remembered Templeton at the fair gorging himself on everything in sight. I promised my four-year-old daughter that if we finished reading our first chapter book, ",
      {
        "type": "link",
        "href": "/reviews/charlottes-web/",
        "children": [
          "C"
        ]
      },
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "/reviews/charlottes-web/",
            "children": [
              "harlotte’s Web"
            ]
          },
          ","
        ]
      },
      " we could watch the movie. I intended to watch the 1974 animated version from my childhood, but that version was only available on DVD, and not instant streaming, and we wanted to watch the movie RIGHT NOW! So I settled for the live action movie created in 2006 (",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/B000WHO93A/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B000WHO93A&linkCode=as2&tag=vegbooks-20",
        "external": true,
        "children": [
          "Amazon affiliate link"
        ]
      },
      "). We were not disappointed."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Using real people and real animals made the story very real for my daughter. She stared at the screen slack-jawed and did not speak for the entire movie. The CGI spider Charlotte had such a motherly face and voice (Julia Roberts) that I momentarily forgot my fear of spiders. The cast is star-studded with Julia Roberts, Robert Redford, Oprah Winfrey, and many other big names."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Some parts of the movie bothered me, specifically the idyllic setting of the farm with animals quite happy to be there. There is a sheep shearing scene in which the sheep are begging to be sheared, and another scene in which the horses and cows deride the sheep for being lazy and not working hard like them. However, it is very clearly illustrated that Wilbur does not want to die, and you really feel his fear throughout the movie."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "As with the book, Charlotte’s death is very moving. Her loving face and Julia Robert’s gentle voice make you feel very strongly for her."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I recommend this movie for any animal lover."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4+."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
