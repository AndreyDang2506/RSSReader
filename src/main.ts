import Parser from 'rss-parser';

type CustomFeed = {foo: string};
type CustomItem = {bar: number};

const parser: Parser<CustomFeed, CustomItem> = new Parser();

(async () => {

  const feed = await parser.parseURL('https://vnexpress.net/rss/suc-khoe.rss');
  console.log(feed); // feed will have a `foo` property, type as a string
//   console.log(feed.title); // feed will have a `foo` property, type as a string

  feed.items.forEach(item => {
    console.log(item.title + ':' + item.link) // item will have a `bar` property type as a number
  });
})();