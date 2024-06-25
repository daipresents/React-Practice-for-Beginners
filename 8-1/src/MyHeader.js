import { Helmet } from 'react-helmet-async';
import { useMatches } from 'react-router-dom';

export default function MyHeader(props) {

  // オブジェクト配列から末尾の要素（at(-1))
  // つまり、ルート階層でパスの末尾にマッチしたルートを取得してhandle属性にアクセス
  // 「？? {}」はNull合体演算子の構文で、handle属性が空の場合に備えて空オブジェクトを用意している
  /**
   * useMatchesで取得できるデータはこんな感じ
      [
        {
            "id": "0",
            "pathname": "/",
            "params": {}
        },
        {
            "id": "0-0",
            "pathname": "/",
            "params": {},
            "handle": {
                "title": "トップ",
                "keywords": "React, Router, JavaScript",
                "description": "React Routerの解説サンプルです"
            }
        }
      ]
   */
  let {
    title = 'React入門',
    keywords = 'React, JavaScript, フレームワーク',
    description = 'React入門のサンプルです。'
  } = useMatches().at(-1).handle ?? {};

  //console.log(useMatches());

  title = title.replace('%s', props.title);
  keywords = keywords.replace('%s', props.keywords);
  description = description.replace('%s', props.description);

  console.log(title);

  // なんか出力されず
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
    </Helmet>
  );
}
