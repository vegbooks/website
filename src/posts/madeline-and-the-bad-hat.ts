import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/01/madeline.jpg",
    "alt": "Madeline and the Bad Hat",
    "href": "/media/2011/01/madeline.jpg",
    "width": 210,
    "height": 301,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "http://www.madeline.com/",
        "external": true,
        "children": [
          "Madeline"
        ]
      },
      " is a familiar and popular series to many so I thought I would introduce the stories to my daughter. We picked out this particular one by chance thinking it was about a hat, of course. But we were surprised to find Ludwig Bemelmans refers to the idiom of the bad hat, and the story is really about the Spanish Ambassador’s rambunctious boy who moves in next door to 12 little girls and their compassionate nun/caretaker, Miss Clavel."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The little boy, Pepito, makes faces at the girls, aims his slingshot at the girls during their morning exercise, dresses as a ghost to scare them, brags about his superior skills, and then invites them to visit and see his menagerie, claiming, “the hunting in this neighborhood is exceptionally good.” At this point in the story, I was wondering if I had selected the wrong Madeline to read. But Madeline kept me interested with her discouraging responses to Pepito’s bullfighting costume and the girls’ distress over his mistreatment of animals (veg parents note: there is brief mention and images implying chicken slaughter, meat eating, and attempted cat torture). Miss Clavel is constantly giving Pepito the benefit of the doubt saying how polite and nice he is and that “he needs an outlet for his energy” and is “simply misunderstood” until his behavior culminates in traumatic injury after attempting to sacrifice a cat to a pack of dogs. Although the girls all visit the recuperating Pepito, Madeline does not hesitate to tell him he deserved what he got for mistreating the cat! Pepito promises he has changed his ways."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "And this is where I was amazed by the turn of the story because Pepito stuck to his promise and becomes an animal rights advocate! I won’t give away the details but I was happily surprised by such a successful and popular author promoting animal rights and being so clearly veg-friendly, especially in some of his wording paired in rhyme. I especially like the message that a meat-eater with little or no care about animals’ well-being can change and grow into a more conscious and compassionate human. Hopefully it does not require a traumatic injury for individuals to get to that point."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The story flowed rather quickly so the violence is underplayed but the images and wording were quite descriptive. Bemelmans writes clever rhymes and idioms that are fun to read. The illustrations were sketchy drawings and paintings with an appealing childish energy that filled in what the words did not say. If you have not read this Madeline, go check out ",
      {
        "type": "link",
        "href": "http://www.commonsensemedia.org/book-reviews/Madeline-Bad-Hat.html",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "The Bad Hat"
            ]
          }
        ]
      },
      "."
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
