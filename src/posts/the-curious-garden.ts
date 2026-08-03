import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/9780316015479.jpg",
    "alt": "The Curious Garden",
    "href": "/media/2010/06/9780316015479.jpg",
    "width": 217,
    "height": 279,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Liam, a curious young urbanite, looks at the drab, grey concrete bleakness around him and wonders if it could be different. While he’s out exploring, a few neglected pieces of greenery peeking out from an abandoned track bed assure him that it can be. And the tale of ",
      {
        "type": "link",
        "href": "http://www.peterbrownstudio.com/",
        "external": true,
        "children": [
          "Peter Brown’s"
        ]
      },
      " ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.powells.com/biblio/1-9780316015479-0",
            "external": true,
            "children": [
              "The Curious Garden"
            ]
          }
        ]
      },
      " is off and running."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Throughout the growing season, Liam educates himself about gardening and attends to the scraggly plants that quickly become a cohesive garden. Under his care, the garden thrives and spreads down the tracks, taking on a life of its own. When snowy winter comes, Liam spends it preparing for spring. His planning pays off during the next growing season and the greenery continues to spread throughout the city. This good work inspires others and new gardeners spring into action, joining Liam in the joy of urban gardening. Mr. Brown’s illustrations are a perfect balance of hauntingly honest (pre-garden), humorous (an ill-disguised Liam attempting to clandestinely dump a wheelbarrow of sod and flowers onto a sidewalk is one of my favorites) and brightly cheerful (fantastical shrubs and flowers). The book ends many years later with the adult Liam and his young family enjoying gardening together on the same raised tracks."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "An author’s note at the end discusses Manhattan’s ",
      {
        "type": "link",
        "href": "http://www.thehighline.org/",
        "external": true,
        "children": [
          "High Line"
        ]
      },
      ", the inspiration for the story."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This is a lovely book to share with city, suburban and country kids alike from ages 4 and up. It might be a nice springboard for discussion around some larger issues having to do with greening urban areas, rails-to-trails and other trackbed conversions and the power of one person to inspire many other to create positive change."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "p.s. – Peter Brown won ",
      {
        "type": "link",
        "href": "http://www.cbcbooks.org/news/22",
        "external": true,
        "children": [
          "Illustrator of the Year"
        ]
      },
      " at the Children’s Choice Book Awards earlier this month for this beautiful book."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
