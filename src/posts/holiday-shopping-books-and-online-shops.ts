import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "paragraph",
    "children": [
      "This year, Santa is bringing kiddo books! In celebration of the winter holidays, I’ve compiled two lists for you: one of the books that have gotten top reviews on Vegbooks and the other of online storefronts that benefit veg-related charities."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "strong",
        "children": [
          "Vegbooks Favorite Reads"
        ]
      }
    ]
  },
  {
    "type": "list",
    "ordered": true,
    "items": [
      [
        {
          "type": "emphasis",
          "children": [
            {
              "type": "link",
              "href": "http://vegbooks.wordpress.com/2009/11/06/busy-kitties/",
              "external": true,
              "children": [
                "Busy Kitties"
              ]
            }
          ]
        },
        "by John Schindel and Sean Franzen – ages 0-3"
      ],
      [
        {
          "type": "link",
          "href": "http://vegbooks.wordpress.com/2009/10/27/who-is-the-beast/",
          "external": true,
          "children": [
            {
              "type": "emphasis",
              "children": [
                "Who Is the Beast?"
              ]
            }
          ]
        },
        " by Keith Baker – ages 0-8"
      ],
      [
        {
          "type": "emphasis",
          "children": [
            {
              "type": "link",
              "href": "http://vegbooks.wordpress.com/2009/11/04/horton-hears-a-who-the-book/",
              "external": true,
              "children": [
                "Horton Hears a Who"
              ]
            }
          ]
        },
        "by Dr. Seuss – ages 3-8"
      ],
      [
        {
          "type": "link",
          "href": "http://vegbooks.wordpress.com/2009/11/17/make-way-for-ducklings/",
          "external": true,
          "children": [
            {
              "type": "emphasis",
              "children": [
                "Make Way for Ducklings"
              ]
            }
          ]
        },
        " by Robert McCloskey – ages 3-8"
      ],
      [
        {
          "type": "emphasis",
          "children": [
            {
              "type": "link",
              "href": "http://vegbooks.wordpress.com/2009/11/16/the-lady-and-the-spider-guest-review-by-sharon-young/",
              "external": true,
              "children": [
                "The Lady and Spider"
              ]
            }
          ]
        },
        "by Faith McNulty and Bob Marstall – ages 4-8*"
      ],
      [
        {
          "type": "link",
          "href": "http://vegbooks.wordpress.com/2009/11/14/all-in-a-day/",
          "external": true,
          "children": [
            {
              "type": "emphasis",
              "children": [
                "All In A Day"
              ]
            }
          ]
        },
        " by Cynthia Rylant and Nikki McClure – ages 4-8"
      ],
      [
        {
          "type": "link",
          "href": "http://vegbooks.wordpress.com/2009/11/15/the-magic-finger/",
          "external": true,
          "children": [
            {
              "type": "emphasis",
              "children": [
                "The Magic Finger"
              ]
            }
          ]
        },
        " by Roald Dahl and Quentin Blake – ages 8-12"
      ]
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "* This book is out of print; look for secondhand copies."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "strong",
        "children": [
          "Fabulous Book Storefronts That Support Charity"
        ]
      }
    ]
  },
  {
    "type": "list",
    "ordered": true,
    "items": [
      [
        {
          "type": "link",
          "href": "https://secure2.vegsource.com/farmsanc/item.cgi?rm=view_list&category_id=41",
          "external": true,
          "children": [
            "Shop at Farm Sanctuary"
          ]
        }
      ],
      [
        {
          "type": "link",
          "href": "http://www.nrdc.org/joinGive/shop/bookkids.asp",
          "external": true,
          "children": [
            "Natural Resources Defense Council: Shop for Books"
          ]
        }
      ],
      [
        {
          "type": "link",
          "href": "http://www.hsus.org/press_and_publications/humane_society_press/",
          "external": true,
          "children": [
            "Humane Society Press"
          ]
        }
      ],
      [
        {
          "type": "link",
          "href": "http://www.vegan.org/resources/reading/index.html",
          "external": true,
          "children": [
            "Vegan Action"
          ]
        }
      ]
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
