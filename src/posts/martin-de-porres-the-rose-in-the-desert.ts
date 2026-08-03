import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2013/01/martin-de-porres-hres.jpg",
    "alt": "Martín de Porres: The Rose in the Desert",
    "href": "/media/2013/01/martin-de-porres-hres.jpg",
    "width": 210,
    "height": 245,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Growing up in a Catholic, Mexican household, the saints were familiar faces. That of Saint Anthony, my mom’s personal favorite, could be found as a statue in the garden, another item dangling on her keychain, and as a little placard placed in the car to protect us on the brazen streets of Miami. I myself opted for the most animal-friendly role model I could find at the time, and that was St. Francis of Assisi, the man who could communicate with birds."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "If I could have a do-over of my confirmation, the Catholic rite of passage or sacrament whereby you’re indoctrinated as an adult into the church and allowed to pick a symbolic saint’s name as your own, I’d choose Martín de Porres, the patron saint of interracial relations and mixed race people, social justice, public education, and animal shelters. I’ll add vegetarians to that list. Born in Lima, Peru in 1579 to a Spanish nobleman and a freed black slave, Martín defied what others of his social rank and background would have faced. In the absolutely beautiful children’s book illustrated by David Diaz and written by Gary D. Schmidt, ",
      {
        "type": "link",
        "href": "http://www.hmhbooks.com/schmidt/martin.html",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Martín de Porres: The Rose in the Desert"
            ]
          }
        ]
      },
      ", the author writes throughout the tale, “Who is that strange boy?”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This boy learned how to be a cirujano, a surgeon, astounding those he helped with miraculous cures. He made a lemon tree grow overnight from just a seed, which bore fruit throughout the year. Although he was not of “pure blood” and could never be a priest, he entered into monastic life as a helper. And his way with animals was incomparable: “After Martin healed a wounded dog that had limped to the monastery, more beaten and starved dogs crawled to him from all over Lima. Under Martin’s tender hands, they came back to barking life. Father Lorenzana could not hear the church bells over their barking…So Martín brought the dogs home…” His human patients would recover and play alongside the rescued dogs."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Beyond these truly saintly attributes, Martín was a vegetarian (although there is no mention of this in this particular book) and was the first black saint in the Americas. His iconography is simply endearing. Usually depicted with a symbolic broom in that every task is sacred, he can also be seen sharing his dish of food with mice, dogs, cats, and even birds. ::swoon:: Saint Martín is a great role model and this book is a sweet read for those needing inspiration or another hero."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4 – 8."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "This book was received as a review copy."
        ]
      }
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
