import type { PostMetadata } from '../content/types';

export const article = {
  "id": "5714",
  "slug": "eat-your-peas",
  "url": "/reviews/eat-your-peas/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/08/09/eat-your-peas/",
  "title": "Eat Your Peas",
  "publishedAt": "2011-08-09",
  "publishedLabel": "August 9th, 2011",
  "excerpt": "What caregiver is a stranger to the push-pull that can arise around young kids and eating? Although the dynamic plays out differently in each relationship, more than a few of us are guilty of trying to cajole…",
  "image": {
    "src": "/media/2011/07/toddler-baby-reading.jpg",
    "alt": "Eat Your Peas",
    "width": 210,
    "height": 300
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
      "name": "Female Protagonist",
      "slug": "female-protagonist",
      "url": "/topics/female-protagonist/"
    },
    {
      "name": "Healthy Eating",
      "slug": "healthy-eating",
      "url": "/topics/healthy-eating/"
    },
    {
      "name": "Humor",
      "slug": "humor",
      "url": "/topics/humor/"
    },
    {
      "name": "Jennifer Gannett",
      "slug": "jennifer-gannett",
      "url": "/topics/jennifer-gannett/"
    },
    {
      "name": "Kes Gray",
      "slug": "kes-gray",
      "url": "/topics/kes-gray/"
    },
    {
      "name": "Mothers",
      "slug": "mothers",
      "url": "/topics/mothers/"
    },
    {
      "name": "Nick Sharratt",
      "slug": "nick-sharratt",
      "url": "/topics/nick-sharratt/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Vegetables",
      "slug": "vegetables",
      "url": "/topics/vegetables/"
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
    "description": "What caregiver is a stranger to the push-pull that can arise around young kids and eating? Although the dynamic plays out differently in each relationship, more than a few of us are guilty of trying to cajole…",
    "image": "https://vegbooks.org/media/2011/07/toddler-baby-reading.jpg"
  },
  "previous": {
    "title": "Whooo Loves You?",
    "url": "/reviews/whooo-loves-you/"
  },
  "next": {
    "title": "Come and Eat!",
    "url": "/reviews/come-and-eat/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/07/toddler-baby-reading.jpg"}><img src={"/media/2011/07/toddler-baby-reading.jpg"} alt={"Eat Your Peas"} width={210} height={300} /></a>
      </figure>
      <p>{"What caregiver is a stranger to the push-pull that can arise around young kids and eating? Although the dynamic plays out differently in each relationship, more than a few of us are guilty of trying to cajole children to eat their veggies. The mom in "}<a href={"http://www.amazon.com/gp/product/0789426676/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=217145&creative=399373&creativeASIN=0789426676"} target="_blank" rel="noopener noreferrer"><em>{"Eat Your Peas"}</em></a>{" not only cajoles but downright bribes her daughter by offering her the moon (literally!) if she’ll eat her peas. There is a lot of silliness in the offers — from the absurd number of desserts to the entire continent of Africa to chocolate factories and much much more, Daisy’s mom takes the concept of motivation to a new level of daffiness. Eventually, Daisy points out a bit of hypocrisy inherent in her Mom’s direction to eat her peas since Mom herself is not eating her brussels sprouts!"}</p>
      <p>{"Animal activists will note that some of the enticements offered by Mom include wild animals and a zoo — a chance to talk about this if it feels right to your preschooler."}</p>
      <p>{"Ages 3 and up."}</p>
    </div>
  );
}
