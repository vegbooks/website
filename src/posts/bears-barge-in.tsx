import type { PostMetadata } from '../content/types';

export const article = {
  "id": "1177",
  "slug": "bears-barge-in",
  "url": "/reviews/bears-barge-in/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/03/27/bears-barge-in/",
  "title": "Bears Barge In",
  "publishedAt": "2010-03-27",
  "publishedLabel": "March 27th, 2010",
  "excerpt": "It’s no wonder that Bears Barge In by Joni Sensel and Chris Bivins won an ASPCA Henry Bergh award. The book is fun and educational, and has a wonderful message about our relationship with other animals. Years ago, I…",
  "image": {
    "src": "/media/2010/04/bears-covercolor1.jpg",
    "alt": "Bears Barge In",
    "width": 231,
    "height": 314
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
      "name": "Bears",
      "slug": "bears",
      "url": "/topics/bears/"
    },
    {
      "name": "Chris Bivins",
      "slug": "chris-bivins",
      "url": "/topics/chris-bivins/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Henry Bergh Award Winner",
      "slug": "henry-bergh-award-winner",
      "url": "/topics/henry-bergh-award-winner/"
    },
    {
      "name": "Joni Sensel",
      "slug": "joni-sensel",
      "url": "/topics/joni-sensel/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Wildlife",
      "slug": "wildlife",
      "url": "/topics/wildlife/"
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
    "description": "It’s no wonder that Bears Barge In by Joni Sensel and Chris Bivins won an ASPCA Henry Bergh award. The book is fun and educational, and has a wonderful message about our relationship with other animals. Years ago, I…",
    "image": "https://vegbooks.org/media/2010/04/bears-covercolor1.jpg"
  },
  "previous": {
    "title": "The Wolves Are Back",
    "url": "/reviews/the-wolves-are-back/"
  },
  "next": {
    "title": "Four Famished Foxes and Fosdyke",
    "url": "/reviews/four-famished-foxes/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/04/bears-covercolor1.jpg"}><img src={"/media/2010/04/bears-covercolor1.jpg"} alt={"Bears Barge In"} width={231} height={314} /></a>
      </figure>
      <p>{"It’s no wonder that "}<a href={"http://www.jonisensel.com/bearsbargein.html"} target="_blank" rel="noopener noreferrer"><em>{"Bears Barge In"}</em></a>{" by Joni Sensel and Chris Bivins won an "}<a href={"http://www.aspcaonlinestore.com/index.php?productID=1954"} target="_blank" rel="noopener noreferrer">{"ASPCA Henry Bergh award"}</a>{". The book is fun and educational, and has a wonderful message about our relationship with other animals."}</p>
      <p>{"Years ago, I worked at a wildlife center, and much of our work was focused on remedying the "}<a href={"http://www.hsus.org/wildlife/urban_wildlife_our_wild_neighbors/solving_problems/humane_control/the_humane_approach_to_humanwildlife_conflicts.html"} target="_blank" rel="noopener noreferrer">{"human-wildlife conflicts"}</a>{" that result when people encroach on animal habitat. I’ve seen firsthand what happens when people and wild animals try to use the same space — and how those conflicts are only compounded by a widely held fear of wild animals."}</p>
      <p>{"Teaching children not to fear other animals, and to consider their interests, is one of the most important jobs we have as parents, teachers, and caregivers. "}<em>{"Bears Barge In"}</em>{" illustrates beautifully why people need not fear even the largest and wildest of animals if only we leave them alone!"}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
