import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "alt": "Henrietta",
    "href": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "width": 210,
    "height": 139,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "When I learned that dramatist David Mamet had penned ",
      {
        "type": "link",
        "href": "http://www.powells.com/biblio/17-9780618004164-0",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Henrietta"
            ]
          }
        ]
      },
      ", the story of a pig who goes to law school, I was very excited to get my hands on a copy of the story. I love pigs, I have enjoyed work by Mamet, and I even liked law school quite a bit (mostly)."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Henrietta"
        ]
      },
      " is indeed an engaging tale of a pig doggedly pursuing her dream of earning a J.D. at a venerated institution of higher learning in the greater Boston region. Her single-mindedness in reaching this goal gets her booted from the library and lectures (“No Pigs,” reads the sign eventually hung upon the door handle of the school) and with time on her hands, Henrietta roams the historic streets and ambles by the banks of the Charles. Eventually, she encounters an older man in the park who has lost his glasses. She helps him look for them, leading him home when their search proves fruitless. During their walk, she establishes herself as a ",
      {
        "type": "emphasis",
        "children": [
          "bona fide"
        ]
      },
      " academic, endearing herself to him to such an extent that he is nonplussed when his vision is restored and he finds out that she is no ordinary brainiac."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Henrietta’s good deeds are rewarded when it turns out that the man is the president of the university which she has been yearning to attend. Henrietta goes on to excel in law school and later work for social justice for disadvantaged groups, which leads her to “that high place she enjoys today.” (A place that the illustration makes look suspiciously like the Supreme Court.)"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This is indeed a charming story, although its difficult for me to estimate how much a child might enjoy it because it is written using complex prose and language that may be unfamiliar to many children. However, your favorite animal lawyer might really appreciate a copy."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
