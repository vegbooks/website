import type { ContentBlock } from '../content/types';

const content = [
  {
    "type": "image",
    "src": "/media/2012/03/mollys-organic-farm-cover.jpg",
    "alt": "Molly’s Organic Farm",
    "href": "/media/2012/03/mollys-organic-farm-cover.jpg",
    "width": 210,
    "height": 178,
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
            "href": "https://www.kirkusreviews.com/book-reviews/carol-l-malnor/mollys-organic-farm/#review",
            "external": true,
            "children": [
              "Molly’s Organic Farm"
            ]
          }
        ]
      },
      " is written by Carol L. Malnor and Trina L. Hunner, and realistically illustrated by Trina L. Hunner. I received the book from ",
      {
        "type": "link",
        "href": "http://www.dawnpub.com/",
        "external": true,
        "children": [
          "Dawn Publications"
        ]
      },
      " as a review copy and, much like their other offerings, it does not disappoint. The book is based on the true story of a cat named Molly who is welcomed on an organic farm. Told through the seasons and Molly’s experiences, the book uses third person narration to let the reader learn about the organic farm along with Molly."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Molly explores things like fields of greens and the compost pile as the book’s text explains what compost is and how it is used. She watches the helpful insects that live among the growing plants as spring turns to summer and the time soon arrives for the farmer’s market. Some readers may want to note that while the farmers give Molly milk to drink at one point in the story, ",
      {
        "type": "link",
        "href": "http://pets.webmd.com/cats/guide/cats-and-dairy-get-the-facts",
        "external": true,
        "children": [
          "cow’s milk is not as suitable"
        ]
      },
      " as traditional wisdom would have one believe. After the passing of pumpkin and harvest season on the farm, Molly starts to worry and feel the cold of winter approaching. Just then, a farmer brings Molly inside and lets her know that “[y]ou’ll never need to roam the city streets again. And in the spring you’ll be back on the farm with all your friends.”"
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "I don’t think I can do the level of detail on each page of the book justice, I didn’t even notice until reading the additional information at the back of the book (there are photos of adorable Molly there as well, can you tell I’m a cat person?) that the story featured each of Molly’s five senses in little inset images scattered through the book. Through telling the story of how a stray cat found a safe and loving home, the book also has a lot of information about vegetable farming and the people, insects, and animals that all come into play to bring delicious organic food to our tables."
    ]
  },
  {
    "type": "paragraph",
    "children": [
      "Ages 3 and up."
    ]
  }
] satisfies readonly ContentBlock[];

export default content;
