import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/01/eh-champions-wilderness.jpg",
    "alt": "Earth Heroes: Champions of the Wilderness",
    "href": "/media/2011/01/eh-champions-wilderness.jpg",
    "width": 210,
    "height": 314,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "A compilation of outstanding biographies from 19th century to modern day environmentalists geared towards upper elementary and middle school-aged children, ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.forewordreviews.com/reviews/earth-heroes-champions-of-wild-animals/",
            "external": true,
            "children": [
              "Champions of the Wilderness"
            ]
          }
        ]
      },
      " is a detailed reference guide and source of inspiration. In a way, those profiled act as a domino effect where the first stimulated the actions of the next: Henry David Thoreau served as a hero for John Muir; Muir did the same for Theodore Roosevelt; Teddy moved Aldo Leopold; and so it goes for Richard St. Barbe Baker, Margaret Murie, David Suzuki, Wangari Maathai, and then ideally upon the reader. Each chapter is structured in roughly the same manner, where the person’s childhood is retold, including their initial and deep connections to nature, their careers and achievements and even a bit of their personal information (marital status, children, etc). For those looking for the basics, the authors provide a page on “Fast Facts” and a timeline that contrasts personal mile markers within its historical context."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "There’s no doubt that these individuals initiated and began to define the ecological movement: preserving large tracts of land as national parks and wildlife refuges, creating founding theories on food chains, preservation and conservation, planting peace and generating forests in African villages, and helping native tribes in Canada and elsewhere protect their locales. While such achievements are the main reason for writing this text, I love the honest portrayal of each person. Aldo Leopold, was the odd one of the bunch, quirky with girls and preferred to spend time with family or in nature, but eventually he came into his own, settled down and created a lasting legacy. You’ll find the other naturalists with trying adolescences: During WWII, Suzuki and his family were separated and forced to work in labor camps; Maathai had to overcome sexism in order to achieve her many “firsts,” such as the first woman to earn a PhD in East and Central Africa."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "One recurring theme that will dishearten animal lovers is the incredible number of animals hunted by some of these champions. The authors do note that"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "“Being a hunter might seem like a contradiction for a person like Teddy [Roosevelt] who loved birds and animals. However, during the 1800’s and 1900’s most naturalists were also hunters. They killed animals so they could carefully study them.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Nowhere do the authors suggest that hunting is no longer a needed pastime, but at the very least readers will come to appreciate Aldo Leopold’s evolved view on the subject matter: “I can’t imagine wanting to kill anything now when there is so much to see and appreciate out of doors.” The book ends with creative recommendations on how to become a Hero."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 9-12."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
