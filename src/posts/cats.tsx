import type { PostMetadata } from '../content/types';

export const article = {
  "id": "768",
  "slug": "cats",
  "url": "/reviews/cats/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/02/21/cats/",
  "title": "It’s Raining Cats and Cats",
  "publishedAt": "2010-02-21",
  "publishedLabel": "February 21st, 2010",
  "excerpt": "It’s Raining Cats and Cats illustrates– literally– how many kitties an unspayed cat can be responsible for! Jim and his mom bring their cat Molly home after she’s been spayed. Concerned when he notices her shaved…",
  "image": {
    "src": "/media/2010/02/s-raining-catscover.jpg",
    "alt": "It’s Raining Cats and Cats",
    "width": 218,
    "height": 250
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
      "name": "Animal Welfare Books for Kids",
      "slug": "animal-welfare-books-for-kids",
      "url": "/topics/animal-welfare-books-for-kids/"
    },
    {
      "name": "Cat Overpopulation",
      "slug": "cat-overpopulation",
      "url": "/topics/cat-overpopulation/"
    },
    {
      "name": "Cats",
      "slug": "cats",
      "url": "/topics/cats/"
    },
    {
      "name": "Good for Toddlers",
      "slug": "good-for-toddlers",
      "url": "/topics/good-for-toddlers/"
    },
    {
      "name": "Jennifer Gannett",
      "slug": "jennifer-gannett",
      "url": "/topics/jennifer-gannett/"
    },
    {
      "name": "KIND Children's Honor Books",
      "slug": "kind-childrens-honor-books",
      "url": "/topics/kind-childrens-honor-books/"
    },
    {
      "name": "Pet Overpopulation",
      "slug": "pet-overpopulation",
      "url": "/topics/pet-overpopulation/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Spay",
      "slug": "spay",
      "url": "/topics/spay/"
    }
  ],
  "reviewer": {
    "name": "Jennifer Gannett",
    "slug": "jennifer-gannett",
    "url": "/contributors/jennifer-gannett/",
    "aliases": [
      "JENNIFER G",
      "JENNIFER GANNETT"
    ]
  },
  "seo": {
    "description": "It’s Raining Cats and Cats illustrates– literally– how many kitties an unspayed cat can be responsible for! Jim and his mom bring their cat Molly home after she’s been spayed. Concerned when he notices her shaved…",
    "image": "https://vegbooks.org/media/2010/02/s-raining-catscover.jpg"
  },
  "previous": {
    "title": "A Turkey for Thanksgiving",
    "url": "/reviews/a-turkey-for-thanksgiving/"
  },
  "next": {
    "title": "Finding Nemo (2003)",
    "url": "/reviews/finding-nemo/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/02/s-raining-catscover.jpg"}><img src={"/media/2010/02/s-raining-catscover.jpg"} alt={"It’s Raining Cats and Cats"} width={218} height={250} /></a>
      </figure>
      <p><em><a href={"http://www.thegryphonpress.com/bk_raincat.html"} target="_blank" rel="noopener noreferrer">{"It’s Raining Cats and Cats"}</a></em>{" illustrates– literally– how many kitties an unspayed cat can be responsible for!"}</p>
      <p>{"Jim and his mom bring their cat Molly home after she’s been spayed. Concerned when he notices her shaved belly, stitches and post-anesthesia wooziness, Jim questions his mother about why Molly had the operation. Jim’s mom invites him to imagine what might happen if Molly had kittens and her kittens had kittens…."}</p>
      <p>{"The author stops after a few generations but the marvelous illustrations more than make the point as Jim and Mom are quickly overrun with cats! Jim’s mom also uses the imaginary journey to help Jim realize why there aren’t enough homes for cats. There is much to like about this well-done book and it’s currently a favorite in our storytime rotation."}</p>
      <p>{"I recommend this fun, brightly illustrated story about a serious subject for ages 3 and up."}</p>
    </div>
  );
}
