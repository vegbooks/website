import type { PostMetadata } from '../content/types';

export const article = {
  "id": "3079",
  "slug": "the-trouble-with-dogs-said-dad",
  "url": "/reviews/the-trouble-with-dogs-said-dad/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/09/14/the-trouble-with-dogs-said-dad/",
  "title": "The Trouble with Dogs, Said Dad",
  "publishedAt": "2010-09-14",
  "publishedLabel": "September 14th, 2010",
  "excerpt": "I love this book! Featuring some nontraditional (read: tattooed and pierced) parents, compassionate and assertive kids, and cute dogs, The Trouble with Dogs, Said Dad is a fun read. Bob Graham tells a story that’s…",
  "image": {
    "src": "/media/2010/09/9780763649739.jpg",
    "alt": "The Trouble with Dogs, Said Dad",
    "width": 210,
    "height": 193
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
      "name": "Bob Graham",
      "slug": "bob-graham",
      "url": "/topics/bob-graham/"
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
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
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
    "description": "I love this book! Featuring some nontraditional (read: tattooed and pierced) parents, compassionate and assertive kids, and cute dogs, The Trouble with Dogs, Said Dad is a fun read. Bob Graham tells a story that’s…",
    "image": "https://vegbooks.org/media/2010/09/9780763649739.jpg"
  },
  "previous": {
    "title": "New Family-Friendly Cookbooks",
    "url": "/reviews/new-family-friendly-cookbooks/"
  },
  "next": {
    "title": "I See a Kookaburra!",
    "url": "/reviews/i-see-a-kookaburra/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/09/9780763649739.jpg"}><img src={"/media/2010/09/9780763649739.jpg"} alt={"The Trouble with Dogs, Said Dad"} width={210} height={193} /></a>
      </figure>
      <p>{"I love this book! Featuring some nontraditional (read: tattooed and pierced) parents, compassionate and assertive kids, and cute dogs, "}<em><a href={"http://www.education.wisc.edu/ccbc/books/detailBook.asp?idBooks=2339"} target="_blank" rel="noopener noreferrer">{"The Trouble with Dogs, Said Dad"}</a></em>{" is a fun read."}</p>
      <p><a href={"http://www.theweeweb.co.uk/public/author_profile.php?id=172"} target="_blank" rel="noopener noreferrer">{"Bob Graham"}</a>{" tells a story that’s familiar to anyone who’s loved and lived with dogs: the family has an exuberant pup who can sometimes be, well, a little much. They hire a dog trainer to help them out, but his “training” methods involve a choke chain and a lot of yelling. In the end, the family decides against these harsh ways, and let their excitable pup simply be who he is. Even the loudmouth trainer comes around to the pup’s charms."}</p>
      <p>{"The ending is a bit impractical — after all, in real life, dog behavior problems can cause significant damage or "}<a href={"http://www.tufts.edu/vet/behavior/abh.shtml"} target="_blank" rel="noopener noreferrer">{"reflect genuine distress"}</a>{" — but still, there’s something lovely about Mr. Graham’s the message of care and respect. And the illustrations cannot be beat!"}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
