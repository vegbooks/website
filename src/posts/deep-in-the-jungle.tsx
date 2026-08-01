import type { PostMetadata } from '../content/types';

export const article = {
  "id": "2198",
  "slug": "deep-in-the-jungle",
  "url": "/reviews/deep-in-the-jungle/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/07/07/deep-in-the-jungle/",
  "title": "Deep in the Jungle",
  "publishedAt": "2010-07-07",
  "publishedLabel": "July 7th, 2010",
  "excerpt": "What happens when you take an arrogant jungle lion and put him in a circus? He finds that he much preferred life in the jungle, and he returns with a new, more refined attitude toward his animal neighbors. In Deep in…",
  "image": {
    "src": "/media/2010/07/053-deep-in-the-jungle-cover.jpg",
    "alt": "Deep in the Jungle",
    "width": 206,
    "height": 270
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
      "name": "Animal Liberation",
      "slug": "animal-liberation",
      "url": "/topics/animal-liberation/"
    },
    {
      "name": "Circus",
      "slug": "circus",
      "url": "/topics/circus/"
    },
    {
      "name": "Community",
      "slug": "community",
      "url": "/topics/community/"
    },
    {
      "name": "Dan Yaccarino",
      "slug": "dan-yaccarino",
      "url": "/topics/dan-yaccarino/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Jacqueline Bodnar",
      "slug": "jacqueline-bodnar",
      "url": "/topics/jacqueline-bodnar/"
    },
    {
      "name": "Lions",
      "slug": "lions",
      "url": "/topics/lions/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Respect for Nature",
      "slug": "respect-for-nature",
      "url": "/topics/respect-for-nature/"
    }
  ],
  "reviewer": {
    "name": "Jacqueline Bodnar",
    "slug": "jacqueline-bodnar",
    "url": "/contributors/jacqueline-bodnar/",
    "aliases": [
      "JACQUELINE BODNAR"
    ]
  },
  "seo": {
    "description": "What happens when you take an arrogant jungle lion and put him in a circus? He finds that he much preferred life in the jungle, and he returns with a new, more refined attitude toward his animal neighbors. In Deep in…",
    "image": "https://vegbooks.org/media/2010/07/053-deep-in-the-jungle-cover.jpg"
  },
  "previous": {
    "title": "Flush",
    "url": "/reviews/flush/"
  },
  "next": {
    "title": "Beachcombing",
    "url": "/reviews/beachcombing/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/07/053-deep-in-the-jungle-cover.jpg"}><img src={"/media/2010/07/053-deep-in-the-jungle-cover.jpg"} alt={"Deep in the Jungle"} width={206} height={270} /></a>
      </figure>
      <p>{"What happens when you take an arrogant jungle lion and put him in a circus? He finds that he much preferred life in the jungle, and he returns with a new, more refined attitude toward his animal neighbors."}</p>
      <p>{"In "}<em><a href={"http://www.goodreads.com/book/show/1888533.Deep_in_the_Jungle"} target="_blank" rel="noopener noreferrer">{"Deep in the Jungle"}</a></em>{", author Dan Yaccarino takes a look at circuses through the eyes of a mighty lion. The lion is recruited, believing that he is going to become famous, only to find that he is put into a circus. In traditional circus fashion, he is placed in a cage and made to perform to the crack of a whip."}</p>
      <figure class="content-image content-image--left">
        <a href={"/media/2010/07/054-deep-in-the-jungle-animal-image.jpg"}><img src={"/media/2010/07/054-deep-in-the-jungle-animal-image.jpg"} alt={""} width={193} height={216} /></a>
      </figure>
      <figure class="content-image content-image--left">
        <a href={"/media/2010/07/055-deep-in-the-jungle-happy-animals.jpg"}><img src={"/media/2010/07/055-deep-in-the-jungle-happy-animals.jpg"} alt={""} width={193} height={175} /></a>
      </figure>
      <p>{"Unhappy with this arrangement, the lion decides to eat his way back to the jungle, starting by eating his trainer in order to break free. He eventually finds his way back to the jungle where he and the other animals belong. This time, however, he has a much softer outlook and treats the other animals with respect."}</p>
      <p>{"Vegetarian parents who are teaching their kids about "}<a href={"http://www.thevegetariansite.com/ethics_regan.htm"} target="_blank" rel="noopener noreferrer">{"animal rights"}</a>{" and the downside of the circus will appreciate this story. It reminds us that the grass is not always greener on the other side, and that animals prefer their freedom."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
