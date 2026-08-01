import type { PostMetadata } from '../content/types';

export const article = {
  "id": "3848",
  "slug": "puppy-school",
  "url": "/reviews/puppy-school/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/01/11/puppy-school/",
  "title": "Puppy School",
  "publishedAt": "2011-01-11",
  "publishedLabel": "January 11th, 2011",
  "excerpt": "Ivy League vs. Community College. White Collar vs. Blue. India’s Caste System. No matter where we look, in virtually every culture, there’s a discrimination of some sort, either based on skin color, heritage or…",
  "image": {
    "src": "/media/2010/10/girl-reading.jpg",
    "alt": "Puppy School",
    "width": 210,
    "height": 280
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
      "name": "Adventure",
      "slug": "adventure",
      "url": "/topics/adventure/"
    },
    {
      "name": "Carolyn M. Mullin",
      "slug": "carolyn-m-mullin",
      "url": "/topics/carolyn-m-mullin/"
    },
    {
      "name": "Community",
      "slug": "community",
      "url": "/topics/community/"
    },
    {
      "name": "Companion Animals",
      "slug": "companion-animals",
      "url": "/topics/companion-animals/"
    },
    {
      "name": "David Dayan Fisher",
      "slug": "david-dayan-fisher",
      "url": "/topics/david-dayan-fisher/"
    },
    {
      "name": "Dogs",
      "slug": "dogs",
      "url": "/topics/dogs/"
    },
    {
      "name": "Equality",
      "slug": "equality",
      "url": "/topics/equality/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
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
    "description": "Ivy League vs. Community College. White Collar vs. Blue. India’s Caste System. No matter where we look, in virtually every culture, there’s a discrimination of some sort, either based on skin color, heritage or…",
    "image": "https://vegbooks.org/media/2010/10/girl-reading.jpg"
  },
  "previous": {
    "title": "Pippi Longstocking",
    "url": "/reviews/pippi-longstocking/"
  },
  "next": {
    "title": "Our Choice: Young Readers Edition",
    "url": "/reviews/our-choice-young-readers-edition/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/10/girl-reading.jpg"}><img src={"/media/2010/10/girl-reading.jpg"} alt={"Puppy School"} width={210} height={280} /></a>
      </figure>
      <p>{"Ivy League vs. Community College. White Collar vs. Blue. India’s Caste System. No matter where we look, in virtually every culture, there’s a discrimination of some sort, either based on skin color, heritage or economic status. While we tout that we’re all equal (under the eyes of God or within a democratic society), achieving the same opportunities as other citizens can be quite a difficult endeavor. For Monkey, the adorable mutt whose story we follow in "}<a href={"http://www.puppyschoolthebook.com/"} target="_blank" rel="noopener noreferrer"><em>{"Puppy School"}</em></a>{", attempting to gain entry into the elite, pedigree-only educational institution is nearly impossible. Nearly being the key word."}</p>
      <p>{"In a serendipitous accident, Monkey is covered in black paint, lending him a Labrador look that fits in with a band of puppies, including his closest friend Burton, from his farm that are on their way to Puppy School. While Monkey struggles with proper posture and other “petiquette” behaviors, he and Burton excel in friendship, bravery, honesty, and generosity. These qualities are best demonstrated when Burton is sent away to Muttly Manor, a decrepit jail of sorts for miscreant canines, and Monkey must put everything on the line to save his friend and the other incarcerated pups."}</p>
      <p><em>{"Puppy School"}</em>{" is a page-turner for the action and adventure contained within, but also because of its heartwarming and sincere message of hope, community and egalitarianism. Author and actor David Dayan Fisher is "}<a href={"http://www.bookmasters.com/marktplc/03069.htm"} target="_blank" rel="noopener noreferrer">{"donating 50% of the proceeds to dog rescues and dog pounds"}</a>{", including In Defense of Animals!"}</p>
      <p>{"Ages 9-12."}</p>
    </div>
  );
}
