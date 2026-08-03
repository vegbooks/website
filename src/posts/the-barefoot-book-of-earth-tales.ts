import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/10/barefoot1.jpg",
    "alt": "The Barefoot Book of Earth Tales",
    "href": "/media/2010/10/barefoot1.jpg",
    "width": 210,
    "height": 252,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Artfully selected and compiled as a delightful compilation, the seven folktales of Australia, Nigeria, the American Southwest, Bali, Kazakhstan, India, and Wales featured ",
      {
        "type": "link",
        "href": "http://store.barefootbooks.com/the-barefoot-book-of-earth-tales.html",
        "external": true,
        "children": [
          "in this Barefoot Books’ publication"
        ]
      },
      " showcase earth-friendly parables any child – despite cultural differences – can appreciate."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Paired with topic-related, wholesome activities such as making a song-line painting inspired by aboriginal art, the stories are fanciful, enchanting and touching. Fairies provide a segue to composting and neighborly consideration. A grumpy gecko sheds light on the interconnectedness of living in the same web of life as those we may find bothersome, but necessary (for him, it’s the flickering fireflies). Nigeria’s tale of why the sky is so far away discusses the dangers of gluttony and the limited resources on earth. To accentuate the valuable lessons contained within are the ethnically symbolic and rather cute illustrations by Anne Wilson and the wonderfully concise and thoughtful introductions to each story written by author Dawn Casey."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Veg parents will be happy to see the Bishnoi Tribes of Rajasthan mentioned as being vegetarian and the book’s sole recipe as a plant-based soup. The one downside is the mention of hunting and a doll made of buckskin in the Native American tale."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 9-12."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
