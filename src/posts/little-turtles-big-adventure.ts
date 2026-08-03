import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/12/toddler-girl-reading.jpg",
    "alt": "Toddler girl reading",
    "href": "/reviews/i-love-dogs/",
    "width": 210,
    "height": 315,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Even though this book was was first published in 1969, it is still highly relevant today. It begins with a little turtle enjoying his life by a pond. All the animals at the pond are happy until one day there is a rumble like thunder. Men with bulldozers and machines come and push over trees, tear down hills and fill in the pond. When they are done, the pond is gone and in its place is a loud, busy road."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "The little turtle realizes he needs to find a new home. He tries living in a field, on a hill, and in a forest but none of them are right for a little turtle. The weather changes so the little turtle goes underground for winter, which is a great way to introduce young children to the concept of hibernation. When he wakes up, he again must go search for a new home. Finally, a boy finds the turtle and carries him to a new pond where he can live happily."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book (",
      {
        "type": "link",
        "href": "http://www.amazon.com/gp/product/0394834429/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=0394834429&linkCode=as2&tag=vegbooks-20",
        "external": true,
        "children": [
          "Amazon affiliate link"
        ]
      },
      ") gives parents a lot of great opportunities to talk to their kids about big concepts in simple ways. After the pond is replaced by a road, I asked my 3-year old which she liked better: the pond or road. I also asked if she thought it was nice for the people to destroy the turtle’s home. With older children, you can ask them questions about why the turtle didn’t like living in other places and what made the pond just right for him."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 2-5."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
