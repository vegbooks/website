import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/08/9781584691723.jpg",
    "alt": "Granny’s Clan",
    "href": "/media/2012/08/9781584691723.jpg",
    "width": 210,
    "height": 255,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I learned a lot about orcas and their families reading my review copy of ",
      {
        "type": "link",
        "href": "https://www.kirkusreviews.com/book-reviews/dr-sally-hodson/grannys-clan/",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Granny’s Clan"
            ]
          }
        ]
      },
      " and was excited to discover that the characters in the story are actually real wild orcas in the Pacific Northwest. A children’s book steeped in years of observation (forty years of observing Granny’s and her clan in real life – Granny alone is believed to be about 100 years old!), it is one we read slowly and deliberately. Ann Jones’ beautiful illustrations distinguish the orcas from one another by real variations in their markings. This attention to detail makes it a little hard for younger children to follow along but my daughter could easily tell which orca was an adult and which was a child."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Dr. Sally Hodson’s text follows Granny from helping a newborn orca to the ocean surface for his first crucial breaths. The baby is Granny’s great-grandchild, welcomed by the other family members traveling with Granny. (Granny is now a great-great-grandmother, actually: ",
      {
        "type": "link",
        "href": "http://blogs.seattletimes.com/today/2012/08/new-baby-orca-born-to-j-pod/",
        "external": true,
        "children": [
          "http://blogs.seattletimes.com/today/2012/08/new-baby-orca-born-to-j-pod/"
        ]
      },
      "). There are details about catching and eating salmon as a family that bring up predation with veg children but the focus is on the teamwork the family employs and the learning done by a young orca that is watching. The family goes on to avoid a speedboat and wave at people on whale watching trips on hover boats with quieter engines than the aggressive speedboat."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I especially loved how Granny sings to two rambunctious young orcas that do not want to sleep. Very relatable for young children along with the family reunion of sorts at the end. A “superpod” of orcas gather together as, “[a]ll the clan families, mothers and grandmothers, daughters and sons, brothers and sisters, uncles and aunties, grandsons and granddaughters come together again.” Hopefully all children can relate to a family unit (whatever the composition) that finds food, sings, plays, learns, and comes together."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Geared to kids ages 4 to 8, this book would be great to read on ",
      {
        "type": "link",
        "href": "http://www.grandparents.com/gp/topics/national-grandparents-day.html",
        "external": true,
        "children": [
          "National Grandparents Day"
        ]
      },
      " (September 9). ",
      {
        "type": "emphasis",
        "children": [
          "How will you be celebrating?"
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
