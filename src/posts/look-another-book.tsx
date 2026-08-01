import type { PostMetadata } from '../content/types';

export const article = {
  "id": "8545",
  "slug": "look-another-book",
  "url": "/reviews/look-another-book/",
  "legacyUrl": "https://vegbooks.org/index.php/2013/01/31/look-another-book/",
  "title": "Look! Another Book!",
  "publishedAt": "2013-01-31",
  "publishedLabel": "January 31st, 2013",
  "excerpt": "When I received a review copy of Bob Staake’s Look! Another Book! in the mail, our nearly 6-year-old was instantly drawn to it. The larger than average size and bright, illustrated cover compelled us to open the book…",
  "image": {
    "src": "/media/2013/01/38cba1d7775389916e293ddc692b2d7e.jpg",
    "alt": "Look! Another Book!",
    "width": 210,
    "height": 274
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
      "name": "Bob Staake",
      "slug": "bob-staake",
      "url": "/topics/bob-staake/"
    },
    {
      "name": "Depictions of Meat in Books",
      "slug": "depictions-of-meat-in-books",
      "url": "/topics/depictions-of-meat-in-books/"
    },
    {
      "name": "Heather Clark",
      "slug": "heather-clark",
      "url": "/topics/heather-clark/"
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
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    }
  ],
  "reviewer": {
    "name": "Heather Clark",
    "slug": "heather-clark",
    "url": "/contributors/heather-clark/",
    "aliases": [
      "HEATHER CLARK"
    ]
  },
  "seo": {
    "description": "When I received a review copy of Bob Staake’s Look! Another Book! in the mail, our nearly 6-year-old was instantly drawn to it. The larger than average size and bright, illustrated cover compelled us to open the book…",
    "image": "https://vegbooks.org/media/2013/01/38cba1d7775389916e293ddc692b2d7e.jpg"
  },
  "previous": {
    "title": "Tina and the Penguin",
    "url": "/reviews/tina-and-the-penguin/"
  },
  "next": {
    "title": "Uncle Willie and the Soup Kitchen",
    "url": "/reviews/uncle-willie-and-the-soup-kitchen/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2013/01/38cba1d7775389916e293ddc692b2d7e.jpg"}><img src={"/media/2013/01/38cba1d7775389916e293ddc692b2d7e.jpg"} alt={"Look! Another Book!"} width={210} height={274} /></a>
      </figure>
      <p>{"When I received a review copy of Bob Staake’s "}<em>{"Look! Another Book!"}</em>{" in the mail, our nearly 6-year-old was instantly drawn to it. The larger than average size and bright, illustrated cover compelled us to open the book immediately."}</p>
      <p>{"Staake is well known for his picture books – and this one is actually a sequel ("}<a href={"http://www.amazon.com/gp/product/0316204595/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=0316204595&linkCode=as2&tag=vegbooks-20"} target="_blank" rel="noopener noreferrer">{"Amazon affiliate link"}</a>{") – but it was the first I’d seen of his work. The book is laid out in a fascinating format. Before and after each of the detailed illustration pages there are circular cut outs that give a small peek into what’s coming next. They highlight a few items of interest within the larger scene that only becomes visible once you flip the page. There’s a lot to take in on each page, and the die cut format helps to focus attention on particular items of interest."}</p>
      <p>{"Although the illustrations don’t seem to fit together thematically, flow through the book is accomplished through repetition of format. The rhyming text directs the reader to look out for a few items within the scenes, but there’s so much more to look at than what is mentioned!"}</p>
      <p>{"Recurring items pop up throughout and we wondered about their purpose. Sure enough, near the ending the book requests you go back and look for even more items. While it jokes that it won’t take ages, my son and I found a few of them to be particularly challenging to find! We spent quite a lot of time looking back through the illustrations to try and tally up all the requested items and noticed a lot of fun details we’d missed the first time through."}</p>
      <p>{"There are a few notable references to animal use and consumption within the book. For instance, rhymes include the words “beef stew” and “crab fondue.” There is one set of illustrations that depict a zoo scene, and a few additional places in the book where meat is referenced in the illustrations but is not mentioned in the text (e.g. a sign at the shopping center is advertising haggis)."}</p>
      <p>{"This cute read is anything but just “Another Book” and is suitable for preschoolers and above. It’s definitely worth a look for anyone that enjoys the seek and find format."}</p>
    </div>
  );
}
