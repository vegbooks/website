import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2013/01/cover.jpg",
    "alt": "The Boy Who Loved All Living Things",
    "href": "/media/2013/01/cover.jpg",
    "width": 210,
    "height": 161,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Today is Albert Schweitzer’s birthday. Those of us who work to instill in our children ",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/Reverence_for_Life",
        "external": true,
        "children": [
          "reverence for life"
        ]
      },
      " are indebted to the Nobel Peace Prize winner for developing an ethical framework based on the basic principle that we and all living beings desire to go on living."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "http://labanimals.awionline.org/Schweitzer_Book/",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "The Boy Who Loved All Living Things: The Imaginary Childhood Journal of Albert Schweitzer"
            ]
          }
        ]
      },
      " by Sheila Hamanaka introduces kids to this hero by giving a glimpse of what his boyhood diary might have looked like. Albert is both blessed with many animal friends and troubled by the cruelty that imbues his daily life. He finds joy in the mice in the church where his father is a minister, but finds himself standing silent when two men beat a horse. Readers see how unkindness troubles Albert’s gentle heart, and watch as he evolves from victim and bystander to an animal advocate who writes:"
    ]
  },
  {
    "type": "quote",
    "children": [
      {
        "type": "paragraph",
        "children": [
          "I do not care anymore what people think about me! I know deep inside who I am."
        ]
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Both kiddo and I love this book. The unsteady script and scrapbook-style illustrations reminded me of my own childhood and moral development. I was not much older than Albert is in this book when I looked at the food on my plate and realized it came from animals no different from my family’s rescued companions. I thought, “Why save one and eat another?” Readers of this book will learn that Albert later became a vegetarian because he loved animals."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Albert Schweitzer’s compassion extended to all. While this book focuses on his love for animals, the end of the book also highlights his impressive humanitarian work helping African people who were dying because they were being treated like slaves."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Geared to children ages 5 to 8 and their parents and teachers, this book would make an ideal addition to any home or classroom library. And if Albert’s story inspires you, visit the ",
      {
        "type": "link",
        "href": "http://awionline.org/",
        "external": true,
        "children": [
          "Animal Welfare Institute"
        ]
      },
      " (the nonprofit organization who published this book) to ",
      {
        "type": "link",
        "href": "http://awionline.org/action-ealerts",
        "external": true,
        "children": [
          "take action"
        ]
      },
      " to help animals."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
