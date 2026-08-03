import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "alt": "Now Hiring: White House Dog",
    "href": "/media/2010/06/boy-book-pic-from-istock1.jpg",
    "width": 210,
    "height": 140,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Loosely based on Malia and Sasha Obama’s quest for a canine companion, ",
      {
        "type": "link",
        "href": "http://www-tc.pbskids.org/martha/parentsteachers/pdf/MarthaRABC_Session4.pdf",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Now Hiring"
            ]
          }
        ]
      },
      " boasts a simple storyline where the girls take the dog search into their own hands. They fashion a homemade “Now Hiring” sign for the front lawn and receive half a dozen candidates on a particularly busy day for “the most important house in the land.” The girls’ parents assume the ding dongs of the doorbell are the high-collared invitees for the evening’s party. Names dropped include the Dalai Lama, the Queen of England, the Grand Duke of Luxembourg, and the Emir of Qatar."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The dogs all make their spiel – in rhyme – as to why they should be selected for the vacancy, and in the end only Lee, a hypoallergenic pooch, makes the cut as “top dog.” The girls ask their parents about the fate of the other dogs. Let’s just say that the President now has a new canine cabinet."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Unlike the actual “adoption” process the Obamas went through, this tale doesn’t outright promote the fact that “Lee” is a purebred Portuguese Water Dog (although the breeds of the new cabinet members are mentioned). Lee, in fact, states that he spent some time in the pound. In short, this is a sweet, dog-friendly look at the White House from a kid’s perspective."
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
