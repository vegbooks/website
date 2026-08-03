import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/11/cows-are-veg.jpg",
    "alt": "Cows Are Vegetarians",
    "href": "/media/2010/11/cows-are-veg.jpg",
    "width": 210,
    "height": 210,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "With a title like ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://cowsarevegetarians.com/A_Green_Site.html",
            "external": true,
            "children": [
              "Cows Are Vegetarians"
            ]
          }
        ]
      },
      ", you would expect this book to tell you all about how cows eat grass all their lives. Fortunately, inside its cover is a message much more exciting and profound."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Educating your kids about the vegan or vegetarian lifestyle can be tough at times, which is where this book steps in. It explains the difference between vegetarian and vegan and goes into the environmental effects of meat production. You’ll also find a good explanation of the health aspects."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Cows are Vegetarians"
        ]
      },
      " cleverly explains the reasons to be vegetarian and will provide your kids with answers to the probing questions they are undoubtedly asked. Kids are often asked why they are vegetarian (or vegan!) at school and now they’ll have something important to say."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "One thing it needs more of is inviting illustrations. Sadly, there a only a few black and white images."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "It’s quite a quick read too at 24 pages, but it manages to get the point across without getting lost in the details. At the end of the day, ",
      {
        "type": "emphasis",
        "children": [
          "Cows Are Vegetarians"
        ]
      },
      " is a great book to add to your kid’s collection."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 8-12."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
