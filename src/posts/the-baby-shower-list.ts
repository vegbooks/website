import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2009/12/heflfc1.jpg",
    "alt": "The Baby Shower List",
    "href": "/media/2009/12/heflfc1.jpg",
    "width": 207,
    "height": 311,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "strong",
        "children": [
          "By ",
          {
            "type": "link",
            "href": "/about/",
            "children": [
              "JESSICA ALMY"
            ]
          }
        ]
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "My sister-in-law and one of my dearest friends are both expecting. So me being me, I’m planning to give them books and diapers! (What else do you really need for a baby anyways?)"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "While I’m shopping, I decided to compile a list of my favorite (veg) parenting books."
    ]
  },
  {
    "type": "list",
    "ordered": true,
    "items": [
      [
        {
          "type": "strong",
          "children": [
            {
              "type": "link",
              "href": "http://www.superbabyfood.com/",
              "external": true,
              "children": [
                {
                  "type": "emphasis",
                  "children": [
                    "Super Baby Food"
                  ]
                }
              ]
            }
          ]
        },
        "by Ruth Yaron: How-tos of preparing homemade, organic baby food with a strong emphasis on plant-based and vegetarian foods."
      ],
      [
        {
          "type": "strong",
          "children": [
            {
              "type": "link",
              "href": "http://www.goodreads.com/book/show/1008645.Raising_Vegetarian_Children_A_Guide_to_Good_Health_and_Family_Harmony",
              "external": true,
              "children": [
                {
                  "type": "emphasis",
                  "children": [
                    "Raising Vegetarian Children: A Guide to Good Health and Family Harmony"
                  ]
                }
              ]
            }
          ]
        },
        "by Joanne Stepaniak and Vesanto Melina: Nutritional and social advice, plus fantastic vegan recipes. We love the muscle muffins!"
      ],
      [
        {
          "type": "link",
          "href": "http://www.vegfamily.com/book-reviews/vegetarianbaby.htm",
          "external": true,
          "children": [
            {
              "type": "emphasis",
              "children": [
                {
                  "type": "strong",
                  "children": [
                    "New Vegetarian Baby"
                  ]
                }
              ]
            }
          ]
        },
        " by Sharon K. Yntema and Christine Beard: Age-by-age feeding guidelines and nutritional information."
      ],
      [
        {
          "type": "link",
          "href": "http://www.healthyeatingseries.com/excerpt2.html",
          "external": true,
          "children": [
            {
              "type": "emphasis",
              "children": [
                {
                  "type": "strong",
                  "children": [
                    "Healthy Eating for Life for Children"
                  ]
                }
              ]
            }
          ]
        },
        " by Physicians Committee for Responsible Medicine: Draws on nutritional research, such as the China Study, to make the case that children should be eating exclusively vegan foods. Includes a section on healthy eating during pregnancy."
      ],
      [
        {
          "type": "link",
          "href": "http://veganlunchbox.blogspot.com/",
          "external": true,
          "children": [
            {
              "type": "emphasis",
              "children": [
                {
                  "type": "strong",
                  "children": [
                    "Vegan Lunch Box: 130 Amazing, Animal-Free Lunches Kids and Grown-ups Will Love!"
                  ]
                }
              ]
            }
          ]
        },
        " by Jennifer McCann: From the simple to the fancy, this cookbook provides great menu ideas and recipes that the whole family will enjoy."
      ],
      [
        {
          "type": "link",
          "href": "http://www.veganfamilyfavorites.com/",
          "external": true,
          "children": [
            {
              "type": "emphasis",
              "children": [
                {
                  "type": "strong",
                  "children": [
                    "Vegan Family Favorites"
                  ]
                }
              ]
            }
          ]
        },
        " by Erin Pavlina: Lots of kid-friendly recipes. Our favorite is the lemon-garlic asparagus!"
      ]
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Any other suggestions?"
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
