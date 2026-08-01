import type { PostMetadata } from '../content/types';

export const article = {
  "id": "11006",
  "slug": "poopendous",
  "url": "/reviews/poopendous/",
  "legacyUrl": "https://vegbooks.org/index.php/2020/09/27/poopendous/",
  "title": "Poopendous!",
  "publishedAt": "2020-09-27",
  "publishedLabel": "September 27th, 2020",
  "excerpt": "As preschoolers, my kids have been told “No Bathroom Talk.” And at home we also tried to curb their use of poopie, doo-doo, and peep (I don’t know why they say it with a P at the end) talk, especially during…",
  "image": {
    "src": "/media/2020/09/51-i-us-lr-qy-cl.jpg",
    "alt": "Poopendous!",
    "width": 460,
    "height": 352
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
      "name": "Artie Bennett",
      "slug": "artie-bennett",
      "url": "/topics/artie-bennett/"
    },
    {
      "name": "educational",
      "slug": "educational",
      "url": "/topics/educational/"
    },
    {
      "name": "Guano",
      "slug": "guano",
      "url": "/topics/guano/"
    },
    {
      "name": "Mike Moran",
      "slug": "mike-moran",
      "url": "/topics/mike-moran/"
    },
    {
      "name": "Picture Book",
      "slug": "picture-book",
      "url": "/topics/picture-book/"
    },
    {
      "name": "poop",
      "slug": "poop",
      "url": "/topics/poop/"
    },
    {
      "name": "Poopendous!",
      "slug": "poopendous",
      "url": "/topics/poopendous/"
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
    "description": "As preschoolers, my kids have been told “No Bathroom Talk.” And at home we also tried to curb their use of poopie, doo-doo, and peep (I don’t know why they say it with a P at the end) talk, especially during…",
    "image": "https://vegbooks.org/media/2020/09/51-i-us-lr-qy-cl.jpg"
  },
  "previous": {
    "title": "Hello, My Name is Ruby",
    "url": "/reviews/hello-my-name-is-ruby/"
  },
  "next": {
    "title": "All Because You Matter",
    "url": "/reviews/all-because-you-matter/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--center">
        <a href={"/media/2020/09/51-i-us-lr-qy-cl.jpg"}><img src={"/media/2020/09/51-i-us-lr-qy-cl.jpg"} alt={"Poopendous!"} width={460} height={352} /></a>
      </figure>
      <p>{"As preschoolers, my kids have been told “No Bathroom Talk.” And at home we also tried to curb their use of poopie, doo-doo, and peep (I don’t know why they say it with a "}<em>{"P"}</em>{" at the end) talk, especially during mealtimes. Now, with middle schoolers, we’ve just about given up the struggle. But with a book like "}<strong><a href={"https://www.indiebound.org/book/9781609051907"} target="_blank" rel="noopener noreferrer">{"POOPENDOUS!"}</a></strong>{" by author "}<a href={"http://artiebennett.com/books.html"}>{"Artie Bennett"}</a>{" you don’t have to worry about scatology at the table because it’s a delight."}</p>
      <p>{"Poopendous! is a silly, fun, and very educational collection of information about poop from around the Earth’s animal kingdom. Not only do children learn that monkey dung is sometimes flung (“Monkeys fling with under stress. It helps the monkey decompress.”), a favorite line educated me: “Guano is an Incan word for poop of bat or ocean bird.” "}<a href={"http://en.wikipedia.org/wiki/Guano"}>{"I didn’t know it was Incan"}</a>{"; I thought it was a Spanish word! Poop from so many animals is described and detailed; Hippo Piles and Wombat Cubes are just the beginning. The book also talks about useful roles of poop. Homes are built of it, it is used for fuel in cooking fires, and cow pies are thrown in contests."}</p>
      <p>{"All in all, the book is very cute, and the colorful illustrations by "}<a href={"http://mikemoranillustration.blogspot.com/"}>{"Mike Moran"}</a>{" add to the words in clever and entertaining, and not at all gross, ways. Young children will ask for "}<strong><a href={"https://www.indiebound.org/book/9781609051907"} target="_blank" rel="noopener noreferrer">{"Poopendous!"}</a></strong>{"as a read-aloud again and again, and I can attest that older children will reach for it on the bookshelf into their teens. Highly recommended!"}</p>
    </div>
  );
}
