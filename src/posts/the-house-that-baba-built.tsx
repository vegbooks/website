import type { PostMetadata } from '../content/types';

export const article = {
  "id": "7846",
  "slug": "the-house-that-baba-built",
  "url": "/reviews/the-house-that-baba-built/",
  "legacyUrl": "https://vegbooks.org/index.php/2012/07/01/the-house-that-baba-built/",
  "title": "The House that Baba Built",
  "publishedAt": "2012-07-01",
  "publishedLabel": "July 1st, 2012",
  "excerpt": "The House Baba Built: An Artist’s Childhood in China is a beautiful tribute to author Ed Young’s father and childhood home as well as it is a window into his own childhood. Young’s illustrations are a delightful…",
  "image": {
    "src": "/media/2012/07/9780316076289.jpeg",
    "alt": "The House that Baba Built",
    "width": 210,
    "height": 276
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
      "name": "Asia",
      "slug": "asia",
      "url": "/topics/asia/"
    },
    {
      "name": "Autobiography",
      "slug": "autobiography",
      "url": "/topics/autobiography/"
    },
    {
      "name": "China",
      "slug": "china",
      "url": "/topics/china/"
    },
    {
      "name": "Depictions of Meat in Books",
      "slug": "depictions-of-meat-in-books",
      "url": "/topics/depictions-of-meat-in-books/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Ed Young",
      "slug": "ed-young",
      "url": "/topics/ed-young/"
    },
    {
      "name": "Family",
      "slug": "family",
      "url": "/topics/family/"
    },
    {
      "name": "Fathers",
      "slug": "fathers",
      "url": "/topics/fathers/"
    },
    {
      "name": "History",
      "slug": "history",
      "url": "/topics/history/"
    },
    {
      "name": "Huyen MacMichael",
      "slug": "huyen-macmichael",
      "url": "/topics/huyen-macmichael/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Picture Books",
      "slug": "picture-books",
      "url": "/topics/picture-books/"
    },
    {
      "name": "War",
      "slug": "war",
      "url": "/topics/war/"
    }
  ],
  "reviewer": {
    "name": "Huyen MacMichael",
    "slug": "huyen-macmichael",
    "url": "/contributors/huyen-macmichael/",
    "aliases": [
      "HUYEN MACMICHAEL"
    ]
  },
  "seo": {
    "description": "The House Baba Built: An Artist’s Childhood in China is a beautiful tribute to author Ed Young’s father and childhood home as well as it is a window into his own childhood. Young’s illustrations are a delightful…",
    "image": "https://vegbooks.org/media/2012/07/9780316076289.jpeg"
  },
  "previous": {
    "title": "One Dog and His Boy",
    "url": "/reviews/one-boy-and-his-dog/"
  },
  "next": {
    "title": "Click, Clack, ABC",
    "url": "/reviews/click-clack-abc/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2012/07/9780316076289.jpeg"}><img src={"/media/2012/07/9780316076289.jpeg"} alt={"The House that Baba Built"} width={210} height={276} /></a>
      </figure>
      <p><em>{"The House Baba Built: An Artist’s Childhood in China"}</em>{" is a beautiful tribute to author Ed Young’s father and childhood home as well as it is a window into his own childhood. Young’s illustrations are a delightful collage of photos, sketches, and cutouts housing his memories of his family during the years of war in China. The illustrations fill entire pages (sometimes extended fold out pages) with color and dynamic compositions that emphasize a fun and active family life, despite -and maybe because of- the war. Young describes his family members as well as three other families who shared the house his Baba built and the art gives a clearer view of the people and setting of the house in Shanghai. I especially love the inclusion of personal family photos and labels as well as a floor plan of the house."}</p>
      <p>{"The publisher’s review copy is a lovely hardback with colorful dust jacket and fold out pages. It hardly looks like a war story and in fact the waar seems to take a backseat to the family story, which appeals to me, especially for a children’s book. Although not a story I would typically choose for my five year old, she was riveted by the story and images, even though it is a lengthier story than her usual. The narrative from a child’s perspective helps keep the focus on what children like with only mentions of how the war affects their lives like the type of food available."}</p>
      <p>{"From a vegetarian perspective, it is not veg-friendly where there are several mentions of meat. However, the references to meat give a casual yet accurate depiction of part of the Chinese culture as well as demonstrating how war affects the family. With so many other interesting descriptions, I felt like the description of non-veg foods were minimal in comparison and my daughter did not focus on them at all."}</p>
      <p>{"As an Asian parent, I appreciate books that can bring in elements of the Asian culture and Young figuratively invites us into his home, just as his parents invited several families to live in the house. It was surprising however to read about Young’s own fascination with American culture such as his boyhood interest in cowboys. The child perspective (like descriptions of roller skating, hide and seek, and other activities) definitely helps children relate to the story. "}<a href={"http://www.nytimes.com/2011/11/13/books/review/picture-books-about-childhoods-in-wartime-asia.html"} target="_blank" rel="noopener noreferrer"><em>{"The House Baba Built"}</em></a>{" gives child and adult readers alike an informal lesson in anthropology and history, as well as art and family appreciation."}</p>
    </div>
  );
}
