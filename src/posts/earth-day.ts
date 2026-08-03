import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/04/earth-day-cover.jpg",
    "alt": "Earth Day",
    "href": "/media/2012/04/earth-day-cover.jpg",
    "width": 210,
    "height": 315,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "In honor of Environmental Education week and to highlight Earth Day, Vegbooks is featuring books with environmental themes. More on EE Week ",
          {
            "type": "link",
            "href": "http://www.eeweek.org/",
            "external": true,
            "children": [
              "here"
            ]
          },
          "."
        ]
      }
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "“Save the Earth” reads a banner in Emily’s classroom, cultivating awareness about ",
      {
        "type": "link",
        "href": "http://en.wikipedia.org/wiki/Earth_Day",
        "external": true,
        "children": [
          "Earth Day"
        ]
      },
      " among the students. During a discussion, her classmates come up with pretty big ideas about saving dolphins, polar bears and forests, but Emily is a little disheartened when she talks about these concepts with her dad. She is even less enthusiastic about his idea to start saving the planet with smaller, more manageable steps. ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.amazon.com/gp/product/1416955356/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=1416955356",
            "external": true,
            "children": [
              "Earth Day"
            ]
          }
        ]
      },
      " delves a little deeper into the small steps Emily and her dad take."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "It turns out that in this case, the small things are what made the biggest impact! While Emily’s classmates were drawing pictures, talking, and, in one case, making dolphin noises, Emily and her dad took concrete steps to immediately improve the world: recycling, biking instead of driving, visiting the farmers’ market for local produce, and conserving water and energy by turning off the tap and electronics."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Although adults know that we need a combination of smaller collective actions and implementation of very big ideas to preserve our planet, this is story is a nice illustration for kids about how small things really can add up to make a difference — an empowering message."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book is part of the ",
      {
        "type": "link",
        "href": "http://series.simonandschuster.net/Robin-Hill-School",
        "external": true,
        "children": [
          "Robin Hill School"
        ]
      },
      " series focusing on an early elementary class and is a short, easy read."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 3 to 7."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
