import type { ContentBlock } from '../content/types';

const content = [
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
      {
        "type": "link",
        "href": "http://www.schoollibraryjournal.com/blog/1790000379/post/1220050922.html?nid=3713",
        "external": true,
        "children": [
          "School Libary Journal"
        ]
      },
      " has the skinny on loads of forthcoming kids books. Several look like good reads for vegetarian and vegan kids. ",
      {
        "type": "emphasis",
        "children": [
          "Moon Bear"
        ]
      },
      " by Brenda Z. Guiberson and Ed Young promises to expose young readers to the truth about ",
      {
        "type": "link",
        "href": "http://www.animalsasia.org/index.php?UID=2J0NIOGTVCWA",
        "external": true,
        "children": [
          "bear bile farms"
        ]
      },
      ", while ",
      {
        "type": "emphasis",
        "children": [
          "Beautiful Yetta: The Yiddish Chicken"
        ]
      },
      " by ",
      {
        "type": "link",
        "href": "http://www.pinkwater.com/",
        "external": true,
        "children": [
          "Daniel Pinkwater"
        ]
      },
      " details the escape of a Yiddish-speaking hen who sets out to rescue Spanish-speaking parrots in the Bronx."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I also can’t wait to read ",
      {
        "type": "link",
        "href": "http://www.schoollibraryjournal.com/blog/1790000379/post/1360050136.html?nid=2413&rid=##reg_visitor_id##",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Forever Friends"
            ]
          }
        ]
      },
      " — whose cover features a bird and a rabbit — by the super-talented ",
      {
        "type": "link",
        "href": "http://www.carinberger.com/index.html",
        "external": true,
        "children": [
          "Carin Berger"
        ]
      },
      " whose ",
      {
        "type": "emphasis",
        "children": [
          "Little Leaf"
        ]
      },
      " is an absolutely gorgeous book (that I can’t believe I haven’t reviewed yet). Other interesting books coming out soon: ",
      {
        "type": "emphasis",
        "children": [
          "Nico & Lola"
        ]
      },
      " by Meggan Hill and Susan M. Graunke; ",
      {
        "type": "link",
        "href": "http://www.schoollibraryjournal.com/blog/1790000379/post/300050830.html",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Face to Face with Manatees"
            ]
          }
        ]
      },
      " by Brian Skerry; and ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.schoollibraryjournal.com/blog/1790000379/post/390050639.html",
            "external": true,
            "children": [
              "Mr. Badger and Mrs. Fox: The Meeting"
            ]
          }
        ]
      },
      "by Brigette Luciani and Eve Tharlet."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
