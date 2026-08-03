import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/04/bears-covercolor1.jpg",
    "alt": "Bears Barge In",
    "href": "/media/2010/04/bears-covercolor1.jpg",
    "width": 231,
    "height": 314,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "It’s no wonder that ",
      {
        "type": "link",
        "href": "http://www.jonisensel.com/bearsbargein.html",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Bears Barge In"
            ]
          }
        ]
      },
      " by Joni Sensel and Chris Bivins won an ",
      {
        "type": "link",
        "href": "http://www.aspcaonlinestore.com/index.php?productID=1954",
        "external": true,
        "children": [
          "ASPCA Henry Bergh award"
        ]
      },
      ". The book is fun and educational, and has a wonderful message about our relationship with other animals."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Years ago, I worked at a wildlife center, and much of our work was focused on remedying the ",
      {
        "type": "link",
        "href": "http://www.hsus.org/wildlife/urban_wildlife_our_wild_neighbors/solving_problems/humane_control/the_humane_approach_to_humanwildlife_conflicts.html",
        "external": true,
        "children": [
          "human-wildlife conflicts"
        ]
      },
      " that result when people encroach on animal habitat. I’ve seen firsthand what happens when people and wild animals try to use the same space — and how those conflicts are only compounded by a widely held fear of wild animals."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Teaching children not to fear other animals, and to consider their interests, is one of the most important jobs we have as parents, teachers, and caregivers. ",
      {
        "type": "emphasis",
        "children": [
          "Bears Barge In"
        ]
      },
      " illustrates beautifully why people need not fear even the largest and wildest of animals if only we leave them alone!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4-8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
