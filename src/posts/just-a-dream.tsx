import type { PostMetadata } from '../content/types';

export const article = {
  "id": "1620",
  "slug": "just-a-dream",
  "url": "/reviews/just-a-dream/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/05/26/just-a-dream/",
  "title": "Just a Dream",
  "publishedAt": "2010-05-26",
  "publishedLabel": "May 26th, 2010",
  "excerpt": "Famous for timeless works such as Jumanji, Zathura and The Polar Express, Chris Van Allsburg brings his exquisite artwork and poignant words to the pages of Just a Dream, an environmental tale cloaked in the guise of…",
  "image": {
    "src": "/media/2010/05/0395533082-lres-2.jpg",
    "alt": "Just a Dream",
    "width": 209,
    "height": 270
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
      "name": "Carolyn M. Mullin",
      "slug": "carolyn-m-mullin",
      "url": "/topics/carolyn-m-mullin/"
    },
    {
      "name": "Chris Van Allsburg",
      "slug": "chris-van-allsburg",
      "url": "/topics/chris-van-allsburg/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Eco-Friendly Kids Books",
      "slug": "eco-friendly-kids-books",
      "url": "/topics/eco-friendly-kids-books/"
    },
    {
      "name": "Environment",
      "slug": "environment",
      "url": "/topics/environment/"
    },
    {
      "name": "Environmental Children's Literature",
      "slug": "environmental-childrens-literature",
      "url": "/topics/environmental-childrens-literature/"
    },
    {
      "name": "Fishing",
      "slug": "fishing",
      "url": "/topics/fishing/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    }
  ],
  "reviewer": {
    "name": "Carolyn M. Mullin",
    "slug": "carolyn-m-mullin",
    "url": "/contributors/carolyn-m-mullin/",
    "aliases": [
      "CAROLYN M. MULLIN"
    ]
  },
  "seo": {
    "description": "Famous for timeless works such as Jumanji, Zathura and The Polar Express, Chris Van Allsburg brings his exquisite artwork and poignant words to the pages of Just a Dream, an environmental tale cloaked in the guise of…",
    "image": "https://vegbooks.org/media/2010/05/0395533082-lres-2.jpg"
  },
  "previous": {
    "title": "The Curious Garden",
    "url": "/reviews/the-curious-garden/"
  },
  "next": {
    "title": "Make and Eat Vegetarian Food",
    "url": "/reviews/make-and-eat-vegetarian-food/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/05/0395533082-lres-2.jpg"}><img src={"/media/2010/05/0395533082-lres-2.jpg"} alt={"Just a Dream"} width={209} height={270} /></a>
      </figure>
      <p>{"Famous for timeless works such as "}<em>{"Jumanji"}</em>{", "}<em>{"Zathura"}</em>{" and "}<em>{"The Polar Express"}</em>{", Chris Van Allsburg brings his exquisite artwork and poignant words to the pages of "}<em><a href={"http://www.spaghettibookclub.org/title.php?grade=&title=Just%20A%20Dream"} target="_blank" rel="noopener noreferrer">{"Just a Dream"}</a></em>{", an environmental tale cloaked in the guise of an “I could care less” youth. Young Walter is a typical urbanite, tossing recyclables into the trash, mocking his neighbor Nancy for receiving a tree for her birthday, and preferring to daydream about living a life much like that of his favorite TV show- with helper robots and a personal plane."}</p>
      <p>{"He dreams that night about the future, but it’s certainly nothing like what he had in mind. Here’s where Mr. Van Allsburg’s talent shines. Artistically, he portrays each vivid scene from a unique perspective –from a mountaintop to the oceans’ lapping waves to a bird’s eye view. Walter’s bed takes him to harrowing landscapes: his childhood home devoured by a landfill, poisonous smokestacks that churn out medicine to combat “burning throats and itchy eyes,” fishermen who celebrate catching their second, tiny fish for the week. Come morning, Walter finds that owning a plane doesn’t seem important. In his pajamas, he bolts for the garbage to sort the recycling and for his birthday asks for a tree to plant next to Nancy’s."}</p>
      <p>{"The ending a mixed bag. For some, perhaps, the ideal future is a suburban setting where families do hang their laundry out to dry and use human-powered mowers for the lawn, as Mr. Van Allsburg depicts. How do your kids envision an ideal future for themselves, the animals and the earth?"}</p>
      <p>{"For interactive activities, wallpaper, bookmarks, etc, visit the official Chris Van Allsburg "}<a href={"http://www.chrisvanallsburg.com/home.html"} target="_blank" rel="noopener noreferrer">{"web site"}</a>{"."}</p>
      <p>{"Ages 4- 8."}</p>
    </div>
  );
}
