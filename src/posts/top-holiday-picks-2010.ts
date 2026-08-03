import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/03/granny-low-res.jpg",
    "alt": "Top Holiday Picks 2010",
    "href": "/media/2010/03/granny-low-res.jpg",
    "width": 210,
    "height": 210,
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
      "If you’re making a list and checking it twice, consider these titles for the kids in your life. They’ve all gotten positive reviews on Vegbooks in the past year."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "strong",
        "children": [
          {
            "type": "emphasis",
            "children": [
              {
                "type": "link",
                "href": "/reviews/granny-gomez-and-jigsaw/",
                "external": true,
                "children": [
                  "Granny Gomez and Jigsaw"
                ]
              }
            ]
          }
        ]
      },
      "by Deborah Underwood and Scott Magoon (ages 3-7). Shop online at ",
      {
        "type": "link",
        "href": "https://secure2.vegsource.com/farmsanc/item.cgi?rm=edit_item&item_id=72705",
        "external": true,
        "children": [
          "Farm Sanctuary"
        ]
      },
      " and a portion of the purchase price goes to caring for pigs in the organization’s New York and California sanctuaries."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "strong",
        "children": [
          {
            "type": "link",
            "href": "/reviews/happy-feet/",
            "children": [
              "“Happy Feet”"
            ]
          }
        ]
      },
      " (ages 5 and up). Shop through ",
      {
        "type": "link",
        "href": "http://astore.amazon.com/oceana-20/detail/B000MV9026",
        "external": true,
        "children": [
          "Oceana’s Amazon link"
        ]
      },
      " and real, live penguins and fish will be happier too."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "strong",
        "children": [
          {
            "type": "emphasis",
            "children": [
              {
                "type": "link",
                "href": "/reviews/kids-making-a-difference-for-animals/",
                "children": [
                  "Kids Making a Difference for Animals"
                ]
              }
            ]
          }
        ]
      },
      "by Nancy Furstinger and Sheryl L. Pipe (ages 9-12). Shop through the ",
      {
        "type": "link",
        "href": "http://www.aspcaonlinestore.com/index.php?productID=1484",
        "external": true,
        "children": [
          "ASPCA website"
        ]
      },
      "and you’ll be making a difference for dogs and cats in shelters!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "strong",
        "children": [
          {
            "type": "emphasis",
            "children": [
              {
                "type": "link",
                "href": "/reviews/oil-spill/",
                "children": [
                  "Oil Spill!"
                ]
              }
            ]
          }
        ]
      },
      "by Melvin Berger (ages 5-9). Use ",
      {
        "type": "link",
        "href": "http://www.nwf.org/Kids/Ranger-Rick/Books/Environmental-Issues/Oil-Spill.aspx",
        "external": true,
        "children": [
          "this link"
        ]
      },
      " and the National Wildlife Federation will get a portion of the proceeds in their work to rescue wildlife and prevent disasters."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "strong",
        "children": [
          {
            "type": "emphasis",
            "children": [
              {
                "type": "link",
                "href": "/reviews/so-you-love-animals/",
                "children": [
                  "So, You Love Animals"
                ]
              }
            ]
          }
        ]
      },
      "by Zoe Weil (ages 9-12). Support the ",
      {
        "type": "link",
        "href": "http://humaneeducation.org/products/view/34",
        "external": true,
        "children": [
          "Institute for Humane Education"
        ]
      },
      " and help instill the love of animals in other kids too."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Also, if there are any expectant or new parents on your list, check out PCRM’s ",
      {
        "type": "strong",
        "children": [
          {
            "type": "link",
            "href": "http://www.pcrm.org/shop/forlife/children.html",
            "external": true,
            "children": [
              {
                "type": "emphasis",
                "children": [
                  "Healthy Eating for Life for Children"
                ]
              }
            ]
          }
        ]
      },
      ", which appeared on our ",
      {
        "type": "link",
        "href": "/reviews/the-baby-shower-list/",
        "children": [
          "Baby Shower List"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Veg-oriented shoppers can also shop through the links on ",
      {
        "type": "link",
        "href": "http://www.veganoutreach.org/cfi/support/shop.htm",
        "external": true,
        "children": [
          "Vegan Outreach’s website"
        ]
      },
      ", visit the online stores of ",
      {
        "type": "link",
        "href": "http://www.petacatalog.com/catalog/Books-18-1.html",
        "external": true,
        "children": [
          "PETA"
        ]
      },
      " or the ",
      {
        "type": "link",
        "href": "http://www.nrdc.org/joingive/shop/bookkids.asp",
        "external": true,
        "children": [
          "Natural Resources Defense Council"
        ]
      },
      ", or buy veg-friendly books through the Amazon widget on Vegbooks (in the sidebar on the right) to help defray our operational costs."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
