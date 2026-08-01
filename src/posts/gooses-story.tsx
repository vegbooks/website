import type { PostMetadata } from '../content/types';

export const article = {
  "id": "5404",
  "slug": "gooses-story",
  "url": "/reviews/gooses-story/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/06/24/gooses-story/",
  "title": "Goose’s Story",
  "publishedAt": "2011-06-24",
  "publishedLabel": "June 24th, 2011",
  "excerpt": "Based on her own experiences, Cari Best has penned a picture book that is equally heartfelt and thought-provoking. She tells Goose’s Story from the perspective of a girl who first observes and then befriends an…",
  "image": {
    "src": "/media/2011/06/9780374400323.jpg",
    "alt": "Goose’s Story",
    "width": 210,
    "height": 192
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
      "name": "Birds",
      "slug": "birds",
      "url": "/topics/birds/"
    },
    {
      "name": "Canada Geese",
      "slug": "canada-geese",
      "url": "/topics/canada-geese/"
    },
    {
      "name": "Cari Best",
      "slug": "cari-best",
      "url": "/topics/cari-best/"
    },
    {
      "name": "Female Protagonist",
      "slug": "female-protagonist",
      "url": "/topics/female-protagonist/"
    },
    {
      "name": "Geese",
      "slug": "geese",
      "url": "/topics/geese/"
    },
    {
      "name": "Henry Bergh Award Winner",
      "slug": "henry-bergh-award-winner",
      "url": "/topics/henry-bergh-award-winner/"
    },
    {
      "name": "Holly Meade",
      "slug": "holly-meade",
      "url": "/topics/holly-meade/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Living with Disabilities",
      "slug": "living-with-disabilities",
      "url": "/topics/living-with-disabilities/"
    },
    {
      "name": "Wild Animals",
      "slug": "wild-animals",
      "url": "/topics/wild-animals/"
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
    "description": "Based on her own experiences, Cari Best has penned a picture book that is equally heartfelt and thought-provoking. She tells Goose’s Story from the perspective of a girl who first observes and then befriends an…",
    "image": "https://vegbooks.org/media/2011/06/9780374400323.jpg"
  },
  "previous": {
    "title": "Nini Lost and Found",
    "url": "/reviews/nini-lost-and-found/"
  },
  "next": {
    "title": "Hogwash",
    "url": "/reviews/hogwash/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/06/9780374400323.jpg"}><img src={"/media/2011/06/9780374400323.jpg"} alt={"Goose’s Story"} width={210} height={192} /></a>
      </figure>
      <p>{"Based on her own experiences, "}<a href={"http://us.macmillan.com/author/caribest"} target="_blank" rel="noopener noreferrer">{"Cari Best"}</a>{" has penned a picture book that is equally heartfelt and thought-provoking. She tells "}<em>{"Goose’s Story"}</em>{" from the perspective of a girl who first observes and then befriends an injured Canada goose one spring. When she tells her parents about the goose’s predicament — an injury that will cause her to lose her foot — her father looks away and her mother becomes angry. Ultimately, however, the family decides not to intervene."}</p>
      <p>{"The rest of the story revolves around the girl’s observations of the goose as she learns to cope with having one foot, both physically and socially. At the end of the book, the goose has fully adapted to her disability and returns to the pond near the girl’s home with the rest of the flock, eventually hatching seven goslings with her mate (which the book describes as her friend)."}</p>
      <p>{"I relate to this book in two ways. First, as someone who has worked at wildlife rehabilitation center, I see the moral dilemma in intervening to fix the goose’s injury. While rehabilitation is right in many cases, human intervention can disrupt social groups and puts life-and-death decisions into the hands of rehabilitators. Second, I view this book as saying something about loving an individual who has an impairment or disability. Importantly, the language that Best uses signals something about how the girl sees the goose. She refers to her as “the goose with one foot” or “my goose.” The goose’s impairment is something that the goose "}<em>{"has"}</em>{", rather than something that she "}<em>{"is"}</em>{"."}</p>
      <p>{"Best’s sensitive and insightful text is paired with Holly Meade’s paper collage art, resulting in a wholly appealing book."}</p>
      <p>{"Ages 3-7. For a lesson plan, visit "}<a href={"http://learningtogive.org/teachers/literature_guides/GoosesStory.asp"} target="_blank" rel="noopener noreferrer">{"Learning to Give"}</a>{"."}</p>
    </div>
  );
}
