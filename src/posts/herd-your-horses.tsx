import type { PostMetadata } from '../content/types';

export const article = {
  "id": "10281",
  "slug": "herd-your-horses",
  "url": "/reviews/herd-your-horses/",
  "legacyUrl": "https://vegbooks.org/index.php/2016/01/31/herd-your-horses/",
  "title": "Herd Your Horses",
  "publishedAt": "2016-01-31",
  "publishedLabel": "January 31st, 2016",
  "excerpt": "My six-year-old daughter, a lover of horses, asked anybody and everybody for “only horse things” as Christmas gifts this year. She got shirts, books, earrings, temporary tattoos, and this really interesting board…",
  "image": {
    "src": "/media/2016/01/623-herd-your-horses-box-720233006234.jpg",
    "alt": "623_HerdYourHorses_BOX_720233006234",
    "width": 210,
    "height": 197
  },
  "categories": [
    {
      "name": "Board Games",
      "slug": "board-games",
      "url": "/board-games/"
    }
  ],
  "tags": [
    {
      "name": "Early Elementary",
      "slug": "early-elementary",
      "url": "/topics/early-elementary/"
    },
    {
      "name": "Horses",
      "slug": "horses",
      "url": "/topics/horses/"
    },
    {
      "name": "Jennifer Kali",
      "slug": "jennifer-kali",
      "url": "/topics/jennifer-kali/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    }
  ],
  "reviewer": {
    "name": "Jennifer Kali",
    "slug": "jennifer-kali",
    "url": "/contributors/jennifer-kali/",
    "aliases": [
      "Jennifer Kali",
      "JENNIFER KALI"
    ]
  },
  "seo": {
    "description": "My six-year-old daughter, a lover of horses, asked anybody and everybody for “only horse things” as Christmas gifts this year. She got shirts, books, earrings, temporary tattoos, and this really interesting board…",
    "image": "https://vegbooks.org/media/2016/01/623-herd-your-horses-box-720233006234.jpg"
  },
  "previous": {
    "title": "Here Comes Valentine Cat",
    "url": "/reviews/here-comes-valentine-cat/"
  },
  "next": {
    "title": "Over on a Mountain",
    "url": "/reviews/over-on-a-mountain/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <img src={"/media/2016/01/623-herd-your-horses-box-720233006234.jpg"} alt={"623_HerdYourHorses_BOX_720233006234"} width={210} height={197} />
      </figure>
      <p>{"My six-year-old daughter, a lover of horses, asked anybody and everybody for “only horse things” as Christmas gifts this year. She got shirts, books, earrings, temporary tattoos, and this really interesting board game. The premise of the game is that a stallion has escaped from a ranch, taking some mares with him, and is trying to make it on his own in the wild before getting rounded back up by the rancher. You can play as either the rancher trying to or the stallion. Players gather up horses and experience setbacks and gains while making their way around the board, all the while learning facts about horses."}</p>
      <figure class="content-image content-image--left">
        <img src={"/media/2016/01/623-herd-your-horses-otb-720233006234.jpg"} alt={"623_HerdYourHorses_OTB_720233006234"} width={280} height={280} />
      </figure>
      <p>{"Playing this game can spark great conversations, such as why the horses would want to escape, differences between domestic and wild horses, and what it’s like to be a ranch horse. It’s challenging enough for advanced players and basic enough for new players. We played together as a family and really enjoyed it."}</p>
      <p>{"Ages 6-12. 4 players."}</p>
    </div>
  );
}
