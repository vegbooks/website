import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "alt": "Deliverance of Dancing Bears",
    "href": "/media/2010/06/girls-book-pic-from-istock.jpg",
    "width": 210,
    "height": 139,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "Australian Elizabeth Stanley writes from the heart and from her travels through Turkey and Greece in ",
      {
        "type": "link",
        "href": "http://www.elizabethstanley.com.au/books.html",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "The Deliverance of Dancing Bears"
            ]
          }
        ]
      },
      ". Written in the calming tone of an old folk tale, the story tells of Yusuf, an elderly man, who bears witness to the warrant and needless cruelty inflicted upon a dancing bear, who is forced to perform in the streets during the day and return to life in a cage at night. The bear’s only solace is found in her dreams, where freedom reigns and she can be the wild creature she yearns to be."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Yusuf decides to purchase the bear and tells her, “I feel too ashamed to have you dancing another day. I have no way of returning you to your home and your loved ones, but come with me, and I will restore to you a little happiness.” And she finds just that – happiness – in his little mountain cottage near a running stream. Unfortunately, as all activists warn kindhearted animal lovers, purchasing abused animals only continues the cycle as those animals will certainly be replaced. Same occurs in this novel."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Yusuf finds the gypsy Haluk forcing a bear cub to perform as his “wooden staff cracked mercilessly across the nose of the little bear, when he dropped whimpering to the ground, exhausted and confused by his unfamiliar and painful harness.” Yusuf purchases this tiny cub with his savings while the townspeople shame Haluk for his behavior. The ending is sweet as no words are used, but readers glimpse the curious cub encountering his adoptive mother bear, who is in the midst of capturing fish fresh from the stream."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I highly recommended this Henry Bergh award-winning children’s book."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 4-8."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
