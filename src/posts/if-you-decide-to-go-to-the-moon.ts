import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2013/11/if-you-decide-to-go-to-the-moon.jpg",
    "alt": "IfYouDecideToGoToTheMoon",
    "href": "/media/2013/11/if-you-decide-to-go-to-the-moon.jpg",
    "width": 210,
    "height": 225,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Like most four-year-olds, my daughter loves space. She has already asked my wife and me if we will take care of her children while she is studying on the moon as an astronaut. Of course we said yes. To encourage her love of space, we bought her this book for Christmas last year (",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/0590483595/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=0590483595&linkCode=as2&tag=vegbooks-20",
        "external": true,
        "children": [
          "Amazon affiliate link"
        ]
      },
      ")."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The book is set up as an informational guide for someone who might be going to the moon. It gives instructions on what to pack, what to eat, and what will be experienced along the way. “It will tell you how to get there and what to do after you land. The most important part tells you how to get home.” The book is full of factual details presented in a kid-friendly way with great illustrations and is perfect for any preschool space lover."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "As the purpose of this book is to teach children about space, I was surprised with the environmental and animal-friendly message at the end. The starkness of space is compared with the beauty of earth. “Why is Earth so different from the moon? Earth has air and water… on which all life depends. Without them, Earth would be as lifeless as the moon. Air and water are Earth’s special blessings. We must guard them well…. As you bend down to kiss the ground, you promise you will always do your best to protect all life on our beautiful Earth.” This last sentence is illustrated by a boy being kissed by a dog while a cat runs around in the grass and birds circle overhead."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I recommend this book to anyone who is a lover of space, an environmentalist, and an animal lover."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 3+."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
