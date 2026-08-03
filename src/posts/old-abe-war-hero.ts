import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/08/old-abe.jpg",
    "alt": "Old Abe, Eagle Hero",
    "href": "/media/2011/08/old-abe.jpg",
    "width": 210,
    "height": 297,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "You don’t hear much historical lore about bald eagles outside of them being known as the United States’ national bird, and even that was famously contested by Benjamin Franklin’s favoritism for the American turkey. ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.oldabeeaglehero.com/",
            "children": [
              "Old Abe, Eagle Hero"
            ]
          }
        ]
      },
      " brings history to life and shows readers the importance of mascots in wartime."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Stolen as a fledgling from his nest by a Native American, Old Abe was sold to Farmer McCann who raised him alongside his family. With an injured leg, McCann was unable to serve with the Union soldiers during the Civil War and sent Old Abe in his place. Carried off into 25 battles and many more skirmishes, Old Abe sat upon his high perch, screaming at the enemy and providing courage to his compatriots. With only a few feathers ruffled during battle, Old Abe became a famous, household name and retired in the Wisconsin Capitol Building."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Author Patrick Young does a wonderful, authoritative job of including a wide variety of affairs that Old Abe had been party to: from retellings of dramatic and suspenseful war-related incidents to the soldiers teaching the bird how to shake to P.T. Barnum’s lucrative bid of $20,000 for the mascot. Anne Lee’s watercolor drawings and selection of hues capture the era and the subject matter beautifully and will enthrall young readers."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Overall, a great publication to add to the growing number of civil war history books for kids, although it does not dwell at all on why the war started. I wish there had been an educational guide for parents and teachers. The ethics of taking a baby wild animal and putting him into battle certainly causes concern and warrants discussion."
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
