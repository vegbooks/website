import type { PostMetadata } from '../content/types';

export const article = {
  "id": "5215",
  "slug": "ok-go",
  "url": "/reviews/ok-go/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/05/21/ok-go/",
  "title": "OK Go",
  "publishedAt": "2011-05-21",
  "publishedLabel": "May 21st, 2011",
  "excerpt": "I love Carin Berger’s style. From the playful to the contemplative, her children’s book illustrations never fail to delight me. And so it was with great enthusiasm that I dove into OK Go, a picture book for young…",
  "image": {
    "src": "/media/2011/05/okgo-hc-c.jpg",
    "alt": "OK Go",
    "width": 210,
    "height": 210
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
      "name": "Bicycles",
      "slug": "bicycles",
      "url": "/topics/bicycles/"
    },
    {
      "name": "Carin Berger",
      "slug": "carin-berger",
      "url": "/topics/carin-berger/"
    },
    {
      "name": "Cars",
      "slug": "cars",
      "url": "/topics/cars/"
    },
    {
      "name": "Collage",
      "slug": "collage",
      "url": "/topics/collage/"
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
      "name": "Good for Toddlers",
      "slug": "good-for-toddlers",
      "url": "/topics/good-for-toddlers/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Public Transit",
      "slug": "public-transit",
      "url": "/topics/public-transit/"
    },
    {
      "name": "Recycling",
      "slug": "recycling",
      "url": "/topics/recycling/"
    }
  ],
  "reviewer": {
    "name": "Jessica Almy",
    "slug": "jessica-almy",
    "url": "/contributors/jessica-almy/",
    "aliases": [
      "Jessica",
      "JESSICA ALMY"
    ]
  },
  "seo": {
    "description": "I love Carin Berger’s style. From the playful to the contemplative, her children’s book illustrations never fail to delight me. And so it was with great enthusiasm that I dove into OK Go, a picture book for young…",
    "image": "https://vegbooks.org/media/2011/05/okgo-hc-c.jpg"
  },
  "previous": {
    "title": "I Am the Dog",
    "url": "/reviews/i-am-the-dog/"
  },
  "next": {
    "title": "The Way I Love You",
    "url": "/reviews/the-way-i-love-you/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/05/okgo-hc-c.jpg"}><img src={"/media/2011/05/okgo-hc-c.jpg"} alt={"OK Go"} width={210} height={210} /></a>
      </figure>
      <p>{"I love Carin Berger’s style. From the playful to the contemplative, her children’s book illustrations never fail to delight me. And so it was with great enthusiasm that I dove into "}<em>{"OK Go"}</em>{", a picture book for young children with an eco twist."}</p>
      <p>{"Using sparse words and collages made of found materials, this book contrasts a carbon-based lifestyle, consisting of bumper to bumper vehicles spurting fumes, with one that’s a little more green. Although the former is full of energy and humor — “Go! Go! Go!” — kids will appreciate the reminders about how we can all be a little more mindful of the environment, with a particular emphasis on transportation. “Catch a ride, Clyde. Roller-skate, Kate. Ride a bike, Mike and Ike.”"}</p>
      <p>{"The last page includes additional suggestions for recycling and reusing everyday items, as well as a list of further reading on how kids can take care of the environment, including "}<em><a href={"/reviews/where-does-the-garbage-go/"}>{"Where Does the Garbage Go?"}</a></em>{"and "}<em><a href={"http://ecochildsplay.com/2008/06/05/eco-kids-books-recycle-a-handbook-for-kids-by-gail-gibbons/"} target="_blank" rel="noopener noreferrer">{"Recycle! A Handbook for Kids"}</a></em>{"."}</p>
      <p>{"Ages 2-5."}</p>
    </div>
  );
}
