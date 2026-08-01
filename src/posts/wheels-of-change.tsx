import type { PostMetadata } from '../content/types';

export const article = {
  "id": "5543",
  "slug": "wheels-of-change",
  "url": "/reviews/wheels-of-change/",
  "legacyUrl": "https://vegbooks.org/index.php/2011/07/06/wheels-of-change/",
  "title": "Wheels of Change",
  "publishedAt": "2011-07-06",
  "publishedLabel": "July 6th, 2011",
  "excerpt": "“I think [bicycling] has done more to emancipate women than anything else in the world. I stand and rejoice every time I see a woman ride by on a wheel…” I absolutely love this quote by Susan B. Anthony, but it…",
  "image": {
    "src": "/media/2011/07/wheels-of-change-cover-final.jpg",
    "alt": "Wheels of Change",
    "width": 210,
    "height": 278
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
      "name": "Bicycles",
      "slug": "bicycles",
      "url": "/topics/bicycles/"
    },
    {
      "name": "Carolyn M. Mullin",
      "slug": "carolyn-m-mullin",
      "url": "/topics/carolyn-m-mullin/"
    },
    {
      "name": "Feminism",
      "slug": "feminism",
      "url": "/topics/feminism/"
    },
    {
      "name": "History",
      "slug": "history",
      "url": "/topics/history/"
    },
    {
      "name": "Marguerite Gast",
      "slug": "marguerite-gast",
      "url": "/topics/marguerite-gast/"
    },
    {
      "name": "Older Elementary",
      "slug": "older-elementary",
      "url": "/topics/older-elementary/"
    },
    {
      "name": "Parents",
      "slug": "parents",
      "url": "/topics/parents/"
    },
    {
      "name": "Sue Macy",
      "slug": "sue-macy",
      "url": "/topics/sue-macy/"
    },
    {
      "name": "Susan B. Anthony",
      "slug": "susan-b-anthony",
      "url": "/topics/susan-b-anthony/"
    },
    {
      "name": "Women's History",
      "slug": "womens-history",
      "url": "/topics/womens-history/"
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
    "description": "“I think [bicycling] has done more to emancipate women than anything else in the world. I stand and rejoice every time I see a woman ride by on a wheel…” I absolutely love this quote by Susan B. Anthony, but it…",
    "image": "https://vegbooks.org/media/2011/07/wheels-of-change-cover-final.jpg"
  },
  "previous": {
    "title": "Wave",
    "url": "/reviews/wave-2/"
  },
  "next": {
    "title": "Toad Food & Measle Soup",
    "url": "/reviews/toad-food-measle-soup/"
  }
} satisfies PostMetadata;

export default function Post() {
  return (
    <div class="article-content">
      <figure class="content-image content-image--right">
        <a href={"/media/2011/07/wheels-of-change-cover-final.jpg"}><img src={"/media/2011/07/wheels-of-change-cover-final.jpg"} alt={"Wheels of Change"} width={210} height={278} /></a>
      </figure>
      <p>{"“I think [bicycling] has done more to emancipate women than anything else in the world. I stand and rejoice every time I see a woman ride by on a wheel…”"}</p>
      <p>{"I absolutely love this quote by Susan B. Anthony, but it wasn’t until I read Sue Macy’s recent publication on women’s liberation and its ties to cycling that I realized how little I knew about its authenticity. Sue Macy did her homework in researching this subject that takes place just before the turn of the century. At the time, women were confined to the home by their domestic duties and restricted in their mobility by corsets and heavily-ruffled attire. Along comes the bike and along comes freedom: freedom to roam, socialize, exercise, adventure, and challenge the status quo (sentiments you might share when you hop on two wheels – I know I do!)."}</p>
      <p>{"With the aid of vintage objects – photographs, sheet music, advertisements, trading cards, etc – Macy is able to tell the multi-faceted story of bikes let loose on the American social scene: in business, advertisement, slang, music, celebrity circles, and more. Women’s fashion drastically changed as bloomers were discovered to be a lot safer and comfortable for bike riding. Many women took up cycling as a sport and competed fiercely. But these developments weren’t without their critics."}</p>
      <p>{"Marguerite Gast, in 1900, “set out to pedal around Long Island for at least 4,500 miles. She had covered 2,600 miles in 12 days, 7 hours, and 55 minutes when the sheriff stopped her…who considered it ‘improper, immoral, and illegal to make such an exhibition on the public highway.’” That instance wasn’t the only source of contention of bicycling women, and it’s the crux of this matter that Macy frames so well in "}<em><a href={"http://kidsblogs.nationalgeographic.com/dogeared/2011/02/wheels-of-change.html"}>{"Wheels of Change"}</a></em>{": women have faced opposition, ridicule, and adversity, but they have also overcome it – "}<a href={"http://www.grist.org/biking/2011-06-20-bicyclings-gender-gap-its-the-economy-stupid"}>{"at least to some degree"}</a>{"."}</p>
      <p>{"I could go on and on about the rare bits of knowledge to be discovered in this text, but National Geographic and Sue Macy do a better job in its telling. An ideal pick for a young adult keen on bikes or feminism, or any adult with the same interests!"}</p>
      <p>{"Ages 12+."}</p>
    </div>
  );
}
