import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/01/9780763623104.jpg",
    "alt": "My Friend Whale",
    "href": "/media/2011/01/9780763623104.jpg",
    "width": 210,
    "height": 174,
    "align": "right"
  },
  {
    "type": "image",
    "src": "http://www.assoc-amazon.com/e/ir?t=vegbooks-20&l=as2&o=1&a=0763623105",
    "alt": ""
  },
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/0763623105?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0763623105",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "My Friend Whale"
            ]
          }
        ]
      },
      " is a short story about a young boy who develops a friendship with a blue whale. Each night, they meet and swim together in the ocean."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The story is really about whales, though, so it’s sprinkled with interesting facts throughout. We learn that whales are the biggest animals in the world, that they have no teeth, and that they can’t taste or smell anything. But their hearing is excellent—they can hear other whales up to 100 miles away."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The real surprise of this story comes at the end when the boy shows up to swim with Whale, but Whale never shows up. The boy wonders what happened to him. His nights are empty when he realizes that his friend will never come back. There’s no happy ending here. (Whale has been killed by hunters.) It’s heartbreaking!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The silver lining here is that it’s not too late to help save whales. The back of the book contains two pages about whales and whale hunting, including the names and websites of three organizations where you can go for more information."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book has a very important—and timely—message, but the ending is very heavy and sad. Read it when you are prepared to have a frank discussion about whaling with your child. It’s a good opportunity to talk about why we shouldn’t use animals for food and other products."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages: 6-10"
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
