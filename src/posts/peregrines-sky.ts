import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/04/peregrine-cover.jpg",
    "alt": "Peregrine’s Sky",
    "href": "/media/2012/04/peregrine-cover.jpg",
    "width": 210,
    "height": 166,
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
            "href": "http://www.wnpa.org/Merchant2/merchant.mv?Screen=PROD&Store_Code=WNPAS&Product_Code=P1210",
            "external": true,
            "children": [
              "Peregrine’s Sky"
            ]
          }
        ]
      },
      " traces the early life of a young peregrine falcon and her family. From Peregrine’s parents’ mating rituals to her early moments out of her shell (and her loud brothers) to the nerve wracking moments of her uncertain first flight, this story is richly informative about this once-endangered species (peregrines were removed from the federal Endangered Species list in 1999)."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "While the story focuses on a specific family group, sidebars provide general knowledge and background regarding the biology of this species and it’s relationship to the ecosystem. The afterward is not to be missed. It is a short but comprehensive overview of the falcon, including information about the species’ migratory routes, historical significance, ",
      {
        "type": "link",
        "href": "http://library.fws.gov/ES/peregrine06.pdf",
        "external": true,
        "children": [
          "decline due to DDT"
        ]
      },
      " and current recovery and nest site choices (peregrines have been habituating to urban environments, including ",
      {
        "type": "link",
        "href": "http://www.nbcbayarea.com/news/local/Falcons-Hatch-in-San-Francisco-146047255.html",
        "external": true,
        "children": [
          "San Francisco"
        ]
      },
      ", ",
      {
        "type": "link",
        "href": "http://amps-webflash.amps.ms.mit.edu/public/MIT/2011-2012/raptorCAM/",
        "external": true,
        "children": [
          "Cambridge"
        ]
      },
      ", ",
      {
        "type": "link",
        "href": "http://www.nj.gov/dep/fgw/peregrinecam/index.html",
        "external": true,
        "children": [
          "Jersey City"
        ]
      },
      " and ",
      {
        "type": "link",
        "href": "http://www.falconcam-cmnh.org/news.php",
        "external": true,
        "children": [
          "Cleveland"
        ]
      },
      "). The glossary at the end of the book provides definitions for potentially unfamiliar terms such as tiercels, eyas and falconers."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Caregivers of sensitive children will want to know that, as one would expect in a book about raptors, there are indeed illustrations depicting the birds of prey eating their catches. There is also a description of Peregrine’s first successful nab of a smaller bird."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Recommended for kids who are ready to learn about raptors and endangered species conservation; ages 4 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
