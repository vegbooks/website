import type { PostMetadata } from '../content/types';

export const article = {
  "id": "5050",
  "slug": "eight-days-a-story-of-haiti",
  "url": "/reviews/eight-days-a-story-of-haiti/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/05/15/eight-days-a-story-of-haiti/",
  "title": "Eight Days: A Story of Haiti",
  "publishedAt": "2011-05-15",
  "publishedLabel": "May 15th, 2011",
  "excerpt": "I’ve worked hard to let my kid just be a kid by shielding him from the disturbing news of world. This means that to a large extent, he is pretty unaware of domestic and international disasters. I’m well aware that I…",
  "image": {
    "src": "/media/2011/05/eight-days-cover.jpg",
    "alt": "Eight Days: A Story of Haiti",
    "width": 210,
    "height": 326
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
      "name": "Alix Delinois",
      "slug": "alix-delinois",
      "url": "/topics/alix-delinois/"
    },
    {
      "name": "Current Events",
      "slug": "current-events",
      "url": "/topics/current-events/"
    },
    {
      "name": "Death",
      "slug": "death",
      "url": "/topics/death/"
    },
    {
      "name": "Disasters",
      "slug": "disasters",
      "url": "/topics/disasters/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Earthquake",
      "slug": "earthquake",
      "url": "/topics/earthquake/"
    },
    {
      "name": "Edwidge Danticat",
      "slug": "edwidge-danticat",
      "url": "/topics/edwidge-danticat/"
    },
    {
      "name": "Haiti",
      "slug": "haiti",
      "url": "/topics/haiti/"
    },
    {
      "name": "Hope",
      "slug": "hope",
      "url": "/topics/hope/"
    },
    {
      "name": "Imagination",
      "slug": "imagination",
      "url": "/topics/imagination/"
    },
    {
      "name": "Jennifer Gannett",
      "slug": "jennifer-gannett",
      "url": "/topics/jennifer-gannett/"
    },
    {
      "name": "Survival",
      "slug": "survival",
      "url": "/topics/survival/"
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
    "description": "I’ve worked hard to let my kid just be a kid by shielding him from the disturbing news of world. This means that to a large extent, he is pretty unaware of domestic and international disasters. I’m well aware that I…",
    "image": "https://vegbooks.org/media/2011/05/eight-days-cover.jpg"
  },
  "previous": {
    "title": "One Kingdom: Our Lives with Animals",
    "url": "/reviews/one-kingdom-our-lives-with-animals/"
  },
  "next": {
    "title": "Memorial Day Surprise",
    "url": "/reviews/memorial-day-surprise/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/05/eight-days-cover.jpg"}><img src={"/media/2011/05/eight-days-cover.jpg"} alt={"Eight Days: A Story of Haiti"} width={210} height={326} /></a>
      </figure>
      <p>{"I’ve worked hard to let my kid just be a kid by shielding him from the disturbing news of world. This means that to a large extent, he is pretty unaware of domestic and international disasters. I’m well aware that I can’t keep him in this little bubble for much longer, though, so I’m always interested in books that describe or portray a version of disasters that is more appropriate for young kids. "}<a href={"http://www.powells.com/biblio/9780545278492"} target="_blank" rel="noopener noreferrer"><em>{"Eight Days: A Story of Haiti"}</em></a>{"by "}<a href={"http://en.wikipedia.org/wiki/Edwidge_Danticat"} target="_blank" rel="noopener noreferrer">{"Edwidge Danticat"}</a>{" is just that type of book."}</p>
      <p>{"Seven year old Junior is trapped for eight days in the rubble of his Port-au-Price house during Haiti’s January 2010 earthquake. Instead of focusing on negative and fearful feelings, Junior explains that every day he was trapped, he used his imagination to play. This could almost be a storybook simply describing a young child’s days of play—"}<em>{"almost"}</em>{". Each of the eight days’ imagined activities contain a spirit of hope, and even the references to Junior’s best friend’s death are treated gently and with love. When Junior is reunited with his family, there is joy and relief. Parents and caregivers may find themselves giving their kids extra hugs while reading this story, for while Junior doesn’t discuss the greater impacts of the immense tragedy that befell his country, adults know, and "}<a href={"http://edeyo.org/who-we-are"} target="_blank" rel="noopener noreferrer">{"we know about the struggles that Haiti continues to face"}</a>{"."}</p>
      <p><em>{"Eight Days"}</em>{" is illustrated brightly and joyfully by "}<a href={"http://alixdelinois.com/home.html"} target="_blank" rel="noopener noreferrer">{"Alix Delinois"}</a>{". While the story itself is an accessible, understated way of bringing a discussion about a sad and scary event to young children, the illustrations are lively and bring welcome balance to the book."}</p>
      <p>{"Recommended for ages 5 and up."}</p>
    </div>
  );
}
