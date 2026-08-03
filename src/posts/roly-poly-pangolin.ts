import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/07/toddler-baby-reading.jpg",
    "alt": "Toddler-baby reading",
    "href": "/media/2011/07/toddler-baby-reading.jpg",
    "width": 210,
    "height": 300,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Pango…what? Pangolins are adorable scaly mammals (author/illustrator Anna Dewdney ",
      {
        "type": "link",
        "href": "http://annadewdney.com/Annas_website/Pangolins%21.html",
        "external": true,
        "children": [
          "clearly has a soft spot for them"
        ]
      },
      ") and ",
      {
        "type": "emphasis",
        "children": [
          "Roly Poly Pangolin"
        ]
      },
      "(",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/0670011606/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=0670011606&linkCode=as2&tag=vegbooks-20",
        "external": true,
        "children": [
          "Amazon affiliate link"
        ]
      },
      ") is an equally adorable book about a very shy baby pangolin."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Poor Roly Poly is very small and doesn’t like new things at all. Toddlers and pre-schoolers will relate to and enjoy reading about Roly Poly’s apprehension when it comes to exploring the world around him and his feelings of happiness when he meets a new friend with whom he can have adventures. The illustrations round out the story as children are introduced to this lesser-known species and some of its habitat and behaviors, like rolling into a ball when threatened."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This is simple, cute book that young children will request again and again."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "There is a well placed note after the story discussing the pangolins’ endangered status. Caregivers can choose whether or not they want to discuss this with their children or just leave the story as it stands."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 2-5."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
