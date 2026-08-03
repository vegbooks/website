import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "paragraph",
    "children": [
      {
        "type": "emphasis",
        "children": [
          "I Am Yoga"
        ]
      },
      " by Susan Verde teaches us that when we align our hearts, minds and bodies anything is possible."
    ]
  },
  {
    "type": "image",
    "src": "/media/2015/11/9781419716645.jpg",
    "alt": "9781419716645",
    "width": 480,
    "height": 481,
    "align": "center"
  },
  {
    "type": "paragraph",
    "children": [
      "Yoga, a Sanskrit word meaning “to join,” is a practice that enables each one of us to connect with the many elements on this earth in our own special way. Once we know we can carve out a unique spot that feels right for us, we know we are never alone."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book not only is a great introduction to yoga, but teaches children to embrace their individuality, as a gift and not something to fear. In a world, that can seem overwhelmingly large, it is nice to know that this practice of yoga, can make us feel one in our being. This book sends a beautiful message. It shows children that there is no one right way to feel and when we have feelings that seem unmanageable, there is a way to experience them that feels safe. I love how it incorporates references to nonviolence and anger management skills."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The illustrated guide at the back of the book introduces children to basic poses and explains them in an active and explorative manner."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
