import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/08/m-gonna-like-me.jpg",
    "alt": "I’m Gonna Like Me",
    "href": "/media/2010/08/m-gonna-like-me.jpg",
    "width": 210,
    "height": 176,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "In this day and age, kids can use all the positive reinforcement they can get in feeling good about themselves. Other children and society at large can be rather cruel, even to the youngest of minds, pointing out personal flaws or quirky differences. Jamie Lee Curtis’ ",
      {
        "type": "link",
        "href": "http://www.jamieleecurtisbooks.com/iglm.html",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "I’m Gonna Like Me"
            ]
          }
        ]
      },
      " is a call to arms, getting youngsters on board with self appreciation and celebration."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Narrated by a wannabe firefighter and a forward-thinking fashionista, the book traverses common scenarios that might make a child uncomfortable, upset and even proud: having the wrong answer in class, being picked last for a team, thanking someone for a less-than-exciting birthday present, etc. In each instance, our little champions rhyme their way through and admit “I’m gonna like me when….”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "For veggie readers, the best tidbit is the cafeteria spread where we read, “I’m gonna like me when I’m sharing my lunch ‘cause just like bananas friends come in a bunch.” In scouring the accompanying drawing we see a few progressive youth, one sporting a Gandhi lunchbox that proclaims “No Beef Allowed” and contains within a small carton of soymilk. Another is pouring Tofu Helper (hot dog flavored) onto the infamous white cube. Last, but not least, is an adorable boy chomping down on the contents of his Cup o’ Lettuce and sitting adjacent to a girl enjoying Global Warming Soup."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Parents should take note that other kids enjoy items like “T-bone on a Stick” and “Beef Jerky Bow Tie,” and later on in the book, the young fashionista makes octopus stew with her grandmother. I also felt bad for a pet turtle who seemed to be carried around an awful lot in a small cage. But, as vegans, we’re all about compassion, tolerance and changing hearts and minds, right? Why not do it with a bit of flare and enhanced self-esteem à la Jamie Lee Curtis?"
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
