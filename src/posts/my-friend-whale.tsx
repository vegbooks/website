import type { PostMetadata } from '../content/types';

export const article = {
  "id": "3839",
  "slug": "my-friend-whale",
  "url": "/reviews/my-friend-whale/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/01/05/my-friend-whale/",
  "title": "My Friend Whale",
  "publishedAt": "2011-01-05",
  "publishedLabel": "January 5th, 2011",
  "excerpt": "My Friend Whale is a short story about a young boy who develops a friendship with a blue whale. Each night, they meet and swim together in the ocean. The story is really about whales, though, so it’s sprinkled with…",
  "image": {
    "src": "/media/2011/01/9780763623104.jpg",
    "alt": "My Friend Whale",
    "width": 210,
    "height": 174
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
      "name": "Anti-Hunting",
      "slug": "anti-hunting",
      "url": "/topics/anti-hunting/"
    },
    {
      "name": "Death",
      "slug": "death",
      "url": "/topics/death/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Hunting",
      "slug": "hunting",
      "url": "/topics/hunting/"
    },
    {
      "name": "Marine Animals",
      "slug": "marine-animals",
      "url": "/topics/marine-animals/"
    },
    {
      "name": "Marine Mammals",
      "slug": "marine-mammals",
      "url": "/topics/marine-mammals/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    },
    {
      "name": "Robyn Moore",
      "slug": "robyn-moore",
      "url": "/topics/robyn-moore/"
    },
    {
      "name": "Simon James",
      "slug": "simon-james",
      "url": "/topics/simon-james/"
    },
    {
      "name": "Whales",
      "slug": "whales",
      "url": "/topics/whales/"
    },
    {
      "name": "Whaling",
      "slug": "whaling",
      "url": "/topics/whaling/"
    }
  ],
  "reviewer": {
    "name": "Robyn Moore",
    "slug": "robyn-moore",
    "url": "/contributors/robyn-moore/",
    "aliases": [
      "ROBYN MOORE"
    ]
  },
  "seo": {
    "description": "My Friend Whale is a short story about a young boy who develops a friendship with a blue whale. Each night, they meet and swim together in the ocean. The story is really about whales, though, so it’s sprinkled with…",
    "image": "https://vegbooks.org/media/2011/01/9780763623104.jpg"
  },
  "previous": {
    "title": "The Princess and the Frog (2009)",
    "url": "/reviews/the-princess-and-the-frog/"
  },
  "next": {
    "title": "Wonder Woman Rumble in the Rainforest",
    "url": "/reviews/wonder-woman-rumble-in-the-rainforest/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/01/9780763623104.jpg"}><img src={"/media/2011/01/9780763623104.jpg"} alt={"My Friend Whale"} width={210} height={174} /></a>
      </figure>
      <figure class="content-image content-image--center">
        <img src={"http://www.assoc-amazon.com/e/ir?t=vegbooks-20&l=as2&o=1&a=0763623105"} alt={""} />
      </figure>
      <p><a href={"http://www.amazon.com/gp/product/0763623105?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0763623105"} target="_blank" rel="noopener noreferrer"><em>{"My Friend Whale"}</em></a>{" is a short story about a young boy who develops a friendship with a blue whale. Each night, they meet and swim together in the ocean."}</p>
      <p>{"The story is really about whales, though, so it’s sprinkled with interesting facts throughout. We learn that whales are the biggest animals in the world, that they have no teeth, and that they can’t taste or smell anything. But their hearing is excellent—they can hear other whales up to 100 miles away."}</p>
      <p>{"The real surprise of this story comes at the end when the boy shows up to swim with Whale, but Whale never shows up. The boy wonders what happened to him. His nights are empty when he realizes that his friend will never come back. There’s no happy ending here. (Whale has been killed by hunters.) It’s heartbreaking!"}</p>
      <p>{"The silver lining here is that it’s not too late to help save whales. The back of the book contains two pages about whales and whale hunting, including the names and websites of three organizations where you can go for more information."}</p>
      <p>{"This book has a very important—and timely—message, but the ending is very heavy and sad. Read it when you are prepared to have a frank discussion about whaling with your child. It’s a good opportunity to talk about why we shouldn’t use animals for food and other products."}</p>
      <p>{"Ages: 6-10"}</p>
    </div>
  );
}
