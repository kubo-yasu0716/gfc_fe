//小見出しに使うコンポーネント
//todo:トップページの小見出し右の青文字リンクのリンク先を記入（画面が出来次第）

interface Props {
  title: string;
  more?: boolean;
  link?: string;
  linkName?: string;
  mandatory?: boolean;
  xs?: boolean; //text-xsの適応有無
}

//見出しは基本こっちを使う
//todo:mtを選択できるようにする
export function Leading(props: Props) {
  return (
    <div class="mx-4 mb-2 mt-10 flex items-center">
      <p class="text-sm">{props.title}</p>
      {props.more
        ? (
          <>
            <div class="flex-1" />
            <a href={`${props.link}`}>
              <p class="text-blue text-2.5">{props.linkName}</p>
            </a>
          </>
        )
        : null}
    </div>
  );
}

//新規会員登録系の画面で使用する背景色付きの小見出し
export function BgLeading(props: Props) {
  return (
    <div class="bg-[rgb(149,119,113,0.1)] h-8 flex items-center">
      <p class={`${props.xs ? "text-xs" : ""} ml-5`}>{props.title}</p>
      {props.mandatory ? <p class="ml-3 text-[#FF7171]">必須</p> : null}
    </div>
  );
}

//見出しのある要素の中にさらに見出しをつけたい場合に使う
export function SubLeading(props: Props) {
  return (
    <div class="mt-4 mb-2 ml-8 flex">
      <p>{props.title}</p>
      {props.mandatory ? <p class="ml-3 text-red">必須</p> : null}
    </div>
  );
}
