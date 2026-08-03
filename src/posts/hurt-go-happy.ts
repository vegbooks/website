import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/09/9780765353047.jpg",
    "alt": "Hurt Go Happy",
    "href": "/media/2010/09/9780765353047.jpg",
    "width": 210,
    "height": 308,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "It’s hard to sum up and analyze a novel in just a few short paragraphs, much less a work that is so perfectly complex and layered in its character development, plot, and thematic elements. Award-winning ",
      {
        "type": "link",
        "href": "http://www.ginnyrorby.com/Ginny_Rorby/Home.html",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Hurt Go Happy"
            ]
          }
        ]
      },
      " is written for the middle school-aged crowd, but personally I think every kindhearted individual should have this on their shelf — to enjoy themselves, keep on hand for lending purposes or as a gift for that soon-to-be-teen. I dread the day it goes out of print as",
      {
        "type": "emphasis",
        "children": [
          "Hurt Go Happy"
        ]
      },
      " is such a seminal, affecting, transcendent literary masterpiece. (I mean every word of that too!)"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Deaf heroine Joey Willis struggles with her impairment (caused by an abusive father), but finds her sign language-resistant mother to be much more of a roadblock on her path of self-discovery, solace and purpose. Speckled with common teen themes – angst, crushes, challenging coursework and relationships — ",
      {
        "type": "emphasis",
        "children": [
          "Hurt Go Happy"
        ]
      },
      " delves much deeper into the human and animal psyche when Joey crosses path with a compassionate older gentleman, Dr. Mansell, and Sukari, the rescued baby chimp he cares for. Mansell, whose own parents were deaf, has taught Sukari basic sign language. This introduction leads to an inspiring and emotional friendship between the three and serves as the foreground for an often grim backdrop: the use of animals in entertainment and vivisection; the bushmeat trade; domestic abuse."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Author Ginny Rorby does an astounding job weaving through light and dark passages, presenting new issues to a youngish audience and creating a text that will make a permanent impression on every reader. I can’t recommend ",
      {
        "type": "emphasis",
        "children": [
          "Hurt Go Happy"
        ]
      },
      " enough and look forward to reading Rorby’s other works."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 9+."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
