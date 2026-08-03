import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/11/peaceable-forest.jpg",
    "alt": "Peaceable Forest: India’s Tale of Kindness to Animals",
    "href": "/media/2012/11/peaceable-forest.jpg",
    "width": 210,
    "height": 232,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "At the Los Angeles Green Festival, I had the pleasure of meeting ",
      {
        "type": "link",
        "href": "http://kosaely.com/",
        "external": true,
        "children": [
          "Kosa Ely"
        ]
      },
      ", author of the new children’s book ",
      {
        "type": "emphasis",
        "children": [
          "Peaceable Forest: India’s Tale of Kindness to Animals"
        ]
      },
      ". (You can see the book trailer ",
      {
        "type": "link",
        "href": "http://www.youtube.com/watch?v=ND5qZD3TB6o",
        "external": true,
        "children": [
          "here"
        ]
      },
      "). Kosa is just as sweet and compassionate as the ancient Vedic story told within her book."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The anti-hunting and pro-vegetarian tale has been preserved in India through oral narration, from generation to generation. Kosa has so thoughtfully crafted a written version of the story in ",
      {
        "type": "emphasis",
        "children": [
          "Peaceable Forest"
        ]
      },
      ", where an old man (the narrator) has gathered the animals around him to tell of the sage Narada who one day strolls through the trees playing his vina (a guitar-like instrument) alongside the contented forest-dwellers. He hears the cries of an injured fawn, pierced by a hunter’s arrow, and is determined to find the responsible party who has also maimed several other animals. He eventually finds the misguided hunter and has a wonderfully touching dialogue –"
    ]
  },
  {
    "type": "quote",
    "children": [
      {
        "type": "paragraph",
        "children": [
          "“The deer you shot today is just a child,” Narada reminded him.",
          {
            "type": "lineBreak"
          },
          " “She was gathering new grasses and flowers for her mother when your arrow hit her.”",
          {
            "type": "lineBreak"
          },
          " “The boar has five young children to care for.”",
          {
            "type": "lineBreak"
          },
          " “The rabbit was watching out for his brother when you shot him.”"
        ]
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Fast forward a bit. The hunter, Mrigari, breaks his bow and becomes vegetarian after Narada tells him, “You do not have to kill to eat. The earth produces fruits and vegetables, grains and beans. You will not go hungry.” Mrigari, it turns out, is the old man narrating the story."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Peaceable Forest"
        ]
      },
      " is an artfully crafted tale, with equally beautiful imagery from illustrator Anna Johansson. A must have for any vegetarian family. Be on the lookout for Kosa’s other kid lit titles that are in the works. She tells me they will also be pro-veg!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4 – 8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
