import type { PostMetadata } from '../content/types';

export const article = {
  "id": "11014",
  "slug": "all-because-you-matter",
  "url": "/reviews/all-because-you-matter/",
  "legacyUrl": "https://vegbooks.org/index.php/2020/11/19/all-because-you-matter/",
  "title": "All Because You Matter",
  "publishedAt": "2020-11-19",
  "publishedLabel": "November 19th, 2020",
  "excerpt": "“They say that matter is all things that make up the universe: energy, stars, space…If that’s the case, then you, dear child, matter.” I’m not embarrassed to admit that the first line of ALL BECAUSE YOU MATTER by…",
  "image": {
    "src": "/media/2020/11/all-because-you-matter.jpg",
    "alt": "All Because You Matter",
    "width": 400,
    "height": 400
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
      "name": "All Because You Matter",
      "slug": "all-because-you-matter",
      "url": "/topics/all-because-you-matter/"
    },
    {
      "name": "Black Lives Matter",
      "slug": "black-lives-matter",
      "url": "/topics/black-lives-matter/"
    },
    {
      "name": "Bryan Collier",
      "slug": "bryan-collier",
      "url": "/topics/bryan-collier/"
    },
    {
      "name": "Picture Book",
      "slug": "picture-book",
      "url": "/topics/picture-book/"
    },
    {
      "name": "Tami Charles",
      "slug": "tami-charles",
      "url": "/topics/tami-charles/"
    },
    {
      "name": "young readers",
      "slug": "young-readers",
      "url": "/topics/young-readers/"
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
    "description": "“They say that matter is all things that make up the universe: energy, stars, space…If that’s the case, then you, dear child, matter.” I’m not embarrassed to admit that the first line of ALL BECAUSE YOU MATTER by…",
    "image": "https://vegbooks.org/media/2020/11/all-because-you-matter.jpg"
  },
  "previous": {
    "title": "Poopendous!",
    "url": "/reviews/poopendous/"
  },
  "next": {
    "title": "Fry Bread",
    "url": "/reviews/fry-bread/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--center">
        <a href={"/media/2020/11/all-because-you-matter.jpg"}><img src={"/media/2020/11/all-because-you-matter.jpg"} alt={"All Because You Matter"} width={400} height={400} /></a>
      </figure>
      <p><strong>{"“They say that matter is all things that make up the universe: energy, stars, space…If that’s the case, then you, dear child, matter.”"}</strong></p>
      <p>{"I’m not embarrassed to admit that the first line of "}<a href={"https://www.indiebound.org/book/9781338574852"} target="_blank" rel="noopener noreferrer">{"ALL BECAUSE YOU MATTER"}</a>{" by Tami Charles brought tears to my eyes. It’s beautiful. Together with the accompanying illustration, of a pregnant Black couple cradling the mother-to-be’s belly, the words hold all the love and hope and expectation we give to our children. This powerful children’s book holds up children, especially Black and marginalized children, and assured them that their lives matter to the world."}</p>
      <p>{"From the personal and private opening image, the story travels to ancestors’ accomplishments and experiences. The child reading or listening to the book is reminded that their ancestors had hopes and dreams and always knew that “you matter.” Always."}</p>
      <p>{"Alternating between personal joys and painful moments, and then opening up to wider, monumental details, works beautifully in this picture book. Readers will both relate to and feel empathy for the examples given: having your name giggled at in class, receiving “big, bold, red” marks on your school work, watching tragic abuses on the news. And like a comforting pep talk after a bad day, the book bolsters the reader as “dreamed of, carried like a knapsack full of wishes” since the day the universe was created. It’s a beautiful, powerful, and loving quilt of assurances to wrap around children who may sometimes feel uncertain about their place in the world."}</p>
      <figure class="content-image content-image--center">
        <a href={"/media/2020/11/because-you-matter-illustration.jpg"}><img src={"/media/2020/11/because-you-matter-illustration.jpg"} alt={""} width={431} height={251} /></a>
      </figure>
      <p>{"The stunning and colorful illustrations by Bryan Collier convey deep and profound emotion on every page. In an array of quilted collage (his grandmother was a quilter) and expressive illustration, the young boy at the center of the book is surrounded by colors and faces and patterns that celebrate his joys and comfort him in tougher times. The folk art style of the collage serves as a vibrant background for the detailed and realistic portraits of the characters throughout the book. The emotions in the illustrations that depict school incidents and response to Black Lives Matter are particularly powerful."}</p>
      <p>{"Tami Charles shares in the Author’s Note that she wrote "}<a href={"https://www.indiebound.org/book/9781338574852"} target="_blank" rel="noopener noreferrer">{"ALL BECAUSE YOU MATTER"}</a>{" to help families with young children begin conversations about the racial climate in the USA. The examples of the hurtful experiences children have, and more widely, the mention of taking a knee, and the listed first names of murdered Black boys and men are age-appropriate and allow families to choose whether to discuss the issues directly or more gently. Charles also shares that she wrote the book to remind children, “especially those from marginalized backgrounds,” that they all have generations of ancestors and accomplishments holding them up because they matter. Even in moments where they are made to feel small, they can be proud of who they are and where they came from because the matter."}</p>
      <p>{"Very highly recommended."}</p>
    </div>
  );
}
