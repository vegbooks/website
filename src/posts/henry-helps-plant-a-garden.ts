import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/11/henry-helps-plant-a-garden.jpg",
    "alt": "Henry Helps Plant a Garden",
    "href": "/media/2012/11/henry-helps-plant-a-garden.jpg",
    "width": 210,
    "height": 208,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "I’m an “aunt” in one of those she’s-not-your-relative-but-we-love-her-just-as-much kinda way to a very special four-year-old. And boy does she just love to pitch in with her family’s household chores. From baking to watering the plants, this little girl is getting the basics of carrying out chores down at an early age – all while having fun and asking surprisingly poignant questions along the way."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "According to Capstone Publishing, “Studies have found that participating in household activities at a young age is the best predictor of future success [academic, career, personal and relationship].” With that in mind, I recommend a recent review book I was provided by Capstone Publishing’s imprint, Picture Window Books. They recently released the “Henry Helps” series, which includes ",
      {
        "type": "emphasis",
        "children": [
          "Henry Helps Plant a Garden"
        ]
      },
      ". It’s a short, sweet and cutely illustrated tale perfect for any veg family with pre-Kindergarten youngsters."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "In ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.capstonepub.com/product/9781404873056",
            "external": true,
            "children": [
              "Henry Helps Plant a Garden"
            ]
          }
        ]
      },
      ", our protagonist wears camo pants, lizard-looking rainboots and an adorable octopus shirt as he helps his parents plant a garden bed with flower and vegetable seeds. Wide-eyed and rosy-cheeked, he prepares the dirt, sows the seeds, pulls weeds, and then – when the harvest is ready – he makes a bouquet of flowers for his mom and a salad with the freshly picked veggies (a la vegan!)."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Besides providing a great story, there are some helpful pointers for parents, such as “Don’t overdo praise. Be calm and specific, and focus on effort, not results.” And who couldn’t use a little help from the experts?"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 2-4."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
