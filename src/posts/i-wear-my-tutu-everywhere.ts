import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/06/9780448408774-medium-i-wear-my-tutu-everywhere.jpg",
    "alt": "I Wear My Tutu Everywhere!",
    "href": "/media/2012/06/9780448408774-medium-i-wear-my-tutu-everywhere.jpg",
    "width": 210,
    "height": 210,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Tilly loves her tutu. It makes her feel beautiful. She wears it to the park, the pool, school, even to bed. But one day it gets ripped at the playground. Until her mom fixes the tutu, Tilly has to wear regular clothes. She realizes that she likes wearing shorts to play because they are easier to move around in. And pajamas are more comfortable for bed than the scratchy tutu. By the time Tilly’s tutu is repaired, she decides that tutus are great for dance class, but that’s it."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "My daughter received this for her third birthday. It’s a very timely gift. She is obsessed with being a ballerina. She refuses to wear anything that she doesn’t think a ballerina would wear. She’s stopped wearing pajamas and instead wears nightgowns because that is what Clara wears in “The Nutcracker.” Last night she wore a nightgown with a tutu underneath, and it wasn’t the first time. She will only wear shoes that ballerinas would wear, which means she refuses sneakers. We’ve been struggling with this for six months. She told me that this book was about her because she wears her tutu everywhere too."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I was very much enjoying reading this book (",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/0448408775/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=0448408775",
        "external": true,
        "children": [
          "Amazon affiliate link"
        ]
      },
      "), since the message is so relevant. So I was dismayed when I read that Tilly wears her tutu to the zoo. She dances for the elephants, giraffes, and penguins, which all seem quite happy to visit with her."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I think we will keep this book because my daughter really needs to hear its message, but I am going to struggle through the zoo section each time I read it. Luckily, she also received ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "/reviews/when-lulu-went-to-the-zoo/",
            "children": [
              "When Lulu Went to the Zoo"
            ]
          }
        ]
      },
      " for her birthday, so maybe the books will balance each other out."
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
