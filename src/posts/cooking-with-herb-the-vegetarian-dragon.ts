import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/07/i-stock-000009594887-x-small.jpg",
    "alt": "Cooking With Herb: The Vegetarian Dragon",
    "href": "/media/2011/07/i-stock-000009594887-x-small.jpg",
    "width": 210,
    "height": 288,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Although my kiddo and I aren’t the target demographic for this children’s cookbook, described by author Jules Bass as “LOVE children: L=lacto O=ova V=veggie E=eaters” (in other words, vegetarians who eat dairy and eggs), we have enjoyed leafing through its colorful pages and trying a couple recipes. The book’s vibrant colors, funny illustrations, and managable size make it an appealing cookbook to a kindergartener."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Last week, we made steaming bowls of Herb’s Chili Con “No” Carne one night, and Snap-Dragon’s Stone Soup another. Both recipes called for small amounts of cheese, but as we’re vegan, we used ",
      {
        "type": "link",
        "href": "http://www.daiyafoods.com/",
        "external": true,
        "children": [
          "Daiya"
        ]
      },
      " instead. (Other families that forgo dairy could use ",
      {
        "type": "link",
        "href": "http://www.eatparma.com/",
        "external": true,
        "children": [
          "Parma"
        ]
      },
      " or skip the cheese altogether – it’s certainly not integral in either recipe.) Our whole family really enjoyed the chili, which, as the carnivorous dinosaur Meathook says in the illustration, has a nice meaty texture. The stone soup was certainly a fun novelty — after all, the recipe calls for using a real stone — but was pretty bland without the lovely fresh basil puree (pesto), so it didn’t keep well for leftovers."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "For a children’s cookbook, I found that the recipes weren’t as straightforward as I’d hoped for. I love the illustrated step-by-step instructions that some ",
      {
        "type": "link",
        "href": "/reviews/salad-people-and-more-real-recipes-a-new-cookbook-for-preschoolers-and-up/",
        "children": [
          "similar cookbooks"
        ]
      },
      " employ, particularly for beginning readers, and I think that would be a great approach for this book, if a new edition is ever published. As an adult, I also was confused by some of the measurements, particularly when I went to the store to buy ingredients and realized that I wasn’t sure what size can of tomatoes to buy."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The book is out of print, but widely available for used purchase. Recommended for vegetarian children ages 6 to 10, with adult help."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "p.s. – I’ve said it before, and I’ll say it again: I’d love to see a vegan children’s cookbook published! ",
          {
            "type": "link",
            "href": "https://twitter.com/#!/IsaChandra",
            "external": true,
            "children": [
              "Isa Chandra Moskowitz"
            ]
          },
          ", ",
          {
            "type": "link",
            "href": "https://twitter.com/#!/AliciaSilv",
            "external": true,
            "children": [
              "Alicia Silverstone"
            ]
          },
          ", ",
          {
            "type": "link",
            "href": "https://twitter.com/#!/BonzaiAphrodite",
            "external": true,
            "children": [
              "Sayward Rebhal"
            ]
          },
          "— help a vegan mama out?"
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
