import type { PostMetadata } from '../content/types';

export const article = {
  "id": "3042",
  "slug": "hey-little-ant",
  "url": "/reviews/hey-little-ant/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/09/08/hey-little-ant/",
  "title": "Hey, Little Ant",
  "publishedAt": "2010-09-08",
  "publishedLabel": "September 8th, 2010",
  "excerpt": "Hey, Little Ant, written by father-daughter duo Hannah (then nine-years-old) and Phillip Hoose, is by far my favorite children’s book. Honestly! It has everything you could possibly wish for – inviting artwork,…",
  "image": {
    "src": "/media/2010/09/978-1-883672-54-6.jpg",
    "alt": "Hey, Little Ant",
    "width": 210,
    "height": 167
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
      "name": "Activities",
      "slug": "activities",
      "url": "/topics/activities/"
    },
    {
      "name": "Animal Welfare",
      "slug": "animal-welfare",
      "url": "/topics/animal-welfare/"
    },
    {
      "name": "Ants",
      "slug": "ants",
      "url": "/topics/ants/"
    },
    {
      "name": "Books that Teach Empathy",
      "slug": "books-that-teach-empathy",
      "url": "/topics/books-that-teach-empathy/"
    },
    {
      "name": "Bugs",
      "slug": "bugs",
      "url": "/topics/bugs/"
    },
    {
      "name": "Bullying",
      "slug": "bullying",
      "url": "/topics/bullying/"
    },
    {
      "name": "Carolyn M. Mullin",
      "slug": "carolyn-m-mullin",
      "url": "/topics/carolyn-m-mullin/"
    },
    {
      "name": "Compassion",
      "slug": "compassion",
      "url": "/topics/compassion/"
    },
    {
      "name": "Conflict Resolution",
      "slug": "conflict-resolution",
      "url": "/topics/conflict-resolution/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Enthomology",
      "slug": "enthomology",
      "url": "/topics/enthomology/"
    },
    {
      "name": "Lesson Plans",
      "slug": "lesson-plans",
      "url": "/topics/lesson-plans/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Tolerance",
      "slug": "tolerance",
      "url": "/topics/tolerance/"
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
    "description": "Hey, Little Ant, written by father-daughter duo Hannah (then nine-years-old) and Phillip Hoose, is by far my favorite children’s book. Honestly! It has everything you could possibly wish for – inviting artwork,…",
    "image": "https://vegbooks.org/media/2010/09/978-1-883672-54-6.jpg"
  },
  "previous": {
    "title": "Chicken Joy on Redbean Road",
    "url": "/reviews/chicken-joy-on-redbean-road/"
  },
  "next": {
    "title": "The Gas We Pass: The Story of Farts",
    "url": "/reviews/the-gas-we-pass-the-story-of-farts/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <img src={"/media/2010/09/978-1-883672-54-6.jpg"} alt={"Hey, Little Ant"} width={210} height={167} />
      </figure>
      <p><a href={"http://heylittleant.wordpress.com/"} target="_blank" rel="noopener noreferrer"><em>{"Hey, Little Ant"}</em></a>{", written by father-daughter duo Hannah (then nine-years-old) and Phillip Hoose, is by far my favorite children’s book. Honestly! It has everything you could possibly wish for – inviting artwork, relatable scenarios, quick, upbeat writing, and a prompting message that leaves the reader with an ethical quagmire."}</p>
      <p>{"Kid encounters a tiny ant in the crevice of the sidewalk. He contemplates squishing him, but through enchanting, rhyming dialogue the table is turned. Ant shows Kid that his fellow insects rely on him (we see images of Ant reading to his own children, sharing food with comrades) and asks Kid if he would appreciate being squished, seeing as how they’re more alike than previously thought. The book doesn’t outright suggest that killing ants is bad, but readers are challenged to make the rationale on their own. However, it would be hard to refute that ants deserve respect and consideration after reading "}<em>{"Hey, Little Ant"}</em>{"."}</p>
      <p>{"This is a truly fantastic "}<a href={"http://heylittleant.wordpress.com/educators/"} target="_blank" rel="noopener noreferrer">{"resource"}</a>{" (lesson plans and activities abound!) for fostering discussions on bullying, tolerance, and conflict resolution; dichotomies of big/small, powerful/powerless and animal welfare; science studies and entomology. And to support my fanfare of this one-of-a-kind publication are the testimonials from my former AmeriCorps students. They requested the book more times than I can count and loved holding it, as some of the graphics require that you flip the book vertically in order to see them properly. It’s also available in Spanish under the title "}<em>{"Oye, Hormiguita"}</em>{"!"}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
