import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/01/9781597020244-lg.jpg",
    "alt": "Billie the Unicorn",
    "href": "/media/2012/01/9781597020244-lg.jpg",
    "width": 210,
    "height": 260,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.billietheunicorn.com/fall.html",
            "external": true,
            "children": [
              "Billie the Unicorn"
            ]
          }
        ]
      },
      " by Brianne Brouhard is a vividly illustrated story set in what we learn is a world where unicorns grow plants and flowers. Billie is a little blue unicorn who seems to continually long for different pastures. She tends a cornfield but ventures into the forest to learn from her cousins who show her their skills at growing sunflowers and strawberries. She wants to grow flowers like them but instead grows corn in the forest. With encouragement, she grows a blue cornflower. Billie grows restless again upon hearing of a queen’s beautiful garden and ventures (without her cousins) off in search of it, hoping to learn more about growing flowers."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "At this point the story takes a rather scary turn as the queen’s garden is tended by a miserable imprisoned unicorn who grows metal flowers at the queen’s command. Before Billie can escape, she is the new prisoner of the garden and is commanded to continue the old unicorn’s work. Her friends come to rescue her but first grow real flowers in the garden before making their escape."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I think that the idea of making any animal, even an imaginary one, a prisoner is a topic of interest to veg families. It is easy for a child to see how different the lives of the free unicorns and the imprisoned one differ. Both have the same powers but when forced to “perform” they are unhappy and fearful. The book’s message is “be yourself” and the illustrations are engaging though I do wonder where the previous unicorn in the queen’s garden ended up as Billie and her cousins live happily ever after."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 5 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
