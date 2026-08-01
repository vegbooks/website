import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10544",
  "slug": "vet-volunteers-book-series",
  "url": "/reviews/vet-volunteers-book-series/",
  "legacyUrl": "https://vegbooks.org/index.php/2018/02/20/vet-volunteers-book-series/",
  "title": "Vet Volunteers (book series)",
  "publishedAt": "2018-02-20",
  "publishedLabel": "February 20th, 2018",
  "excerpt": "My 8-year-old daughter has been making her way through every book in the Vet Volunteers book series available at our local library. The series combines her love of mystery novels (she’s also reading every Nancy Drew…",
  "image": {
    "src": "/media/2011/07/i-stock-000009594887-x-small.jpg",
    "alt": "Girl Reading",
    "width": 220,
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
      "name": "Animal Rescue",
      "slug": "animal-rescue",
      "url": "/topics/animal-rescue/"
    },
    {
      "name": "Female Protagonist",
      "slug": "female-protagonist",
      "url": "/topics/female-protagonist/"
    },
    {
      "name": "Jennifer Kali",
      "slug": "jennifer-kali",
      "url": "/topics/jennifer-kali/"
    },
    {
      "name": "Kindness to Animals",
      "slug": "kindness-to-animals",
      "url": "/topics/kindness-to-animals/"
    },
    {
      "name": "Mystery",
      "slug": "mystery",
      "url": "/topics/mystery/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    },
    {
      "name": "Series",
      "slug": "series",
      "url": "/topics/series/"
    },
    {
      "name": "Veterinarian",
      "slug": "veterinarian",
      "url": "/topics/veterinarian/"
    }
  ],
  "reviewer": {
    "name": "Jennifer Kali",
    "slug": "jennifer-kali",
    "url": "/contributors/jennifer-kali/",
    "aliases": [
      "Jennifer Kali",
      "JENNIFER KALI"
    ]
  },
  "seo": {
    "description": "My 8-year-old daughter has been making her way through every book in the Vet Volunteers book series available at our local library. The series combines her love of mystery novels (she’s also reading every Nancy Drew…",
    "image": "https://vegbooks.org/media/2011/07/i-stock-000009594887-x-small.jpg"
  },
  "previous": {
    "title": "One Day a Dot",
    "url": "/reviews/one-day-a-dot/"
  },
  "next": {
    "title": "Little Sid: The Tiny Prince Who Became Buddha",
    "url": "/reviews/little-sid-the-tiny-prince-who-became-buddha/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <img src={"/media/2011/07/i-stock-000009594887-x-small.jpg"} alt={"Girl Reading"} width={220} height={300} />
      </figure>
      <p>{"My 8-year-old daughter has been making her way through every book in the "}<em>{"Vet Volunteers"}</em>{" book series available at our local library. The series combines her love of mystery novels (she’s also reading every "}<em>{"Nancy Drew"}</em>{" book available) with her love of animals. The series, an "}<em>{"American Girl"}</em>{" spin-off, follows 11-year-old Maggie whose Grandmother owns a veterinary clinic and her four friends who volunteer at the clinic. In each book there is an animal mystery. In the first book, there is a crisis involving 10 sick puppies that arrive together at the clinic. It’s found that the puppies were bred in an illegal puppy mill which the kids help shut down."}</p>
      <p>{"The most recent book has inspired her to take action. In "}<em>{"Treading Water"}</em>{", the Vet Volunteers discover pets abandoned after Easter, including baby chicks, baby ducks, and bunnies. They launch a campaign to stop the community from giving animals as pets. Immediately my daughter started designing a poster to hang at her school with a similar message that she wants to display prior to Easter."}</p>
      <p>{"I’ve never read these books. My recommendation comes solely from seeing what kind of reaction they elicit in my daughter. She loves to read them and has read about 10 of them in the last 2 weeks. But even better, these books have inspired her to take action for animals. I highly recommend Vet Volunteers."}</p>
      <p>{"Amazon recommends these books for ages 8-12 and that seems about right."}</p>
    </div>
  );
}
