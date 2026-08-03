import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2011/02/hummingbirds-72.jpg",
    "alt": "Hummingbirds: Facts and Folklore from the Americas",
    "href": "/media/2011/02/hummingbirds-72.jpg",
    "width": 210,
    "height": 282,
    "align": "right"
  },
  {
    "type": "paragraph",
    "children": [
      "February is National Bird-Feeding Month! What better way to get in the mood than with trivia and folklore about one of the smallest and most intriguing creatures of flight, the hummingbird? Like any reputable non-fiction animal book, ",
      {
        "type": "link",
        "href": "http://www.charlesbridge.com/productdetails.cfm?PC=5433",
        "external": true,
        "children": [
          {
            "type": "emphasis",
            "children": [
              "Hummingbirds"
            ]
          }
        ]
      },
      " explores their physical attributes (size, plumage, color), diet, habitat, vocalizations, and predators. I found the section on migration to be particularly captivating. The Rufous hummingbird flies 2,500 miles from Central America to Alaska each way, while the Ruby-throated hummingbird will make a non-stop 500 mile voyage across the Gulf of Mexico! Even neater is that this bird’s feathers are a bit more lackluster than we think; their brilliant coloration really stems from light refracting on his or her plumage."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "What this book does best is to stitch together scientific inquiry, cultural nuances and fabric collage illustrations into an attractive literary quilt for its readers. Juxtaposed with each sub-category is an allegorical tale from a different society (Aztec, Navajo, Taino) explaining in a fanciful manner why hummingbirds drink nectar, are attracted to the color red or live in the mountains, etc. And fabric artist Adrienne Yoinks brings these friends-in-flight to life through her realistic textile renderings, likely a new medium for this book’s readers. Unfortunately, she does use ",
      {
        "type": "link",
        "href": "http://www.peta.org/issues/Animals-Used-for-Clothing/down-and-silk-birds-and-insects-exploited-for-fabric.aspx",
        "external": true,
        "children": [
          "silk"
        ]
      },
      " in some of her pieces."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "For a simple nectar recipe you can make at home this Bird-Feeding Month, visit the ",
      {
        "type": "link",
        "href": "http://www.museumofanimals.org/#/national-bird-feeding-month/3779990",
        "external": true,
        "children": [
          "National Museum of Animals & Society"
        ]
      },
      ". Hummingbirds will return year after year to enjoy your nectar. Make a big batch!"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 9-11."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
