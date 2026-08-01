import type { PostMetadata } from '../content/types';

export const article = {
  "id": "5991",
  "slug": "sato-and-the-elephants",
  "url": "/reviews/sato-and-the-elephants/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/09/10/sato-and-the-elephants/",
  "title": "Sato and the Elephants",
  "publishedAt": "2011-09-10",
  "publishedLabel": "September 10th, 2011",
  "excerpt": "Ivory isn’t always an easy subject to broach with children, but author Juanita Havill, in retelling the true story of a Japanese carver, does so beautifully and eloquently. Sato was trained by his father, a master…",
  "image": {
    "src": "/media/2011/09/9780688111557.jpg",
    "alt": "Sato and the Elephants",
    "width": 210,
    "height": 276
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
      "name": "Black Market Trade",
      "slug": "black-market-trade",
      "url": "/topics/black-market-trade/"
    },
    {
      "name": "Carolyn M. Mullin",
      "slug": "carolyn-m-mullin",
      "url": "/topics/carolyn-m-mullin/"
    },
    {
      "name": "Elephants",
      "slug": "elephants",
      "url": "/topics/elephants/"
    },
    {
      "name": "Endangered Species",
      "slug": "endangered-species",
      "url": "/topics/endangered-species/"
    },
    {
      "name": "Illegal Trade of Animal Parts",
      "slug": "illegal-trade-of-animal-parts",
      "url": "/topics/illegal-trade-of-animal-parts/"
    },
    {
      "name": "Ivory Trade",
      "slug": "ivory-trade",
      "url": "/topics/ivory-trade/"
    },
    {
      "name": "Juanita Havill",
      "slug": "juanita-havill",
      "url": "/topics/juanita-havill/"
    },
    {
      "name": "Use of Animals",
      "slug": "use-of-animals",
      "url": "/topics/use-of-animals/"
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
    "description": "Ivory isn’t always an easy subject to broach with children, but author Juanita Havill, in retelling the true story of a Japanese carver, does so beautifully and eloquently. Sato was trained by his father, a master…",
    "image": "https://vegbooks.org/media/2011/09/9780688111557.jpg"
  },
  "previous": {
    "title": "Pigs Make Me Sneeze",
    "url": "/reviews/pigs-make-me-sneeze/"
  },
  "next": {
    "title": "Lucky Pigs",
    "url": "/reviews/lucky-pigs/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/09/9780688111557.jpg"}><img src={"/media/2011/09/9780688111557.jpg"} alt={"Sato and the Elephants"} width={210} height={276} /></a>
      </figure>
      <p>{"Ivory isn’t always an easy subject to broach with children, but author Juanita Havill, in retelling the true story of a Japanese carver, does so beautifully and eloquently."}</p>
      <p>{"Sato was trained by his father, a master ivory carver who died while Sato was still a young boy, and was infatuated with the material and the secrets of how to work with ivory in producing traditional figurines called netsuke. As ivory became scarcer on the market, Sato becomes overly excited by a rare, beautiful piece “the size of his two fists, and creamy as foam on the sea.” He throws all of his energy and time into this piece which promises to be his masterwork, but when he stumbles across a flaw “hope drained from his heart.” The flaw turns out to be a bullet."}</p>
      <p>{"“A cry filled his mind, eerie and strange, like the trumpeting of elephants mourning their dead. Elephants who had died so that Sato might have ivory to carve…Sato set his tools down. He bent his head before the unfinished figure, covered his face with his hands, and wept.”"}</p>
      <p>{"Haville creatively employs a dreamlike sequence in which Sato confronts a herd of elephants, the faces behind his default choice of carving material. When he awakes, Sato pledges to work with a different material, marble."}</p>
      <p><em><a href={"http://www.amazon.com/gp/product/0688111564/ref=as_li_ss_tl?ie=UTF8&tag=vegbooks-20&linkCode=as2&camp=217145&creative=399373&creativeASIN=0688111564"} target="_blank" rel="noopener noreferrer">{"Sato and the Elephants"}</a></em>{" is such a unique approach to the subject of ivory and the black market trade. It not only challenges cultural traditions in light of endangered species issues (something we’re facing here in California with the proposed ban on "}<a href={"http://www.sharksavers.org/en/blogs/778-california-ab-376-shark-fin-ban-mid-august-update-and-action-alert.html"} target="_blank" rel="noopener noreferrer">{"shark fins for Chinese soup"}</a>{"), but shows us that there are viable alternatives to exploitive practices no matter what industry you’re in."}</p>
      <p>{"Ages 4-8."}</p>
    </div>
  );
}
