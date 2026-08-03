import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2013/05/pf-front-cvr.jpg",
    "alt": "PF front cvr",
    "href": "/media/2013/05/pf-front-cvr.jpg",
    "width": 210,
    "height": 265,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Once upon a time I was an undergraduate studying in the new, esoteric academic field of Religion and Nature, with an even more specific interest in animals. This penchant I have for the field has not been without nourishing, and I’m lucky that it is now also being combined with my Vegbooks reviews! Like ",
      {
        "type": "link",
        "href": "/reviews/peaceable-forest-indias-tale-of-kindness-to-animals/",
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Peaceable Forest"
            ]
          }
        ]
      },
      ", this title I just finished reading also turns its attention to India’s compassionate traditions and tales. Written by Kirk Gradin (a vegan!), ",
      {
        "type": "link",
        "href": "http://www.jadhuram.com/",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Jadhu Ram and the Thirsty Forest"
            ]
          }
        ]
      },
      " is a fictional work, but one that is inspired by the Hindu forest dwellers that give up the material world for a life of devotion, spiritual awakening, and service."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Our hero is Jadhu “magic” Ram, who in a severe drought, reflects and finds his way to a source of water buried deep beneath the earth’s surface. He toils away to access the water, which satiates the villagers. But what about the animals who also thirst? Jadhu puts his own thirst, hunger and exhaustion aside to carve a trough from a log to hold water for the animals. Predators and prey alike come to drink from the trough – in peace. As a thank you, the animals gather fruits, nuts, vegetables, and cherries (all vegan!) for the tired Jadhu."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The book’s messaging goes deeper than “do good works”; the entire story speaks to ignorance and a life without compassion (",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/1105047350/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=1105047350&linkCode=as2&tag=vegbooks-20",
        "external": true,
        "children": [
          "Amazon affiliate link"
        ]
      },
      "). Gradin is also the talented illustrator of the book and his artistic skills are matched by his poetry. I’ll leave this review with a few stanzas from the book –"
    ]
  },
  {
    "type": "quote",
    "children": [
      {
        "type": "paragraph",
        "children": [
          "That night as he lay with the animals near,",
          {
            "type": "lineBreak"
          },
          " Beneath a grass hut the creatures had found,",
          {
            "type": "lineBreak"
          },
          " The warmth of his light was even more clear,",
          {
            "type": "lineBreak"
          },
          " Safe and protective for all that were ‘round."
        ]
      },
      {
        "type": "paragraph",
        "children": [
          "Listen with heart to the word nature sings,",
          {
            "type": "lineBreak"
          },
          " Tales of such heroes will rise in your mind,",
          {
            "type": "lineBreak"
          },
          " Heroes whose lives brought peace to all beings,",
          {
            "type": "lineBreak"
          },
          " With welfare and blessings of every kind."
        ]
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4 to 10."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
