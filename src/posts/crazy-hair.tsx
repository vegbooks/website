import type { PostMetadata } from '../content/types';

export const article = {
  "id": "5197",
  "slug": "crazy-hair",
  "url": "/reviews/crazy-hair/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/05/19/crazy-hair/",
  "title": "Crazy Hair",
  "publishedAt": "2011-05-19",
  "publishedLabel": "May 19th, 2011",
  "excerpt": "This tressed-up, teased and twisted, stylish hair story completely makes the cut for me. Compelling and strange, it sucked me up like Rapunzel’s hair-rope into Neil Gaiman and Dave McKean’s artful scalps. It begins…",
  "image": {
    "src": "/media/2011/05/crazyhair-hc-c.jpg",
    "alt": "Crazy Hair",
    "width": 210,
    "height": 210
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
      "name": "Animals",
      "slug": "animals",
      "url": "/topics/animals/"
    },
    {
      "name": "Bravery",
      "slug": "bravery",
      "url": "/topics/bravery/"
    },
    {
      "name": "Collage",
      "slug": "collage",
      "url": "/topics/collage/"
    },
    {
      "name": "Dave McKean",
      "slug": "dave-mckean",
      "url": "/topics/dave-mckean/"
    },
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Hair",
      "slug": "hair",
      "url": "/topics/hair/"
    },
    {
      "name": "Humor",
      "slug": "humor",
      "url": "/topics/humor/"
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
      "name": "Neil Gaiman",
      "slug": "neil-gaiman",
      "url": "/topics/neil-gaiman/"
    },
    {
      "name": "Preschoolers",
      "slug": "preschoolers",
      "url": "/topics/preschoolers/"
    },
    {
      "name": "Rhyme",
      "slug": "rhyme",
      "url": "/topics/rhyme/"
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
    "description": "This tressed-up, teased and twisted, stylish hair story completely makes the cut for me. Compelling and strange, it sucked me up like Rapunzel’s hair-rope into Neil Gaiman and Dave McKean’s artful scalps. It begins…",
    "image": "https://vegbooks.org/media/2011/05/crazyhair-hc-c.jpg"
  },
  "previous": {
    "title": "Animals that Changed the World",
    "url": "/reviews/animals-that-changed-the-world/"
  },
  "next": {
    "title": "I Am the Dog",
    "url": "/reviews/i-am-the-dog/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/05/crazyhair-hc-c.jpg"}><img src={"/media/2011/05/crazyhair-hc-c.jpg"} alt={"Crazy Hair"} width={210} height={210} /></a>
      </figure>
      <p>{"This tressed-up, teased and twisted, stylish hair story completely makes the cut for me. Compelling and strange, it sucked me up like Rapunzel’s hair-rope into "}<a href={"http://www.neilgaiman.com/"} target="_blank" rel="noopener noreferrer">{"Neil Gaiman"}</a>{" and Dave McKean’s artful scalps. It begins as a brave girl named Bonnie comments about someone’s “crazy hair” and offers to comb it even when warned that it is dangerous. The head of hair belongs to a man who claims he’s grown it since age two and admits that birds and beasts, nest and rest within his crazy hair, and a dozen hunters have gotten lost in there. Of course, Bonnie is undaunted and daringly begins combing through the messy mane and literally gets lost in the locks where she begins taming the inhabitants as well. (AR folks should note no animals were harmed and the hair provides a habitat for all types of wild animals.)"}</p>
      <p>{"McKean’s magnificent graphic photo/painting/collage montages (reminiscent of Pablo Picasso and Georges Braques cubist style) braided with Geiman’s mesmerizing, rhyming, dynamic descriptions weave an irresistible adventure in and on one’s head. It easily teased and entangled me and my daughter as much as it did Bonnie, and you’ll be itching to pick your way through this hairlarious and creative coil. We’ve marched through this mad hair story several times and I’m betting you will too."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
