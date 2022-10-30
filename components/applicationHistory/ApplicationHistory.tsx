import { Header } from "./Header.tsx";
import { Title } from "./Title.tsx";
import { SearchBox } from "./SearchBox.tsx";
import { AccodionButton, WhiteButton, WhiteButton3 } from "./Button.tsx";
import { Leading } from "./Leading.tsx";
import { Brand } from "./Brand.tsx";
import { SubFooter } from "../common/SubFooter.tsx";

interface Props {
  open: boolean;
  display: boolean;
  onClick: (e: Event) => void;
  onClickButton: (e: Event) => void;
  Accodion?: (e: Event) => void;
}

//todo:mapでbrandを回す
export function ApplicationHistory(props: Props) {
  return (
    <div
      class={`${props.display || props.open ? "fixed w-full" : ""}`}
    >
      <Header onClick={props.onClick} />
      <Title title="申請中ブランド一覧" />
      <SearchBox />
      <div class="flex mx-5 mb-5">
        <WhiteButton3 contents="絞り込む" onClickButton={props.onClickButton} />
        <AccodionButton contents="表示順" Accodion={props.Accodion} />
      </div>
      <Leading title="2022年10月25日" />
      <Brand
        status={0}
        brandName="マクドナルド"
        genre="ファーストフード"
        src="/icon/browsingHistory/mac.png"
      />
      <Brand
        status={1}
        brandName="マクドナルド"
        genre="ファーストフード"
        src="/icon/browsingHistory/mac.png"
      />
      <Brand
        status={2}
        brandName="マクドナルド"
        genre="ファーストフード"
        src="/icon/browsingHistory/mac.png"
      />

      <Leading title="2022年10月23日" />
      <Brand
        status={0}
        brandName="マクドナルド"
        genre="ファーストフード"
        src="/icon/browsingHistory/mac.png"
      />
      <Brand
        status={1}
        brandName="マクドナルド"
        genre="ファーストフード"
        src="/icon/browsingHistory/mac.png"
      />
      <Brand
        status={3}
        brandName="マクドナルド"
        genre="ファーストフード"
        src="/icon/browsingHistory/mac.png"
      />

      <Leading title="2022年10月2日" />
      <Brand
        status={0}
        brandName="マクドナルド"
        genre="ファーストフード"
        src="/icon/browsingHistory/mac.png"
      />
      <Brand
        status={1}
        brandName="マクドナルド"
        genre="ファーストフード"
        src="/icon/browsingHistory/mac.png"
      />
      <Brand
        status={2}
        brandName="マクドナルド"
        genre="ファーストフード"
        src="/icon/browsingHistory/mac.png"
      />

      <WhiteButton contents="申請中のブランドをもっと見る" />
      <SubFooter />
    </div>
  );
}
