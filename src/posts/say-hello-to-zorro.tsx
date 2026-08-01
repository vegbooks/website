import type { PostMetadata } from '../content/types';

export const article = {
  "id": "5466",
  "slug": "say-hello-to-zorro",
  "url": "/reviews/say-hello-to-zorro/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/06/29/say-hello-to-zorro/",
  "title": "Say Hello to Zorro!",
  "publishedAt": "2011-06-29",
  "publishedLabel": "June 29th, 2011",
  "excerpt": "Mister Bud had the life that I’d wish for all dogs — a loving home and things of his own. So, he’d be forgiven, even if he weren’t a little gray in the snout, for being resentful about the arrival of a second dog.…",
  "image": {
    "src": "/media/2011/06/say-hello-to-zorro.jpg",
    "alt": "Say Hello to Zorro!",
    "width": 210,
    "height": 205
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
      "name": "Carter Goodrich",
      "slug": "carter-goodrich",
      "url": "/topics/carter-goodrich/"
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
      "name": "New Sibling",
      "slug": "new-sibling",
      "url": "/topics/new-sibling/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Pug",
      "slug": "pug",
      "url": "/topics/pug/"
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
    "description": "Mister Bud had the life that I’d wish for all dogs — a loving home and things of his own. So, he’d be forgiven, even if he weren’t a little gray in the snout, for being resentful about the arrival of a second dog.…",
    "image": "https://vegbooks.org/media/2011/06/say-hello-to-zorro.jpg"
  },
  "previous": {
    "title": "Hands: Growing Up to Be an Artist",
    "url": "/reviews/hands-growing-up-to-be-an-artist/"
  },
  "next": {
    "title": "Six Is So Much Less Than Seven",
    "url": "/reviews/six-is-so-much-less-than-seven/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/06/say-hello-to-zorro.jpg"}><img src={"/media/2011/06/say-hello-to-zorro.jpg"} alt={"Say Hello to Zorro!"} width={210} height={205} /></a>
      </figure>
      <p>{"Mister Bud had the life that I’d wish for all dogs — a loving home and things of his own. So, he’d be forgiven, even if he weren’t a little gray in the snout, for being resentful about the arrival of a second dog. Given his particular enthusiasm about his invariable routine (read: he’s set in his ways), the reader understands when he’s bent out of shape to meet his new companion, Zorro. Soon, however, the two dogs discover, to their mutual surprise, that they enjoy doing the same things, and on the "}<em>{"same schedule"}</em>{"to boot, and “suddenly, the walks were more fun,” nap time was more comfy, and life was more exciting."}</p>
      <p>{"Like "}<em><a href={"/reviews/some-dog/"}>{"Some Dog!"}</a></em>{", I think "}<em><a href={"http://wherethebestbooksare.blogspot.com/2011/03/say-hello-to-zorro.html"} target="_blank" rel="noopener noreferrer">{"Say Hello to Zorro!"}</a></em>{" would be a great read for kids preparing for the arrival of a new sibling, or to help children understand why their dog or cat might have a hard time adjusting to a new arrival. "}<a href={"http://cartergoodrich.com/"} target="_blank" rel="noopener noreferrer">{"Carter Goodrich"}</a>{" creates a particularly realistic rendering, with the dogs finding joy in their everyday routine together (instead of some dramatic event triggering their affection) and with occasional grumpiness sneaking in even after the dogs have come to love each other."}</p>
      <p>{"Families with dogs will crack up at the illustrations, which are humorous and apt. (If you know a pug, you’ll particularly appreciate Zorro’s expressions!) I also like that Goodrich depicts the woman in the story as mostly out of frame, save for legs, feet, and hands (that dole out pets and attach the leash). Sometimes I think that’s how my cat sees me."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
