import type { PostMetadata } from '../content/types';

export const article = {
  "id": "765",
  "slug": "breakfast",
  "url": "/reviews/breakfast/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/01/30/breakfast/",
  "title": "Breakfast in the Rainforest",
  "publishedAt": "2010-01-30",
  "publishedLabel": "January 30th, 2010",
  "excerpt": "In Breakfast in the Rainforest, award-winning photographer Richard Sobol details his trip to Africa to see rare mountain gorillas in their native habitat. This book is not simply a glossy biology of gorillas. There…",
  "image": {
    "src": "/media/2010/02/9780763622817.jpg",
    "alt": "Breakfast in the Rainforest",
    "width": 231,
    "height": 218
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
      "name": "Environmental Children's Literature",
      "slug": "environmental-childrens-literature",
      "url": "/topics/environmental-childrens-literature/"
    },
    {
      "name": "Gorillas",
      "slug": "gorillas",
      "url": "/topics/gorillas/"
    },
    {
      "name": "Jennifer Gannett",
      "slug": "jennifer-gannett",
      "url": "/topics/jennifer-gannett/"
    },
    {
      "name": "KIND Children's Honor Books",
      "slug": "kind-childrens-honor-books",
      "url": "/topics/kind-childrens-honor-books/"
    },
    {
      "name": "Natural History",
      "slug": "natural-history",
      "url": "/topics/natural-history/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    },
    {
      "name": "Richard Sobol",
      "slug": "richard-sobol",
      "url": "/topics/richard-sobol/"
    },
    {
      "name": "Uganda",
      "slug": "uganda",
      "url": "/topics/uganda/"
    },
    {
      "name": "Wildlife",
      "slug": "wildlife",
      "url": "/topics/wildlife/"
    }
  ],
  "reviewer": {
    "name": "Jennifer Gannett",
    "slug": "jennifer-gannett",
    "url": "/contributors/jennifer-gannett/",
    "aliases": [
      "JENNIFER G",
      "JENNIFER GANNETT"
    ]
  },
  "seo": {
    "description": "In Breakfast in the Rainforest, award-winning photographer Richard Sobol details his trip to Africa to see rare mountain gorillas in their native habitat. This book is not simply a glossy biology of gorillas. There…",
    "image": "https://vegbooks.org/media/2010/02/9780763622817.jpg"
  },
  "previous": {
    "title": "Saving Lilly",
    "url": "/reviews/saving-lilly-guest-post-by-carolyn-m-mullin/"
  },
  "next": {
    "title": "Chicken in the Kitchen",
    "url": "/reviews/chicken-in-the-kitchen/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/02/9780763622817.jpg"}><img src={"/media/2010/02/9780763622817.jpg"} alt={"Breakfast in the Rainforest"} width={231} height={218} /></a>
      </figure>
      <p>{"In "}<a href={"http://www.powells.com/biblio/9780763622817?&PID=32442"} target="_blank" rel="noopener noreferrer"><em>{"Breakfast in the Rainforest"}</em></a>{", award-winning photographer "}<a href={"http://www.wildfoto.com/intro.html"} target="_blank" rel="noopener noreferrer">{"Richard Sobol"}</a>{" details his trip to Africa to see rare "}<a href={"http://en.wikipedia.org/wiki/Mountain_Gorilla"} target="_blank" rel="noopener noreferrer">{"mountain gorillas"}</a>{" in their native habitat. This book is not simply a glossy biology of gorillas. There is plenty of information about the gorillas’ life cycle but Sobol also chronicles the complexities of his trip to Uganda’s Bwindi Impenetrable National Park — from expensive gorilla tracking permits to the journey to the remote rainforest location to the smell he experiences when he first meets up with the gorillas and much more. He shares observations about the subsistence farmers who live in the gorillas’ range and the park rangers who work to protect the gorillas. Sharing these details make his remarkable adventure seem more accessible."}</p>
      <p>{"We loved hearing about the beauty of the gorillas as well as the life of the rangers charged with protecting them. The information is set forth in a straightforward way that is appropriate for young audiences, although the text is fairly lengthy for very little ones. The photographs are, as you might imagine, fabulous. Sobol notes out at the end of the book that he is not a vegetarian, though the gorillas are!"}</p>
      <p>{"I highly recommend sharing this beautiful and informative book about mountain gorillas and their human neighbors with nature lovers of any age though its best for ages 6 and up."}</p>
    </div>
  );
}
