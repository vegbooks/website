import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/02/9780142500217-medium-how-chipmunk-got-his-stripes.jpg",
    "alt": "How Chipmunk Got His Stripes",
    "href": "/media/2012/02/9780142500217-medium-how-chipmunk-got-his-stripes.jpg",
    "width": 210,
    "height": 169,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I have a weakness for folk tales, and I really enjoy ",
      {
        "type": "link",
        "href": "http://www.goodreads.com/book/show/2497936.How_Chipmunk_Got_His_Stripes",
        "external": true,
        "children": [
          "this retelling"
        ]
      },
      " of a story that has, according to the authors’ notes, Cherokee, Abenaki, and Iroquois roots."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "How Chipmunk Got His Stripes"
        ]
      },
      "is a picture book about a bear and a squirrel-turned-chipmunk. At its heart, this story is more about bragging and teasing than natural history, but that doesn’t stop the two from being intertwined. Bear, the most powerful animal of the forest, thinks he can do anything, and so when he’s baited by a squirrel into ordering the sun not to rise, he does so. When inevitably the sun rises, the squirrel teases Bear, who becomes so enraged that he attacks the squirrel, leaving long scratches down his back. Over the winter, the scratches heal into stripes, and the squirrel is no longer a squirrel but rather a chipmunk. Chipmunk always rises at dawn, but Bear sleeps in."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://lisasliteraturereviews.blogspot.com/2011/02/review-how-chipmunk-got-his-stripes-by.html",
            "external": true,
            "children": [
              "How Chipmunk Got His Stripes"
            ]
          }
        ]
      },
      " will give families plenty to discuss: what’s wrong with bragging and teasing for starters, but also some natural history about chipmunks and bears. While there’s a little bad behavior and violence, it pales compared to many beloved fairy tales, such as “Hansel and Gretel.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4 to 8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
