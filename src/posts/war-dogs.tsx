import type { PostMetadata } from '../content/types';

export const article = {
  "id": "8607",
  "slug": "war-dogs",
  "url": "/reviews/war-dogs/",
  "legacyUrl": "https://vegbooks.org/index.php/2013/02/25/war-dogs/",
  "title": "War Dogs",
  "publishedAt": "2013-02-25",
  "publishedLabel": "February 25th, 2013",
  "excerpt": "As a history buff and an avid animal lover-advocate, I can’t help but do a little dance when these two interests come together in a historical picture book for kids. I’ve reviewed others that have told history from…",
  "image": {
    "src": "/media/2013/02/war-dogs-300.jpg",
    "alt": "War Dogs",
    "width": 210,
    "height": 190
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
      "name": "Biography",
      "slug": "biography",
      "url": "/topics/biography/"
    },
    {
      "name": "Carolyn M. Mullin",
      "slug": "carolyn-m-mullin",
      "url": "/topics/carolyn-m-mullin/"
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
      "name": "History",
      "slug": "history",
      "url": "/topics/history/"
    },
    {
      "name": "Kathryn Selbert",
      "slug": "kathryn-selbert",
      "url": "/topics/kathryn-selbert/"
    },
    {
      "name": "Winston Churchill",
      "slug": "winston-churchill",
      "url": "/topics/winston-churchill/"
    },
    {
      "name": "World War II",
      "slug": "world-war-ii",
      "url": "/topics/world-war-ii/"
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
    "description": "As a history buff and an avid animal lover-advocate, I can’t help but do a little dance when these two interests come together in a historical picture book for kids. I’ve reviewed others that have told history from…",
    "image": "https://vegbooks.org/media/2013/02/war-dogs-300.jpg"
  },
  "previous": {
    "title": "Otter and Odder",
    "url": "/reviews/otter-and-odder/"
  },
  "next": {
    "title": "I Love Vegetarian Food",
    "url": "/reviews/i-love-vegetarian-food/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2013/02/war-dogs-300.jpg"}><img src={"/media/2013/02/war-dogs-300.jpg"} alt={"War Dogs"} width={210} height={190} /></a>
      </figure>
      <p>{"As a history buff and an avid animal lover-advocate, I can’t help but do a little dance when these two interests come together in a historical picture book for kids. I’ve reviewed others that have told history from an animal companion’s perspective or with animals at least heavily featured, including "}<a href={"/reviews/emily-and-carlo/"}>{"Emily Dickinson and her dog Carlo"}</a>{" and "}<a href={"/reviews/dog-of-discovery-a-newfoundlands-adventures-with-lewis-and-clark/"}>{"Lewis & Clark and their canine friend Seaman"}</a>{"."}</p>
      <p>{"Author and artist "}<a href={"http://www.kathrynselbert.com/"} target="_blank" rel="noopener noreferrer">{"Kathryn Selbert"}</a>{" paints a more intimate picture of World War II in "}<em><a href={"http://www.charlesbridge.com/productdetails.cfm?PC=5704"} target="_blank" rel="noopener noreferrer">{"War Dogs"}</a></em>{", an introductory biographical look at Winston Churchill through the eyes of his first miniature poodle, Rufus. While sorely lacking in the text is the reason for the war, Selbert conveys the strong bond the prime minister had with Rufus while also showing his trying role in the war: dealing with the bombings in London, launching D-Day, and paving the road to recovery. Rufus not only softens the harsh realities of the war, but humanizes Winston, I think, through this difficult time. Graphically, this is an engaging book with Selbert’s beautiful and sometimes stark illustrations in acrylic and collage. Interspersed throughout the book are pinned memos with type-written text, reliving the prime minister’s words:"}</p>
      <blockquote>
        <p>{"We three must remain friends in order to ensure happy homes in all countries."}</p>
        <p>{"– November 1943"}</p>
      </blockquote>
      <p>{"Although Selbert did not dive into the reasons for the war and some of the more intricate, yet important details, she does provide an informative timeline for older audiences, a small essay on Churchill and his affinity for animals, including cats and chickens, and another essay on Winston himself. "}<em>{"War Dogs"}</em>{" is a great addition to this growing body of kid lit."}</p>
      <p>{"Ages 7 – 10."}</p>
      <p><em>{"A review copy was provided by the publisher, which also offers a "}<a href={"http://www.charlesbridge.com/client/client_pdfs/downloadables/WarDogs_DiscussionGuide.pdf"} target="_blank" rel="noopener noreferrer">{"free discussion guide"}</a>{" to the book."}</em></p>
    </div>
  );
}
