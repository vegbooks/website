import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/09/naturallywild.jpg",
    "alt": "Naturally Wild Musicians",
    "href": "/media/2011/09/naturallywild.jpg",
    "width": 210,
    "height": 244,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "You may remember Canadian Peter Christie as being the author of ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "/reviews/the-curse-of-akkad-climate-upheavals-that-rocked-human-history/",
            "children": [
              "The Curse of Akkad"
            ]
          }
        ]
      },
      ", which we’ve previously reviewed here on Vegbooks. He’s generally well-known in the kid lit world for his fun, accessible books on animal behavior. The case is no different with ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://site.annickpress.com/catalog/catalog.aspx?Title=Naturally+Wild+Musicians",
            "external": true,
            "children": [
              "Naturally Wild Musicians"
            ]
          }
        ]
      },
      ", an impressive survey of animals who make music for a reason and with quite some style."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Used to communicate, proliferate, or survive, music is found the world over in countless species. Male jumping spiders drum a complicated rhythm with their feet in the Sonoran Desert to attract a lady friend. The four types of Scandinavian fruit flies that often find themselves together enjoying decaying fruit will use song to decipher one species from another. American toads use song to separate family members from potential mates. And these are just the tip of the iceberg in Christie’s info-packed 48 paged text."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "It was once argued that humans were superior to animals because only we made tools, appreciated nature’s beauty, shared and cooperated in society, and a host of other arguments that have now been debunked. In ",
      {
        "type": "emphasis",
        "children": [
          "Naturally Wild Musicians"
        ]
      },
      ", Christie shows us that music – its utilization and evolution – is also something humans share with animals."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 8-11."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
