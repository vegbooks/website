import type { PostMetadata } from '../content/types';

export const article = {
  "id": "9070",
  "slug": "animals-have-feelings-too",
  "url": "/reviews/animals-have-feelings-too/",
  "legacyUrl": "https://vegbooks.org/index.php/2013/09/03/animals-have-feelings-too/",
  "title": "Animals Have Feelings, Too!",
  "publishedAt": "2013-09-03",
  "publishedLabel": "September 3rd, 2013",
  "excerpt": "I’m absolutely enchanted by the new trend in libraries and literacy efforts that partners youth together with canine therapy dogs with the aim of enhancing a child’s reading skills. Studies show that kids who read to…",
  "image": {
    "src": "/media/2013/09/ahft-book-cover-final.jpg",
    "alt": "AHFT-Book Cover-Final",
    "width": 210,
    "height": 168
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
      "name": "Carolyn M. Mullin",
      "slug": "carolyn-m-mullin",
      "url": "/topics/carolyn-m-mullin/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Karen Lee Stevens",
      "slug": "karen-lee-stevens",
      "url": "/topics/karen-lee-stevens/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Teri Rider",
      "slug": "teri-rider",
      "url": "/topics/teri-rider/"
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
    "description": "I’m absolutely enchanted by the new trend in libraries and literacy efforts that partners youth together with canine therapy dogs with the aim of enhancing a child’s reading skills. Studies show that kids who read to…",
    "image": "https://vegbooks.org/media/2013/09/ahft-book-cover-final.jpg"
  },
  "previous": {
    "title": "Monster on the Hill",
    "url": "/reviews/monster-on-the-hill/"
  },
  "next": {
    "title": "No Monkeys, No Chocolate",
    "url": "/reviews/no-monkeys-no-chocolate/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2013/09/ahft-book-cover-final.jpg"}><img src={"/media/2013/09/ahft-book-cover-final.jpg"} alt={"AHFT-Book Cover-Final"} width={210} height={168} /></a>
      </figure>
      <p>{"I’m absolutely enchanted by the new trend in libraries and literacy efforts that partners youth together with canine therapy dogs with the aim of enhancing a child’s reading skills. Studies show that kids who read to canines significantly increase their reading and comprehension skills. Researchers at University of California – Davis found that children who read to dogs increased their reading fluency between 12 percent and 30 percent."}</p>
      <p>{"In my neck of the woods, in Santa Barbara, CA, humane education specialist Karen Lee Stevens started her own organization All for Animals, which runs a wonderful program called ARF, or Animals + Reading = Fun. As part of ARF, she wrote and published her first children’s book that she actively uses in the classroom. At the end of each classroom presentation, first and second graders get a complimentary take-home copy of "}<em>{"Animals Have Feelings, Too! Exploring Emotions A to Z"}</em>{"."}</p>
      <p>{"The book does just what its title suggests and uses the letters of the alphabet to showcase the vast range of emotions animals, in this case dogs, and people alike experience (A = affectionate, B = bubbly; C = compassionate). Readers follow the story of Sandy the labrador, who in real life is the therapy dog that goes into classrooms with Karen. What I particularly like about this book are the uncommon adjectives used to describe Sandy, or any animal, for this early elementary audience: voiceless, tender, zonked, envious, impatient. They’ll foster great discussions for parents or educators and their young ones."}</p>
      <p>{"Visit the "}<a href={"http://allforanimals.org/arf/"} target="_blank" rel="noopener noreferrer">{"AFA website"}</a>{" for more information and a downloadable coloring page inspired by the book."}</p>
      <p>{"Ages 4 to 8."}</p>
    </div>
  );
}
