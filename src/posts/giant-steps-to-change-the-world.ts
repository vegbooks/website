import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/10/giant-steps-cover.jpg",
    "alt": "Giant Steps to Change the World",
    "href": "/media/2011/10/giant-steps-cover.jpg",
    "width": 210,
    "height": 207,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Spike Lee – yes, the famous filmmaker and the man with his own cable channel – is a children’s author! ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://books.simonandschuster.com/Giant-Steps-to-Change-the-World/Spike-Lee/9780689868153",
            "external": true,
            "children": [
              "Giant Steps to Change the World"
            ]
          }
        ]
      },
      " isn’t his first work, but it sure is a heavy hitting one. Its message is solid, daunting, challenging, and yet inspiring: Life is going to be tough, but figure out what you’re going to contribute to the world and make it big and make it happen."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Lee’s wife, Tonya, also contributed her pen to the paper in this book and it shows. On each two-page spread featuring mixed media images by ",
      {
        "type": "link",
        "href": "http://www.seanqualls.com/",
        "external": true,
        "children": [
          "Sean Qualls"
        ]
      },
      " a new unnamed hero or heroine is used to exemplify how difficult the hand you’re dealt may be, but that nothing is insurmountable. The pantheon of giants includes Langston Hughes, Jean-Michel Basquiat, Barack Obama, Albert Einstein, the Tuskegee Airmen, and others."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Here’s a little except that demonstrates the poetic nature of the book. See if you can guess who this giant might be:"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "Your heart will ache for your countryman",
          {
            "type": "lineBreak"
          },
          " who is hungry. Go to him and feed him –",
          {
            "type": "lineBreak"
          },
          " like the woman who dedicated her life to",
          {
            "type": "lineBreak"
          },
          " feeding the hungry and healing the sick",
          {
            "type": "lineBreak"
          },
          " and asked for nothing in return."
        ]
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I think adults need this book as much as kids do. For many of us, it can test all your willpower and drive to become an entrepreneur or an innovator much less an advocate for animals who wears his/her heart on their sleeve."
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
