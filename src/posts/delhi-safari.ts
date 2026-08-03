import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/movie-pic-from-istock.jpg",
    "alt": "Delhi Safari (2012)",
    "href": "/media/2010/06/movie-pic-from-istock.jpg",
    "width": 210,
    "height": 321,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "India seems to be calling the Vegbooks team. VB Founder Jessica Almy just returned from a trip to this land of enchantment, and I discovered a great new title, ",
      {
        "type": "link",
        "href": "/reviews/peaceable-forest-indias-tale-of-kindness-to-animals/",
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Peaceable Forest: India’s Tale of Kindness to Animals"
            ]
          },
          ","
        ]
      },
      " last month. AND this week, I was invited to the Los Angeles premiere of “",
      {
        "type": "link",
        "href": "http://www.youtube.com/watch?v=y9oljIvNEHo",
        "children": [
          "Delhi Safari"
        ]
      },
      ",” a 3D animation flick (originally produced and released in India) featuring a motley crew of Indian wildlife that have banded together to confront Parliament, the institution with the power to make change, about stopping the destruction of their homeland for development purposes. Some big names even lent their voices to the English version of the film, including Jane Lynch, Jason Alexander, and Christopher Lloyd. And for added entertainment, there are fun musical numbers (including a Bollywood tune or two) sprinkled throughout the film with Vanessa Williams taking the lead on most of them."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The film’s humor and entertainment value aside, there are many heartstrings being pulled in “Delhi Safari.” Yuvi, the young cheetah cub and the film’s protagonist, loses his father very early on in the story to the clear-cutters. The filmmakers were unabashedly open about showing his father being hit by a bullet and falling lifeless to the ground, all while Yuvi looks on. It was a haunting scene that stuck with me for the remainder of the film. It reminded me of the first time I saw “Bambi.” (No one had to sell me on taking an anti-hunting stance after that Disney cartoon.) Clearly the filmmakers elicited their desired reaction… and many, many tears."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The journey may have been a bit long, my 3D glasses hurt after a while, and the animation can’t hold a candle to Pixar, BUT the message in “Delhi Safari” is undeniably strong: we need to share this world with animals. Also apparent in the narrative were the always important themes of friendship, determination, faith, and courage."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Rarely do you find a film that’s endorsed by animal protection powerhouses such as PETA, HSUS and Last Chance for Animals, but “Delhi Safari” pulled it off. Heck, the screenwriters even ensured that “animal rights” were passed, in a measure signed by Parliament, at the end of the film! How can I not recommend a children’s flick that endorses animal rights? I can’t. So go out and try and find a DVD copy. More kids could benefit from its pro-animal and environmental message, but unfortunately I don’t think this will be hitting theatres nationwide."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 5+."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
