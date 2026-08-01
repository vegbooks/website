import type { PostMetadata } from '../content/types';

export const article = {
  "id": "11072",
  "slug": "we-are-still-here",
  "url": "/reviews/we-are-still-here/",
  "legacyUrl": "https://vegbooks.org/index.php/2021/04/18/we-are-still-here/",
  "title": "We Are Still Here!",
  "publishedAt": "2021-04-18",
  "publishedLabel": "April 18th, 2021",
  "excerpt": "This non-fiction picture book, WE ARE STILL HERE!, is subtitled Native American Truths Everyone Should Know,and the book makes sure the reader knows them by the end. Written by Traci Sorell in the structure of…",
  "image": {
    "src": "/media/2021/03/we-are-still-here.jpg",
    "alt": "We Are Still Here!",
    "width": 272,
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
      "name": "elementary readers",
      "slug": "elementary-readers",
      "url": "/topics/elementary-readers/"
    },
    {
      "name": "Frané Lessac",
      "slug": "frane-lessac",
      "url": "/topics/frane-lessac/"
    },
    {
      "name": "Native American Nations",
      "slug": "native-american-nations",
      "url": "/topics/native-american-nations/"
    },
    {
      "name": "Native American Truths Everyone Should Know",
      "slug": "native-american-truths-everyone-should-know",
      "url": "/topics/native-american-truths-everyone-should-know/"
    },
    {
      "name": "Picture Book",
      "slug": "picture-book",
      "url": "/topics/picture-book/"
    },
    {
      "name": "Traci Sorell",
      "slug": "traci-sorell",
      "url": "/topics/traci-sorell/"
    },
    {
      "name": "We Are Still Here!",
      "slug": "we-are-still-here",
      "url": "/topics/we-are-still-here/"
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
    "description": "This non-fiction picture book, WE ARE STILL HERE!, is subtitled Native American Truths Everyone Should Know,and the book makes sure the reader knows them by the end. Written by Traci Sorell in the structure of…",
    "image": "https://vegbooks.org/media/2021/03/we-are-still-here.jpg"
  },
  "previous": {
    "title": "We Laugh Alike, Juntos Nos Reímos",
    "url": "/reviews/we-laugh-alike-juntos-nos-reimos/"
  },
  "next": {
    "title": "Summertime Sleepers: Animals that Estivate",
    "url": "/reviews/summertime-sleepers-animals-that-estivate/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--left">
        <a href={"/media/2021/03/we-are-still-here.jpg"}><img src={"/media/2021/03/we-are-still-here.jpg"} alt={"We Are Still Here!"} width={272} height={300} /></a>
      </figure>
      <p>{"This non-fiction picture book, "}<a href={"https://www.indiebound.org/book/9781623541927"} target="_blank" rel="noopener noreferrer"><strong>{"WE ARE STILL HERE!"}</strong></a>{", is subtitled "}<em>{"Native American Truths Everyone Should Know,"}</em>{"and the book makes sure the reader knows them by the end. Written by Traci Sorell in the structure of elementary student presentations, the book educates us on topics often glossed over in elementary school and beyond. Each section concludes with the refrain, “We Are Still Here!” reminding us that this history is still very much alive and unfolding."}</p>
      <p>{"From the first page, unfair policies and broken treaties are introduced and discussed. Each topic is written clearly and with the late elementary reader in mind. Policies like Assimilation, Allotment, Relocation precede the later sections of Tribal Activism, Self-Determination, and the fight for Religious Freedom. The end result ensures that children will feel hopeful and empowered to share what they have learned."}</p>
      <p>{"The illustrations by Frané Lessac compliment the text by adding not just visualization but meaning. The facing pages focused on Termination, for example, include text that discuss betrayal of treaties by the US Government, and the illustration contrasts Menominee Nation land for sale, and presumed purchasers fishing from a rowboat, as members of the Menominee hold signs demanding justice. The page about Language Revival shows a classroom of children learning their native languages, and the Cherokee Syllabary, along with Sequoyah, its inventor, on the board."}</p>
      <p>{"The details within the pages are supplemented by additional information on the 12 topics, including a timeline and glossary. A caregiver unfamiliar with the topics will appreciate reading the end pages in the book prior to sharing it with a child; there are sure to be questions."}</p>
      <p><a href={"https://www.indiebound.org/book/9781623541927"} target="_blank" rel="noopener noreferrer"><em>{"We Are Still Here!"}</em></a>{" is highly recommended."}</p>
    </div>
  );
}
