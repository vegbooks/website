import type { PostMetadata } from '../content/types';

export const article = {
  "id": "8015",
  "slug": "invisible-alligators",
  "url": "/reviews/invisible-alligators/",
  "legacyUrl": "https://vegbooks.org/index.php/2012/08/03/invisible-alligators/",
  "title": "Invisible Alligators",
  "publishedAt": "2012-08-03",
  "publishedLabel": "August 3rd, 2012",
  "excerpt": "I am a lover of books, in particular the feel of the pages, so I was reluctant to peruse the world of e-books. But the title of Hayes Roberts’ e-book Invisible Alligators caught my eye and the first line captured my…",
  "image": {
    "src": "/media/2012/08/alligators.jpg",
    "alt": "Invisible Alligators",
    "width": 210,
    "height": 167
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
      "name": "Alligators",
      "slug": "alligators",
      "url": "/topics/alligators/"
    },
    {
      "name": "E-Books",
      "slug": "e-books",
      "url": "/topics/e-books/"
    },
    {
      "name": "Hayes Roberts",
      "slug": "hayes-roberts",
      "url": "/topics/hayes-roberts/"
    },
    {
      "name": "Illustration",
      "slug": "illustration",
      "url": "/topics/illustration/"
    },
    {
      "name": "Jane Cowles",
      "slug": "jane-cowles",
      "url": "/topics/jane-cowles/"
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
    "name": "Jane Cowles",
    "slug": "jane-cowles",
    "url": "/contributors/jane-cowles/",
    "aliases": [
      "JANE COCO COWLES",
      "JANE COWLES"
    ]
  },
  "seo": {
    "description": "I am a lover of books, in particular the feel of the pages, so I was reluctant to peruse the world of e-books. But the title of Hayes Roberts’ e-book Invisible Alligators caught my eye and the first line captured my…",
    "image": "https://vegbooks.org/media/2012/08/alligators.jpg"
  },
  "previous": {
    "title": "Hippopposites",
    "url": "/reviews/hippopposites/"
  },
  "next": {
    "title": "Bronto & the Pterodactyl Eggs",
    "url": "/reviews/bronto-the-pterodactyl-eggs/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2012/08/alligators.jpg"}><img src={"/media/2012/08/alligators.jpg"} alt={"Invisible Alligators"} width={210} height={167} /></a>
      </figure>
      <p>{"I am a lover of books, in particular the feel of the pages, so I was reluctant to peruse the world of e-books. But the title of Hayes Roberts’ e-book "}<a href={"http://www.magickeys.com/books/invis-allig/index.html#pictop"} target="_blank" rel="noopener noreferrer"><em>{"Invisible Alligators"}</em></a>{" caught my eye and the first line captured my attention. “For the red furies” — a dedication to all those bothersome things that happen. The remote control suddenly vanishes. The last slice of cake is suddenly eaten. You fall asleep in the bathtub and your skin gets pruney. Sari, a young monkey and the main character, seeks an explanation for these disruptions in daily life. Her quest makes the reader question if there is some mysterious otherworldly force that takes the order out of life."}</p>
      <figure class="content-image content-image--left">
        <a href={"/media/2012/08/invisible-alligators.jpg"}><img src={"/media/2012/08/invisible-alligators.jpg"} alt={""} width={210} height={163} /></a>
      </figure>
      <p>{"When Sari climbs the steps of her favorite castle, it is like she crosses a portal into another world, much like Alice falls down a rabbit hole into Wonderland or the children find Narnia in a Wardrobe. "}<em>{"Invisible Alligators"}</em>{" is a child’s way of trying to make sense out of things that cannot be explained in a whimsical way. These things just happen, there is no conspiracy, no plan made an underground clan of invisible alligators. There are just some things in life that we cannot control. Sari must learn that life is not like the solution to an algebra problem, it is unpredictable."}</p>
      <p>{"In life, things will get unruly. Bridges will break. Llamas will run loose. Wild blue goats will pose danger. Part of growing up is realizing that unpleasant things happen. We must deal with these unpleasant things so we can enjoy life. Sari learns this when she sees she can fix the bridge, herd the lamas and tame the wild goats. Then she can go to algebra class and her ordered everyday life resumes."}</p>
      <p>{"The illustrations are vibrant and reminiscent of "}<a href={"/reviews/the-lorax-2/"} target="_blank" rel="noopener noreferrer">{"Dr. Seuss books"}</a>{" and the movie “"}<a href={"/reviews/ice-age-guest-post-by-jennifer-gannett/"}>{"Ice Age"}</a>{".” The animated style of the illustrations lend well for an e-book format. Hayes Roberts’ style gave a die-hard printed book reader something to think about. Roberts adds a modern twist to childhood classics."}</p>
      <p><em>{"This book is also available in "}<a href={"http://www.lulu.com/shop/hayes-roberts/invisible-alligators/paperback/product-4771683.html"} target="_blank" rel="noopener noreferrer">{"softcover"}</a>{"."}</em></p>
    </div>
  );
}
