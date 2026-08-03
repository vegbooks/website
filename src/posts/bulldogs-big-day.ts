import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/12/h0613-bulldogsbigd-4cc.jpg",
    "alt": "Bulldog’s Big Day",
    "href": "/media/2010/12/h0613-bulldogsbigd-4cc.jpg",
    "width": 210,
    "height": 251,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "What’s an out-of-work bulldog to do when he’s too afraid of heights to wash windows, too allergic to flowers to assist a painter who’s capturing their beauty, and too enthralled by books to shelve instead of read them at a bookshop? In ",
      {
        "type": "emphasis",
        "children": [
          "Bulldog’s Big Day"
        ]
      },
      " by ",
      {
        "type": "link",
        "href": "http://www.katemcmullan.com/",
        "external": true,
        "children": [
          "Kate McMullan"
        ]
      },
      " and Pascal Lemaitre, slated for release in February, we discover the answer is to open a cookie bakery!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Work is portrayed not as something you have to do, but something you want to do. Not only do I admire Bulldog’s entrepreneurial spirit and desire to contribute to his community, but I love love love that the recipe featured in the back for Bulldog’s Oatmeal-Carrot Cookies is ",
      {
        "type": "link",
        "href": "http://vegancookies.wordpress.com/recipes/",
        "external": true,
        "children": [
          "vegan"
        ]
      },
      " and, as the name suggests, incorporates veggies. (The author even points out specifically that they do not contain eggs.) Many veg families will already have all the ingredients in their pantry — the only one that may require a trip to the market is coconut oil."
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
