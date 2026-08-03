import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/06/hogwash-jacket-final1.jpg",
    "alt": "Hogwash",
    "href": "/media/2011/06/hogwash-jacket-final1.jpg",
    "width": 210,
    "height": 214,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Kids will laugh aloud as they turn the pages of ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.publishersweekly.com/978-0-316-98840-7",
            "external": true,
            "children": [
              "Hogwash"
            ]
          }
        ]
      },
      ". It’s silly and funny, ",
      {
        "type": "emphasis",
        "children": [
          "and"
        ]
      },
      " it has an important message about respecting animals for who they are."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "In the story, Farmer decides to bathe all of his animals including the dogs, cats, goats, cows, ducks and pigs. However, the pigs have other plans. They do not want to be washed with soap and water! Farmer tries every trick he can think of to wash the pigs, but the pigs outsmart him in every attempt. They board up their pen, wear umbrellas and rubber suits, and hold up various signs including one that says “No Hogwash for us today. Pigs love dirt—so go away.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "In his final effort to wash the pigs, Farmer sets out on his plane with plans to squirt the pigs with water and shampoo from above. However, the plane runs out of gas and he crashes. He ends up landing headfirst into the pigs’ muddy pen. Instead of being angry, he has a great time splashing around in the mud with the pigs. From then on Farmer gives up trying to bathe the pigs and actually joins them every other day in their pen with his swimsuit on and towel in hand for a mud bath!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Animal lovers will cheer at this book’s great ending. In today’s society, the Farmer (nowadays, agribusiness) usually comes out on top, but not in this book. The pigs win here (at least in one of their battles…hopefully they will fight just as hard for their lives). They didn’t want to be washed with soap and water (in fact, pigs are ",
      {
        "type": "link",
        "href": "http://www.veganpeace.com/animal_facts/Pigs.htm",
        "external": true,
        "children": [
          "extremely clean animals"
        ]
      },
      ", despite the stereotype), so they stood their ground and they won. It’s a happy ending for the pigs…and for the Farmer who ends up joining them for mud baths."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 3-8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
