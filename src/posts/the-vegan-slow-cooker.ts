import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/11/book-1.jpg",
    "alt": "The Vegan Slow Cooker",
    "href": "/media/2011/11/book-1.jpg",
    "width": 210,
    "height": 210,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "We debated here at Vegbooks headquarters about reviewing this book — after all, it is neither a kids book nor a movie. In the end, we accepted a review copy, and the lucky job of reviewing fell to me! My family and friends didn’t seem to mind."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I went into the process uncertain about what to expect. My past with Crock-Pots and their ilk has been spotty. However, my experience is that ",
      {
        "type": "emphasis",
        "children": [
          {
            "type": "link",
            "href": "http://www.amazon.com/gp/product/1592334644/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=217145&creative=399373&creativeASIN=1592334644",
            "external": true,
            "children": [
              "The Vegan Slow Cooker"
            ]
          }
        ]
      },
      " is a boon to busy (or relaxed) families. It is full of delicious, hearty and — most importantly — simple recipes. There is also a short but helpful segment about slow cooking in general. Many people I know, myself included, tend to avoid slow cooking because there can be lots of preparation involved. After a certain point, it can feel like one should just cook the whole meal on the stove or in the oven. Not so with The Vegan Slow Cooker. Author Kathy Hester has crafted recipes which generally do not require a lot of preparation yet still yield a tasty result. For those recipes that that do require a little extra investment, she has broken the directions down into simple, manageable steps. Additionally, almost all recipes take the brilliant tactic of telling you what to do the night before (generally chopping the veggies) and what to do the morning of (generally throwing all of the ingredients together). For some reason, having the steps laid out in this manner makes a big difference."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "A good number of the recipes are of the comfort food persuasion (Chick’n and Dumplings, From the Pantry Pot Pie, Smoky Mac and Cheese). There are some true gems in here, such as the Perfect Pizza from Your Slow Cooker (yes, you read correctly) and the Fall Harvest Fruit Butter (a hit with all), which, by the way, smells like an autumnal dream while burbling away. Having slow cooked my way through most of the soup recipes, I highly recommend them, and I’ll be making a third batch of Thai Coconut Pumpkin Soup soon. The only flop I’ve experienced was the recipe for Whole Wheat Gingerbread, which wasn’t to anyone’s liking."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Beyond the recipes for sides, meals and desserts are helpful ideas and guidance for other items such as sauces, condiments and seitan. Hester also provides information on cooking basics such as baked potatoes, pumpkins, rice and beans in a slow cooker. It is so easy and you may appreciate some of the shortcuts in your own life."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "This book is key to some fine fare, if not always fancy. I love Hester’s attitude toward slow cooking prep in which she writes, “Do I ever skip [a step]? Heck, yeah! If I’m in a hurry and it’s the difference between eating a home-cooked meal or grabbing takeout on the way home, I throw everything in together.” I love this approach. If you and your family are interested in vegan cooking, watching your budget or your food intake, you will likely also embrace her attitude (and her meals)."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
