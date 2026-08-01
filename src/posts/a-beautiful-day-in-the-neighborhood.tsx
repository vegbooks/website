import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10869",
  "slug": "a-beautiful-day-in-the-neighborhood",
  "url": "/reviews/a-beautiful-day-in-the-neighborhood/",
  "legacyUrl": "https://vegbooks.org/index.php/2019/07/22/a-beautiful-day-in-the-neighborhood/",
  "title": "A Beautiful Day in the Neighborhood",
  "publishedAt": "2019-07-22",
  "publishedLabel": "July 22nd, 2019",
  "excerpt": "The new collection of the poetry of Mister Rogers is a true gift for the children of today and the adults who grew up with Mister Rogers throughout their childhoods. A BEAUTIFUL DAY IN THE NEIGHBORHOOD includes 75…",
  "image": {
    "src": "/media/2019/07/a-beautiful-day-in-the-neighborhood.jpeg",
    "alt": "A Beautiful Day in the Neighborhood",
    "width": 231,
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
      "name": "A Beautiful Day in the Neighborhood",
      "slug": "a-beautiful-day-in-the-neighborhood",
      "url": "/topics/a-beautiful-day-in-the-neighborhood/"
    },
    {
      "name": "all ages",
      "slug": "all-ages",
      "url": "/topics/all-ages/"
    },
    {
      "name": "Fred Rogers",
      "slug": "fred-rogers",
      "url": "/topics/fred-rogers/"
    },
    {
      "name": "Kindergarten",
      "slug": "kindergarten",
      "url": "/topics/kindergarten/"
    },
    {
      "name": "Luke Flowers",
      "slug": "luke-flowers",
      "url": "/topics/luke-flowers/"
    },
    {
      "name": "Mister Rogers",
      "slug": "mister-rogers",
      "url": "/topics/mister-rogers/"
    },
    {
      "name": "Mister Rogers' Neighborhood",
      "slug": "mister-rogers-neighborhood",
      "url": "/topics/mister-rogers-neighborhood/"
    },
    {
      "name": "Poetry",
      "slug": "poetry",
      "url": "/topics/poetry/"
    },
    {
      "name": "preschool",
      "slug": "preschool",
      "url": "/topics/preschool/"
    },
    {
      "name": "Read Aloud",
      "slug": "read-aloud",
      "url": "/topics/read-aloud/"
    },
    {
      "name": "songs",
      "slug": "songs",
      "url": "/topics/songs/"
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
    "description": "The new collection of the poetry of Mister Rogers is a true gift for the children of today and the adults who grew up with Mister Rogers throughout their childhoods. A BEAUTIFUL DAY IN THE NEIGHBORHOOD includes 75…",
    "image": "https://vegbooks.org/media/2019/07/a-beautiful-day-in-the-neighborhood.jpeg"
  },
  "previous": {
    "title": "Lola Goes to School",
    "url": "/reviews/lola-goes-to-school/"
  },
  "next": {
    "title": "The Pepper Party Picks the Perfect Pet",
    "url": "/reviews/the-pepper-party-picks-the-perfect-pet/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--left">
        <a href={"/"}><img src={"/media/2019/07/a-beautiful-day-in-the-neighborhood.jpeg"} alt={"A Beautiful Day in the Neighborhood"} width={231} height={300} /></a>
      </figure>
      <p>{"The new collection of the poetry of Mister Rogers is a true gift for the children of today and the adults who grew up with Mister Rogers throughout their childhoods. "}<a href={"https://www.indiebound.org/book/9781683691136"} target="_blank" rel="noopener noreferrer"><strong>{"A BEAUTIFUL DAY IN THE NEIGHBORHOOD"}</strong></a>{" includes 75 songs from both "}<em>{"Mister Rogers’ Neighborhood"}</em>{" and the earlier "}<em>{"The Children’s Corner,"}</em>{" and it’s sure to evoke memories for some and do the work of bolstering children’s self-image for a new generation with the sometimes goofy and sometimes painfully honest messages."}</p>
      <p>{"The collection is filled with familiar verses like “Won’t You Be My Neighbor?,” “It’s You I Like,” and “You Are Special,” to songs that address very specific childhood concerns like “When a Baby Comes,” “It Hurts To Be Lonely,” and the ever-comforting “You Can Never Go Down The Drain.” The lyrics are pro-child, pro-thoughtful responses, and they always encourage children to persevere even while they accept and even celebrate their vulnerabilities. With children’s shows that feel fast and slap-dash, this book reminds us that growing up can feel fast sometimes, and it’s up to grown-ups to help children learn to take a step back and enjoy the moment. Mindfulness is not a new idea!"}</p>
      <p>{"The colorful and simple illustrations by Luke Flowers include a mix of characters from Mister Rogers’ Neighborhood and depictions of the themes in the song featured. While most of the people and animals shows are happy and smiling, some are nervous and shy (Hi, Daniel Tiger!) and other times children are shown as afraid, anxious, or embarrassed. The illustrations are a wonderful accompaniment to the text."}</p>
      <p>{"Highly recommended for every household."}</p>
    </div>
  );
}
