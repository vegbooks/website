import type { PostMetadata } from '../content/types';

export const article = {
  "id": "9780",
  "slug": "snuggle-the-baby",
  "url": "/reviews/snuggle-the-baby/",
  "legacyUrl": "https://vegbooks.org/index.php/2014/08/03/snuggle-the-baby/",
  "title": "Snuggle the Baby",
  "publishedAt": "2014-08-03",
  "publishedLabel": "August 3rd, 2014",
  "excerpt": "I love Sara Gillingham’s illustrations, so it was with high expectations that I checked out this interactive board book. Designed for toddlers and preschoolers, the book incorporates flaps and pop-outs that allow the…",
  "image": {
    "src": "/media/2014/08/9781419711244.jpg",
    "alt": "Snuggle the Baby board book cover",
    "width": 210,
    "height": 341
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
      "name": "Board Book",
      "slug": "board-book",
      "url": "/topics/board-book/"
    },
    {
      "name": "Caretaking",
      "slug": "caretaking",
      "url": "/topics/caretaking/"
    },
    {
      "name": "Good for Toddlers",
      "slug": "good-for-toddlers",
      "url": "/topics/good-for-toddlers/"
    },
    {
      "name": "New Sibling",
      "slug": "new-sibling",
      "url": "/topics/new-sibling/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Sara Gillingham",
      "slug": "sara-gillingham",
      "url": "/topics/sara-gillingham/"
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
    "description": "I love Sara Gillingham’s illustrations, so it was with high expectations that I checked out this interactive board book. Designed for toddlers and preschoolers, the book incorporates flaps and pop-outs that allow the…",
    "image": "https://vegbooks.org/media/2014/08/9781419711244.jpg"
  },
  "previous": {
    "title": "A Boy and His Jaguar",
    "url": "/reviews/a-boy-and-his-jaguar/"
  },
  "next": {
    "title": "Rob Laidlaw: Double Feature",
    "url": "/reviews/rob-laidlaw-double-feature/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/reviews/snuggle-the-baby/"}><img src={"/media/2014/08/9781419711244.jpg"} alt={"Snuggle the Baby board book cover"} width={210} height={341} /></a>
      </figure>
      <p>{"I love Sara Gillingham’s illustrations, so it was with high expectations that I checked out this interactive board book. Designed for toddlers and preschoolers, the book incorporates flaps and pop-outs that allow the reader to feed, tickle, diaper, swaddle, shush, rock, and tuck in the baby. Although most of the pages are self-explanatory, I have to admit that I did not realize at first that the baby to tuck in on the final page is intended to be popped out from a previous page. (I thought it was missing at first!)"}</p>
      <p>{"As always, the illustrations are adorable, and a wide array of babies are depicted, making this book a good fit for multicultural and multiethnic families, along with everyone else. However, like "}<a href={"https://www.kirkusreviews.com/book-reviews/sara-gillingham/snuggle-the-baby/"} target="_blank" rel="noopener noreferrer">{"other reviewers"}</a>{", I have reservations about the design of the book, which is perhaps too flimsy for small children."}</p>
      <p>{"Additionally, I was upset to see that nursing was not included on the feeding page, which offered bottle and spoon as two alternatives. Obviously, this isn’t an option for older siblings helping out with a new arrival, but still, I think it’s important to recognize the importance of nursing, particularly given how often our culture ostracizes and alienates nursing mothers. (And it’s National Breastfeeding Month, so it’s a good time to talk about breastfeeding in children’s literature!)"}</p>
      <p>{"Still, if you’re preparing your child for a new sibling, this book is worth checking out. Ages 2 to 4."}</p>
      <p><em>{"The publisher sent a copy of this book for review."}</em></p>
    </div>
  );
}
