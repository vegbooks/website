import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/06/swan-song-cover.jpg",
    "alt": "Swan Song",
    "href": "/media/2011/06/swan-song-cover.jpg",
    "width": 210,
    "height": 295,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I can’t imagine a more ambitious project than creating a book of children’s poems and illustrations to pay tribute to species of animals now extinct — and yet, ",
      {
        "type": "link",
        "href": "http://www.poetryfoundation.org/children/article/242020",
        "children": [
          "J. Patrick Lewis"
        ]
      },
      " and Christopher Wormell have accomplished just that in ",
      {
        "type": "emphasis",
        "children": [
          "Swan Song"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Without speaking down to the reader or resorting to sing-songy verse, these poems focus on some of the animals who passed from this world between the years of 1627 and 2000. The specifics illustrate the general: that with each passing species, the diversity and beauty of our world has been irrevocably diminished."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This volume of poems could have easily dissolved into despair, and given the title of the book, you’d be readily forgiven if you assumed it would be much too much for a young child (or even a sensitive adult). Instead, I find myself captivated by the extraordinary details of animals whose very names conjure intrigue: aurochs, elephant bird, blue buck, and ",
      {
        "type": "link",
        "href": "http://www.ucmp.berkeley.edu/mammal/mesaxonia/quagga.html",
        "children": [
          "quagga"
        ]
      },
      ". Kiddo too enjoys the poetry and detailed woodcut illustrations, even if she does not understand the meaning of each word."
    ]
  },
  {
    "type": "image",
    "src": "/media/2011/06/swan-song-spread.png",
    "alt": "",
    "href": "/media/2011/06/swan-song-spread.png",
    "width": 432,
    "height": 305,
    "align": "center"
  },
  {
    "type": "paragraph",
    "children": [
      "Still, the enormity of the problem weighs heavily on me. As the foreward explains, “On Earth, six animal species die every hour, many of the most recent due to climate change, habitat destruction, or human greed or carelessness or indifference.” It’s for this reason that I appreciate both the book’s emphasis on the “recently departed” and on the human causes of extinction. After all, we are speeding up the rate of extinction dramatically, both by changing biological communities on a micro scale, by logging, water pollution, and development, and by changing the ecology of the earth globally through our ",
      {
        "type": "link",
        "href": "http://www.c40cities.org/",
        "children": [
          "greenhouse gas emissions"
        ]
      },
      "."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "For that reason, I wholeheartedly recommend ",
      {
        "type": "emphasis",
        "children": [
          "Swan Song"
        ]
      },
      ", not just for children but for ",
      {
        "type": "emphasis",
        "children": [
          "people"
        ]
      },
      " generally."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4 to adult."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
