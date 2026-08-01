import type { PostMetadata } from '../content/types';

export const article = {
  "id": "9295",
  "slug": "dave-loves-chickens",
  "url": "/reviews/dave-loves-chickens/",
  "legacyUrl": "https://vegbooks.org/index.php/2013/12/08/dave-loves-chickens/",
  "title": "Dave Loves Chickens",
  "publishedAt": "2013-12-08",
  "publishedLabel": "December 8th, 2013",
  "excerpt": "A gold-hearted alien monster has come to visit us, and he seeks to spread the message that chickens are incredible creatures who deserve to be treated better than their human co-Earthlings are treating them. We can…",
  "image": {
    "src": "/media/2013/12/dave.jpg",
    "alt": "Dave",
    "width": 210,
    "height": 148
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
      "name": "Aliens",
      "slug": "aliens",
      "url": "/topics/aliens/"
    },
    {
      "name": "Animals as Food",
      "slug": "animals-as-food",
      "url": "/topics/animals-as-food/"
    },
    {
      "name": "Best Books for Vegetarian Kids",
      "slug": "best-books-for-vegetarian-kids",
      "url": "/topics/best-books-for-vegetarian-kids/"
    },
    {
      "name": "Carlos Patino",
      "slug": "carlos-patino",
      "url": "/topics/carlos-patino/"
    },
    {
      "name": "Chickens",
      "slug": "chickens",
      "url": "/topics/chickens/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Raising Vegan Kids",
      "slug": "raising-vegan-kids",
      "url": "/topics/raising-vegan-kids/"
    },
    {
      "name": "Raising Vegetarian Kids",
      "slug": "raising-vegetarian-kids",
      "url": "/topics/raising-vegetarian-kids/"
    },
    {
      "name": "vegan",
      "slug": "vegan",
      "url": "/topics/vegan/"
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
    "description": "A gold-hearted alien monster has come to visit us, and he seeks to spread the message that chickens are incredible creatures who deserve to be treated better than their human co-Earthlings are treating them. We can…",
    "image": "https://vegbooks.org/media/2013/12/dave.jpg"
  },
  "previous": {
    "title": "Explorer: The Lost Islands",
    "url": "/reviews/explorer-the-lost-islands/"
  },
  "next": {
    "title": "V Is for Vegan",
    "url": "/reviews/v-is-for-vegan/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2013/12/dave.jpg"}><img src={"/media/2013/12/dave.jpg"} alt={"Dave"} width={210} height={148} /></a>
      </figure>
      <p>{"A gold-hearted alien monster has come to visit us, and he seeks to spread the message that chickens are incredible creatures who deserve to be treated better than their human co-Earthlings are treating them. We can get behind that idea!"}</p>
      <p>{"Dave is incredulous that on Earth, chickens are eaten. Although there is a silly, playful tone as he delineates the many reasons that chickens are too neat to eat, the underlying message is very thought-provoking (yet appropriate) for kids. For those not currently eating meat, this little gem will buttress that decision. For kids thinking about a veg lifestyle, the perspective of an alien monster is a great vehicle for reframing the way that children are socially instructed about chickens."}</p>
      <p>{"With bold graphics, bright colors and a positive message about caring for all life on our planet, "}<em>{"Dave Loves Chickens"}</em>{"is a great find. Featuring a lovable alien monster and clever rhymes about chickens, this book will resonate with young veggie and veggie-curious kids and their adults, whether or not they are gold-hearted chicken aficionados (though we think by the end of this story, they will be)."}</p>
      <p><em>{"The publisher, "}<a href={"http://www.veganpublishers.com/"} target="_blank" rel="noopener noreferrer">{"Vegan Publishers"}</a>{" (yes, that’s their name!) provided a copy of this book for review. Order directly through their site "}<a href={"http://www.veganpublishers.com/multimedia-archive/dave-loves-chickens/"} target="_blank" rel="noopener noreferrer">{"here"}</a>{"."}</em></p>
    </div>
  );
}
