import type { PostMetadata } from '../content/types';

export const article = {
  "id": "2365",
  "slug": "heroes-of-the-environment",
  "url": "/reviews/heroes-of-the-environment/",
  "legacyUrl": "https://vegbooks.org/index.php/2010/06/26/heroes-of-the-environment/",
  "title": "Heroes of the Environment",
  "publishedAt": "2010-06-26",
  "publishedLabel": "June 26th, 2010",
  "excerpt": "Oil spills. Climate change. Polluted oceans, rivers, lakes, bays and watersheds. Environmental justice concerns. Drought. Famine. Collapse of global fisheries stocks. Factory farming. Sometimes it feels like despite…",
  "image": {
    "src": "/media/2010/07/9780811867795.jpg",
    "alt": "Heroes of the Environment",
    "width": 190,
    "height": 240
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
      "name": "Alex Lin",
      "slug": "alex-lin",
      "url": "/topics/alex-lin/"
    },
    {
      "name": "Eco-Friendly Kids Books",
      "slug": "eco-friendly-kids-books",
      "url": "/topics/eco-friendly-kids-books/"
    },
    {
      "name": "Erica Fernandez",
      "slug": "erica-fernandez",
      "url": "/topics/erica-fernandez/"
    },
    {
      "name": "Harriet Rohmer",
      "slug": "harriet-rohmer",
      "url": "/topics/harriet-rohmer/"
    },
    {
      "name": "Jennifer Gannett",
      "slug": "jennifer-gannett",
      "url": "/topics/jennifer-gannett/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    },
    {
      "name": "Will Allen",
      "slug": "will-allen",
      "url": "/topics/will-allen/"
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
    "description": "Oil spills. Climate change. Polluted oceans, rivers, lakes, bays and watersheds. Environmental justice concerns. Drought. Famine. Collapse of global fisheries stocks. Factory farming. Sometimes it feels like despite…",
    "image": "https://vegbooks.org/media/2010/07/9780811867795.jpg"
  },
  "previous": {
    "title": "The Wonders Inside: Bugs and Spiders",
    "url": "/reviews/the-wonders-inside-bugs-and-spiders/"
  },
  "next": {
    "title": "Marsupial Sue Presents The Runaway Pancake",
    "url": "/reviews/marsupial-sue-presents-the-runaway-pancake/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2010/07/9780811867795.jpg"}><img src={"/media/2010/07/9780811867795.jpg"} alt={"Heroes of the Environment"} width={190} height={240} /></a>
      </figure>
      <p>{"Oil spills. Climate change. Polluted oceans, rivers, lakes, bays and watersheds. Environmental justice concerns. Drought. Famine. Collapse of global fisheries stocks. Factory farming. Sometimes it feels like despite our best efforts and intentions, we’ve devolved into one big environmental catastrophe from which there is no escape. This is especially concerning when we have some youngsters underfoot. This is the world we’re handing over to our kids? Well, no! Or, not if the people profiled in "}<a href={"http://www.chroniclebooks.com/index/main,book-info/store,kids/products_id,8241/"} target="_blank" rel="noopener noreferrer"><em>{"Heroes of the Environment"}</em></a>{" have any say in the matter."}</p>
      <p>{"Harriet Rohmer has authored an inspirational and hopeful book highlighting very positive changes that smart, interesting people are making to solve some of our planet’s most pressing problems. Profiling the likes of urban food advocate "}<a href={"http://www.yesmagazine.org/issues/food-for-everyone/growing-power-in-an-urban-food-desert"} target="_blank" rel="noopener noreferrer">{"Will Allen"}</a>{", teen e-waste expert "}<a href={"http://www.huffingtonpost.com/2010/04/05/alex-lin-16yearold-activi_n_525213.html"} target="_blank" rel="noopener noreferrer">{"Alex Lin"}</a>{", environmental activist "}<a href={"http://www.yesmagazine.org/issues/climate-solutions/people-we-love-erica-fernandez"} target="_blank" rel="noopener noreferrer">{"Erica Fernandez"}</a>{" and many more inspiring folks, this is a stirring and encouraging volume to share with young folks in your life. I appreciate the profiles of citizens who stepped out of the comfort zones of their daily lives to speak out about and, more importantly, take action to solve eco-problems. The people profiled are not presented as rarified scientists, policy wonks or academics but kids and adults who pursued a passion that clicked for them. I also like that the people profiled represent a variety of ages and backgrounds—reminding us that we all need to pull together to accomplish our collective goal of living on a healthier planet."}</p>
      <p>{"This book is an insightful read and explains complex concepts in a clear manner. Importantly, it illustrates how powerful both individuals and communities can be. The well-written profiles coalesce together nicely to make "}<em>{"Heroes of the Environment"}</em>{" an excellent read."}</p>
      <p>{"I recommend this interesting and inspiring book for ages 8 and up."}</p>
    </div>
  );
}
