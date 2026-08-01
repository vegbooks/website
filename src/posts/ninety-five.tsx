import type { PostMetadata } from '../content/types';

export const article = {
  "id": "2405",
  "slug": "ninety-five",
  "url": "/reviews/ninety-five/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/09/25/ninety-five/",
  "title": "Ninety-Five",
  "publishedAt": "2010-09-25",
  "publishedLabel": "September 25th, 2010",
  "excerpt": "Anyone who has ever visited a farm animal sanctuary is touched by the stories and personalities of the animals. The next best thing to visiting a farm sanctuary, is reading Ninety-Five: Meeting America’s Farmed…",
  "image": {
    "src": "/media/2010/10/ninety-five-front-cover.jpg",
    "alt": "Ninety-Five",
    "width": 210,
    "height": 168
  },
  "categories": [
    {
      "name": "Books",
      "slug": "books",
      "url": "/books/"
    }
  ],
  "tags": [],
  "reviewer": {
    "name": "Huyen MacMichael",
    "slug": "huyen-macmichael",
    "url": "/contributors/huyen-macmichael/",
    "aliases": [
      "HUYEN MACMICHAEL"
    ]
  },
  "seo": {
    "description": "Anyone who has ever visited a farm animal sanctuary is touched by the stories and personalities of the animals. The next best thing to visiting a farm sanctuary, is reading Ninety-Five: Meeting America’s Farmed…",
    "image": "https://vegbooks.org/media/2010/10/ninety-five-front-cover.jpg"
  },
  "previous": {
    "title": "Alejandro’s Gift",
    "url": "/reviews/alejandros-gift/"
  },
  "next": {
    "title": "Hurt Go Happy",
    "url": "/reviews/hurt-go-happy/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/10/ninety-five-front-cover.jpg"}><img src={"/media/2010/10/ninety-five-front-cover.jpg"} alt={"Ninety-Five"} width={210} height={168} /></a>
      </figure>
      <p>{"Anyone who has ever visited a farm animal sanctuary is touched by the stories and personalities of the animals. The next best thing to visiting a farm sanctuary, is reading"}</p>
      <p>{"Ninety-Five: Meeting America’s Farmed Animals in Stories and Photographs"}</p>
      <p>{", a fabulously tender collection of farm animal biographies with gorgeous accompanying photo portraits."}</p>
      <p>{"The book opens with Gilly, an energetic chicken saved out of 160,000 chickens slated for slaughter, and whose personality and antics made the editors wish everyone could get to witness a truly happy chicken and discover her personality. Which inspired them create a book introducing farm animals from various sanctuaries and rescue homes as individuals with unique and wonderful personalities instead of just a faceless statistic. The title"}</p>
      <p>{"Ninety-Five"}</p>
      <p>{"is not the number of biographies but “the average number of animals spared annually by one person’s"}</p>
      <p>{"vegan"}</p>
      <p>{"diet.”"}</p>
      <p><em>{"Ninety-Five"}</em>{"is an introduction to some of those animals and stories and pictures that will make you laugh and cry. Eighteen essays are included by a variety of caretakers honoring and describing the individual chickens, pigs, cows, turkeys, goats, sheep, ducks, geese, and rabbits. Once I started reading, I found it hard to put down because the animals have such a spirit of survival and the stories are so uplifting and inspiring that they capture the essence of why so many choose to go vegan and stay vegan."}</p>
      <p>{"Also included are an editorial style essay on a day at an animal sanctuary, a brief section addressing farmed fish and “seafood,” a sanctuary information page, as well as a very intimate forward and afterward. A unique photo index gives additional information about the subject of the portraits as well as how farming industry practices negatively affect the health of animals of the species. "}<em>{"Ninety-Five"}</em>{" is edited by "}<a href={"http://www.novoiceunheard.org/nf.html"} target="_blank" rel="noopener noreferrer">{"No Voice Unheard"}</a>{" (Marilee Geyer, Diane Leigh, and Windi Wojdak) and includes contributions by 18 animal advocate contributors (sanctuary directors and volunteers, photographers/photojournalists, veterinarians, writers, and educators) with brief bios and the participation of six animal sanctuaries whose descriptions and contact information are listed. On the final pages, several resources and descriptions provide more information on diet, farming practices, and support organizations."}</p>
      <p>{"My preschooler enjoyed the full color, close-up photos of the animals and listened to readings of some of their stories, but parents should note that this is not intended to be a children’s book. It is geared more towards an adult, although mature adolescents may appreciate it and school age children could learn a lot about farm animals from it. The numerous farm animal portraits are all benign and attractive to children and the stories are mostly about the animal personalities which may run too long for short-attention-span younger children. However, parents should preview the contents of each story because although mostly positive-focused, the histories of the animals include brief but honest descriptions about the horrifying conditions the animals were found in and how the rescuers, volunteers, foster parents witnessed the spark that helped the animals survive and recover from their previous cruel treatment. Facts and statistics about current farming practices and how they affect the animal’s welfare are down-played yet seamlessly included in the telling of each story. In some stories, the animal’s passing is described because many farming practices cause animals to gain a lot of weight fast, drastically endangering their health and abbreviating their lives for the sake of meat production."}</p>
      <p>{"Even excluding a paragraph or two from the reading for children, this book is positive reinforcement and incentive for animal rights advocates, vegetarians, and vegans of all ages to stay active however they can, whether it’s in daily eating habits, volunteering, fostering, donating or some other avenue."}</p>
    </div>
  );
}
