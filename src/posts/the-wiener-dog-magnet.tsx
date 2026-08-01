import type { PostMetadata } from '../content/types';

export const article = {
  "id": "8098",
  "slug": "the-wiener-dog-magnet",
  "url": "/reviews/the-wiener-dog-magnet/",
  "legacyUrl": "https://vegbooks.org/index.php/2012/08/19/the-wiener-dog-magnet/",
  "title": "The Wiener Dog Magnet",
  "publishedAt": "2012-08-19",
  "publishedLabel": "August 19th, 2012",
  "excerpt": "Hayes Roberts’ ironic tone intrigues both children and adults. In The Wiener Dog Magnet, he pokes fun at what can be a parent’s nightmare – when a child wants a pet. In this case, Kiki Marie, the main character, uses…",
  "image": {
    "src": "/media/2012/08/wiener-dog1.jpg",
    "alt": "The Wiener Dog Magnet",
    "width": 210,
    "height": 120
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
      "name": "Dachshunds",
      "slug": "dachshunds",
      "url": "/topics/dachshunds/"
    },
    {
      "name": "Dogs",
      "slug": "dogs",
      "url": "/topics/dogs/"
    },
    {
      "name": "E-Books",
      "slug": "e-books",
      "url": "/topics/e-books/"
    },
    {
      "name": "Female Protagonist",
      "slug": "female-protagonist",
      "url": "/topics/female-protagonist/"
    },
    {
      "name": "Hayes Roberts",
      "slug": "hayes-roberts",
      "url": "/topics/hayes-roberts/"
    },
    {
      "name": "Jane Cowles",
      "slug": "jane-cowles",
      "url": "/topics/jane-cowles/"
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
    "description": "Hayes Roberts’ ironic tone intrigues both children and adults. In The Wiener Dog Magnet, he pokes fun at what can be a parent’s nightmare – when a child wants a pet. In this case, Kiki Marie, the main character, uses…",
    "image": "https://vegbooks.org/media/2012/08/wiener-dog1.jpg"
  },
  "previous": {
    "title": "Over in the Jungle: A Rainforest Rhyme",
    "url": "/reviews/over-in-the-jungle-a-rainforest-rhyme/"
  },
  "next": {
    "title": "Presidential Pets",
    "url": "/reviews/presidential-pets/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2012/08/wiener-dog1.jpg"}><img src={"/media/2012/08/wiener-dog1.jpg"} alt={"The Wiener Dog Magnet"} width={210} height={120} /></a>
      </figure>
      <p>{"Hayes Roberts’ ironic tone intrigues both children and adults. In "}<a href={"http://www.bluebison.net/books/dog_magnet/the-wiener-dog-magnet.pdf"} target="_blank" rel="noopener noreferrer"><em>{"The Wiener Dog Magnet"}</em></a>{", he pokes fun at what can be a parent’s nightmare – when a child wants a pet. In this case, Kiki Marie, the main character, uses her allowance to buy a magnet shaped like an animal. Faced with all the choices she might find in a pet store, she choses a weiner dog. Presumptively, as we are not told, her parents sigh with a sense of relief that for a fraction of the cost and no responsibility their daughter is satisfied with a magnet rather than a real live dog."}</p>
      <p>{"The adjective “wiener” implies that the purchaser of the magnet is a sucker. Buyer beware, this seemingly benign magnet becomes soon becomes a disaster. Like a real wiener dog, its cuteness soon becomes the center of attention. All wiener dogs are magnetically drawn to and stick to this little magnet. Soon the dogs become too heavy for Kiki Marie to carry."}</p>
      <figure class="content-image content-image--left">
        <a href={"/media/2012/08/the-wiener-dog-magnet-book.jpg"}><img src={"/media/2012/08/the-wiener-dog-magnet-book.jpg"} alt={""} width={210} height={140} /></a>
      </figure>
      <p>{"As the story unfolds, you will find yourself bursting with laughter and a sigh of relief when Kiki Marie devises a clever way to solve her problem."}</p>
      <p>{"Hayes Roberts has a way of adding subtle humor to everyday dilemmas. "}<em>{"Mom, can I please please buy that toy?"}</em></p>
    </div>
  );
}
