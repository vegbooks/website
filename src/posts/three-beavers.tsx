import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10035",
  "slug": "three-beavers",
  "url": "/reviews/three-beavers/",
  "legacyUrl": "https://vegbooks.org/index.php/2015/02/02/three-beavers/",
  "title": "Three Little Beavers",
  "publishedAt": "2015-02-02",
  "publishedLabel": "February 2nd, 2015",
  "excerpt": "Three Little Beavers tells the story of Beatrix the Beaver and her two siblings. Beatrix worries that she’s not as good at anything as her brother and sister, who seem to be good at everything. But when the three…",
  "image": {
    "src": "/media/2015/02/three-beavers.jpg",
    "alt": "ThreeBeavers",
    "width": 210,
    "height": 247
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
      "name": "Beavers",
      "slug": "beavers",
      "url": "/topics/beavers/"
    },
    {
      "name": "Confidence",
      "slug": "confidence",
      "url": "/topics/confidence/"
    },
    {
      "name": "Good for Toddlers",
      "slug": "good-for-toddlers",
      "url": "/topics/good-for-toddlers/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Issues Facing Wildlife",
      "slug": "issues-facing-wildlife",
      "url": "/topics/issues-facing-wildlife/"
    },
    {
      "name": "Living With Wildlife",
      "slug": "living-with-wildlife",
      "url": "/topics/living-with-wildlife/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Wild Animals",
      "slug": "wild-animals",
      "url": "/topics/wild-animals/"
    },
    {
      "name": "Wildlife Books for Kids",
      "slug": "wildlife-books-for-kids",
      "url": "/topics/wildlife-books-for-kids/"
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
    "description": "Three Little Beavers tells the story of Beatrix the Beaver and her two siblings. Beatrix worries that she’s not as good at anything as her brother and sister, who seem to be good at everything. But when the three…",
    "image": "https://vegbooks.org/media/2015/02/three-beavers.jpg"
  },
  "previous": {
    "title": "Apples, Bean Dip, & Carrot Cake",
    "url": "/reviews/apples-bean-dip-and-carrot-cake/"
  },
  "next": {
    "title": "Beautiful Moon: A Child’s Prayer",
    "url": "/reviews/beautiful-moon-a-childs-prayer/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <img src={"/media/2015/02/three-beavers.jpg"} alt={"ThreeBeavers"} width={210} height={247} />
      </figure>
      <p><em>{"Three Little Beavers"}</em>{" tells the story of Beatrix the Beaver and her two siblings. Beatrix worries that she’s not as good at anything as her brother and sister, who seem to be good at everything. But when the three beavers get caught in beaver traps, Beatrix’s abilities start to shine. When her siblings are scared and nervous, Beatrix is calm and rational. My daughter loved pointing out the various things that at which Beatrix is very good and it started a discussion regarding different abilities and how everyone brings different strengths."}</p>
      <p>{"The peril in this story is one that animal lovers will appreciate. The three beavers are trapped by resort that doesn’t want them destroying their plants and gardens. The resort intends to move the beavers down river. A visitor to the resort says that he came to the resort just to see the beavers proposes a new plan that allows the beavers to share the space with the inn. My daughter very much enjoyed this solution which allowed the beavers to remain in their homes."}</p>
      <p>{"My kids received the book jointly as a Christmas present, and are very much enjoying it. It was great illustrations and simple text that can be enjoyed by both my one-year-old son and five-year-old daughter. But for older kids by far the best part of the book is the end where there are four dense pages of beaver facts. My five year old loved this section the most, though it is well above the scope of my one year old. This book ("}<a href={"http://www.amazon.com/gp/product/1607185334/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=1607185334&linkCode=as2&tag=vegbooks-20&linkId=4BMTGAK6TQ6VLNRU"} target="_blank" rel="noopener noreferrer">{"Amazon affiliate link"}</a>{") is a great addition to our library."}</p>
    </div>
  );
}
