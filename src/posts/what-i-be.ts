import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/03/what-i-be.jpg",
    "alt": "What I Be",
    "href": "/media/2011/03/what-i-be.jpg",
    "width": 210,
    "height": 169,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Ever since I first heard the deep baritone, political stylings of ",
      {
        "type": "link",
        "href": "http://www.youtube.com/watch?v=KqgHosrqJ8o&feature=mfu_in_order&list=UL",
        "children": [
          "Michael Franti and his vibrant band Spearhead"
        ]
      },
      ", I haven’t been able to satiate my appetite for their music. He’s produced album after album, each with a new, distinct taste, the several latest being highly energetic and boogie-worthy. If you have the chance to catch Spearhead live, seize it! You’ll not only be supporting a fellow plant-eater, but a wonderful group of musicians who are passionate about their songs ",
      {
        "type": "emphasis",
        "children": [
          "and"
        ]
      },
      " the welfare of people, planet and animals. And you’ll experience a hypnotically fun evening of rhythm, dance and the musings of Franti, a born entertainer with a charismatic personality."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Gifted with two sons, Franti adapted one of his songs into a children’s book on self-acceptance, ",
      {
        "type": "link",
        "href": "http://michaelfranti.com/store/featured/what-i-be-childrens-book",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "What I Be"
            ]
          }
        ]
      },
      ". An adorable corn roll-sporting African American boy leads readers through Franti’s poetic lyrics which liken him to natural phenomenon and their powerful natures, such as: “If I were the rains, I’d wash away the whole world’s pain and bring the gift of cool like ice cream trucks on sunny days.” The adjunct graphics depict animals and people with handicaps rejoicing under a rainbow on one spread, while the other shows our protagonist distributing “Happy Cow” organic *rice* cream cones in the neighborhood."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Beyond the perk of embracing the natural world in this feel-good book, kids will enjoy the accompanying CD which features a reading by Franti and his son Adé superimposed on Youssoupha Sidibe’s West African harp. Ben Hodson’s capricious, yet empowering illustrations also help to make this a best buy."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4+."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
