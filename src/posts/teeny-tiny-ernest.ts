import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/12/teeny-tiny-ernes-rgb.jpg",
    "alt": "Teeny Tiny Ernest",
    "href": "/media/2011/12/teeny-tiny-ernes-rgb.jpg",
    "width": 210,
    "height": 169,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "In ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.amazon.com/gp/product/0967468116/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=0967468116",
            "external": true,
            "children": [
              "Teeny Tiny Ernest"
            ]
          }
        ]
      },
      ", Ernest spends a lot of time navel gazing and fretting about the fact that he is the smallest animal in his cadre of barnyard friends. When he tries silly tricks to make himself appear taller, his friends notice his unusual behavior and question him. He reveals that he’s been feeling inadequate, expecting buy-in to his pity party but his friends surprise him. It turns out that they haven’t been thinking about his stature at all because they have been more focused on his friendliness and big heart. In fact, Ernest’s friends point out, there are a number of advantages that come with being small that they can’t enjoy because of their larger size."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "We’ve enjoyed the stories we’ve received to review in ",
      {
        "type": "link",
        "href": "http://barnesyardbooks.com/",
        "external": true,
        "children": [
          "this series of picture books about the little donkey and his friends"
        ]
      },
      ". ",
      {
        "type": "emphasis",
        "children": [
          "Teeny Tiny Ernest"
        ]
      },
      " is a particularly nice reminder that we all have our own strengths and challenges and bring our own special gifts to our community. This is a message that I think is especially important for veg kids to have reinforced."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "A great choice for ages 4 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
