import type { PostMetadata } from '../content/types';

export const article = {
  "id": "2263",
  "slug": "elephants-swim",
  "url": "/reviews/elephants-swim/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/06/22/elephants-swim/",
  "title": "Elephants Swim",
  "publishedAt": "2010-06-22",
  "publishedLabel": "June 22nd, 2010",
  "excerpt": "Elephants Swim by Linda Capus Riley and Steve Jenkins is a perfect theme for the summer heat. Lovely animals created from paper collage span most of the pages as single rhyming sentences describe each animal’s…",
  "image": {
    "src": "/media/2010/08/0395934893-lres.jpg",
    "alt": "Elephants Swim",
    "width": 219,
    "height": 188
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
      "name": "Armadillos",
      "slug": "armadillos",
      "url": "/topics/armadillos/"
    },
    {
      "name": "Cats",
      "slug": "cats",
      "url": "/topics/cats/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Elephants",
      "slug": "elephants",
      "url": "/topics/elephants/"
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
      "name": "Linda Capus Riley",
      "slug": "linda-capus-riley",
      "url": "/topics/linda-capus-riley/"
    },
    {
      "name": "Marine Animals",
      "slug": "marine-animals",
      "url": "/topics/marine-animals/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Steve Jenkins",
      "slug": "steve-jenkins",
      "url": "/topics/steve-jenkins/"
    },
    {
      "name": "Summer",
      "slug": "summer",
      "url": "/topics/summer/"
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
    "description": "Elephants Swim by Linda Capus Riley and Steve Jenkins is a perfect theme for the summer heat. Lovely animals created from paper collage span most of the pages as single rhyming sentences describe each animal’s…",
    "image": "https://vegbooks.org/media/2010/08/0395934893-lres.jpg"
  },
  "previous": {
    "title": "A Chimpanzee Tale",
    "url": "/reviews/a-chimpanzee-tale/"
  },
  "next": {
    "title": "And Tango Makes Three",
    "url": "/reviews/and-tango-makes-three/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/08/0395934893-lres.jpg"}><img src={"/media/2010/08/0395934893-lres.jpg"} alt={"Elephants Swim"} width={219} height={188} /></a>
      </figure>
      <p><a href={"http://books.google.com/books?id=VhOo9HDkPwUC&printsec=frontcover&dq=Linda+Capus+Riley&source=bl&ots=tftSQItLO_&sig=Yo6s8J8YywdDMNmQnUTB9t2FahI&hl=en&ei=6AMdTPGJGcGclgeGrMCuDQ&sa=X&oi=book_result&ct=result&resnum=8&ved=0CDgQ6AEwBw#v=onepage&q&f=false"} target="_blank" rel="noopener noreferrer"><em>{"Elephants Swim"}</em></a>{" by Linda Capus Riley and Steve Jenkins is a perfect theme for the summer heat. Lovely animals created from paper collage span most of the pages as single rhyming sentences describe each animal’s distinctive swimming style. A great way for kids to explore biology and adults may even learn something new about different animals. Elephants to armadillos, wild cats to sea creatures, the last image asks about human swimmers to help a child reflect on his or her own abilities in the water. The final pages list all the animals and share more detail about each animal’s water habits."}</p>
      <p>{"Ms. Riley does a great job touching on the variety of animals without giving too many details for a child to handle. The rhyme will help the reader remember the information easier. "}<a href={"http://www.stevejenkinsbooks.com/"} target="_blank" rel="noopener noreferrer">{"Mr. Jenkins"}</a>{"fills two pages with a large collage of each animal, keeping the imagery as clean, simple, and lovely as the sentences. A great book for learning about animals as well as for summer!"}</p>
      <p>{"Ages 3-6."}</p>
    </div>
  );
}
