import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/05/iamdog-hc-c.jpg",
    "alt": "I Am the Dog",
    "href": "/media/2011/05/iamdog-hc-c.jpg",
    "width": 210,
    "height": 272,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.powells.com/biblio/1-9780060555054-0",
            "external": true,
            "children": [
              "I Am the Dog"
            ]
          }
        ]
      },
      " is the silly story of Jacob (the boy) and Max (the dog). Penned by noted children’s author, commentator and critic ",
      {
        "type": "link",
        "href": "http://www.powells.com/blog/?p=5884",
        "external": true,
        "children": [
          "Daniel Pinkwater"
        ]
      },
      ", this book is a fun romp through a day in the lives of a kid and his dog. The colorful and fun illustrations by ",
      {
        "type": "link",
        "href": "http://picture-book.com/imagelist/72",
        "external": true,
        "children": [
          "Jack E. Davis"
        ]
      },
      " add the perfect amount of humor to this lively tale."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "One night Max and Jacob decide to change places, agreeing that Max will do human boy things the next day, and Jacob will do the doggie things Max normally finds himself undertaking. Older preschool and young elementary kids will love seeing what Max and Jacob do throughout the next day as they switch roles. Adults will likely enjoy Pinkwater’s and Davis’s portrayal of Jacob’s completely nonplussed parents, who do not bat an eyelash when Jacob asks for his breakfast served to him in a bowl on the floor (though Jacob’s mom does scold him later for eating Max’s homework). Jacob has a great time when Max takes him to the park, his dad brings him home special kibble for dinner, and he enjoys dashing around the yard in circles while Max sits at the table dining on spaghetti and meatballs. (Note that these depictions are potentially non-veg, if you have a questioning child.)"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Max and Jacob end their story by coming to one of the more obvious conclusions: it is best to be a (well-cared for, loved) dog."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Recommended for ages 4 and up.",
      {
        "type": "strong",
        "children": [
          {
            "type": "lineBreak"
          }
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
