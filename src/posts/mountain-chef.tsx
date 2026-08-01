import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10832",
  "slug": "mountain-chef",
  "url": "/reviews/mountain-chef/",
  "legacyUrl": "https://vegbooks.org/index.php/2019/06/04/mountain-chef/",
  "title": "Mountain Chef",
  "publishedAt": "2019-06-04",
  "publishedLabel": "June 4th, 2019",
  "excerpt": "MOUNTAIN CHEF, written by Annette Bay Pimentel and illustrated by Rich Lo, details the essential role of Tie Sing, a Chinese-American chef who accompanied millionaire Stephen Mather on a high-end camping trip for a…",
  "image": {
    "src": "/media/2019/06/pimentel-chef.jpg",
    "alt": "Mountain Chef",
    "width": 234,
    "height": 300
  },
  "categories": [
    {
      "name": "Books",
      "slug": "books",
      "url": "/books/"
    }
  ],
  "tags": [
    {
      "name": "Annette Bay Pimentel",
      "slug": "annette-bay-pimentel",
      "url": "/topics/annette-bay-pimentel/"
    },
    {
      "name": "Charlesbridge",
      "slug": "charlesbridge",
      "url": "/topics/charlesbridge/"
    },
    {
      "name": "Mountain Chef",
      "slug": "mountain-chef",
      "url": "/topics/mountain-chef/"
    },
    {
      "name": "National Park Service",
      "slug": "national-park-service",
      "url": "/topics/national-park-service/"
    },
    {
      "name": "Picture Book",
      "slug": "picture-book",
      "url": "/topics/picture-book/"
    },
    {
      "name": "Read Aloud",
      "slug": "read-aloud",
      "url": "/topics/read-aloud/"
    },
    {
      "name": "Rich Lo",
      "slug": "rich-lo",
      "url": "/topics/rich-lo/"
    },
    {
      "name": "Tie Sing",
      "slug": "tie-sing",
      "url": "/topics/tie-sing/"
    },
    {
      "name": "young readers",
      "slug": "young-readers",
      "url": "/topics/young-readers/"
    }
  ],
  "reviewer": {
    "name": "Kristin Wald",
    "slug": "kristin-wald",
    "url": "/contributors/kristin-wald/",
    "aliases": [
      "KRISITN WALD",
      "Kristin Wald",
      "KRISTIN WALD"
    ]
  },
  "seo": {
    "description": "MOUNTAIN CHEF, written by Annette Bay Pimentel and illustrated by Rich Lo, details the essential role of Tie Sing, a Chinese-American chef who accompanied millionaire Stephen Mather on a high-end camping trip for a…",
    "image": "https://vegbooks.org/media/2019/06/pimentel-chef.jpg"
  },
  "previous": {
    "title": "The Happiest Tree: A Story of Growing Up",
    "url": "/reviews/the-happiest-tree-a-story-of-growing-up/"
  },
  "next": {
    "title": "The Biggest Little Farm: Saving Emma the Pig",
    "url": "/reviews/the-biggest-little-farm-saving-emma-the-pig/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--left">
        <a href={"/reviews/mountain-chef/"}><img src={"/media/2019/06/pimentel-chef.jpg"} alt={"Mountain Chef"} width={234} height={300} /></a>
      </figure>
      <p>{"MOUNTAIN CHEF, written by Annette Bay Pimentel and illustrated by Rich Lo, details the essential role of Tie Sing, a Chinese-American chef who accompanied millionaire Stephen Mather on a high-end camping trip for a group of investors and legislators. The trip was meant to convince the guests to create a national park service to protect the natural wonders of the USA. Tie Sing’s position as head chef for this trip proved invaluable in ensuring the men were comfortable and satisfied during their “rustic” trek across the camping route. Pimentel does a good job spotlighting Tie Sing and his assistant Eugene, and Lo’s illustrations provide color and movement in their depiction of the adventures."}</p>
      <p>{"What stands out in the story of Tie Sing is that amount of planning and preparation necessary for his work as the camping adventure’s chef. Sing had to plan three meals a day for 30 people, and the meals had to be impressive to the wealthy, worldly guests. The hard work of feeding the guests is clear in Pimento’s descriptions. Getting up in the cold and dark to start breakfast and pack lunches, cleaning up after the guests while on the trail, and transporting the food and supplies all show the intensity of Sing’s intensity and dedication, as well as his ability to handle challenges and unexpected roadblocks."}</p>
      <p>{"Vegetarian and vegan families should be aware that the mention of various foods like frogs’ legs, sides of beef, and several fish and meat dishes are mentioned. Some are depicted in the illustrations as well. While a mule is not injured, there is also an illustration of it falling down a cliff. However, families will also be able to have in depth conversations about what a “fancy” meal is versus a simple meal, and what that means to the travelers in the book and to them."}</p>
      <p>{"The appreciation for the wilderness of what would one day become Yosemite National Park and the perseverance Tie Sing shows throughout the journey will be a sure inspiration for those who read MOUNTAIN CHEF."}</p>
    </div>
  );
}
