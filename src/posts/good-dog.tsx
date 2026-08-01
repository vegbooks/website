import type { PostMetadata } from '../content/types';

export const article = {
  "id": "1566",
  "slug": "good-dog",
  "url": "/reviews/good-dog/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/04/18/good-dog/",
  "title": "Good Dog",
  "publishedAt": "2010-04-18",
  "publishedLabel": "April 18th, 2010",
  "excerpt": "We can only speculate as to how dogs think and reason, but I find Maya Gottfried’s poetic interpretations to be rather spot on. Covering 16 canine breeds from Springer spaniels to mutts, Robert Rahway Zakanitch’s…",
  "image": {
    "src": "/media/2010/04/978-0-553-11383-9-1.jpg",
    "alt": "Good Dog",
    "width": 208,
    "height": 272
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
      "name": "Companion Animals",
      "slug": "companion-animals",
      "url": "/topics/companion-animals/"
    },
    {
      "name": "Dogs",
      "slug": "dogs",
      "url": "/topics/dogs/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Maya Gottfried",
      "slug": "maya-gottfried",
      "url": "/topics/maya-gottfried/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Robert Rahway Zakanitch",
      "slug": "robert-rahway-zakanitch",
      "url": "/topics/robert-rahway-zakanitch/"
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
    "description": "We can only speculate as to how dogs think and reason, but I find Maya Gottfried’s poetic interpretations to be rather spot on. Covering 16 canine breeds from Springer spaniels to mutts, Robert Rahway Zakanitch’s…",
    "image": "https://vegbooks.org/media/2010/04/978-0-553-11383-9-1.jpg"
  },
  "previous": {
    "title": "Ladybug Girl",
    "url": "/reviews/ladybug-girl/"
  },
  "next": {
    "title": "Souperchicken",
    "url": "/reviews/souperchicken/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/04/978-0-553-11383-9-1.jpg"}><img src={"/media/2010/04/978-0-553-11383-9-1.jpg"} alt={"Good Dog"} width={208} height={272} /></a>
      </figure>
      <p>{"We can only speculate as to how dogs think and reason, but I find "}<a href={"http://www.redroom.com/author/maya-gottfried"} target="_blank" rel="noopener noreferrer">{"Maya Gottfried"}</a>{"’s poetic interpretations to be rather spot on. Covering 16 canine breeds from Springer spaniels to mutts, "}<a href={"http://www.zakanitch.com/"} target="_blank" rel="noopener noreferrer">{"Robert Rahway Zakanitch"}</a>{"’s beautiful full-page portraits – when set to Gottfried’s free verse poems – really capture the personality of each pooch. For the chow, we read: “Listen up! It’s time to go. / Get the leash. Let’s hit the road. / I’ve got a bone to pick with a Chihuahua. / And there’s a coupla dachshunds that need a barking-to.”"}</p>
      <p>{"The text is simple enough for kids to read on their own, but challenging little ones to use different voices for each canine character would be a fun activity. Perhaps a high pitched, whiney voice for the pomeranian who just got a powder puff-looking haircut? Or a deep, gruff tone for the bulldog who just wants a “hug and a bone.”"}</p>
      <p>{"Personally, I’d keep this on the coffee table too as even adults and visiting company would get a kick out of the humorous writings and entertaining visuals."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
