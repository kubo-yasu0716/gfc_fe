//契約中ブランド一覧画面の要素をまとめたコンポーネント

import { LoginHeader } from "../common/header/Header.tsx";
import { Title } from "../common/screen-title/Title.tsx";
import { SearchBox } from "../common/input/SearchBox.tsx";
import { ResultNumber } from "../common/others/ResultNumber.tsx";
import { BrandList } from "../common/brand/Brand.tsx";
import { PageNation } from "../common/others/PageNation.tsx";
import { WhiteButton } from "../common/button/Button.tsx";
import { Footer } from "../common/footer/Footer.tsx";

interface Props {
  open: boolean;
  onClick: (e: Event) => void;
}

export function UnderContract(props: Props) {
  const contractBrands = [{
    src: "/icon/brandLogo.png",
    name: "ガスト",
    content: "ガストの説明はここガストの説明はここガストの説明はここガストの説明はここガストの説明はここガストの説明はここ",
  }, {
    src: "/icon/brandLogo.png",
    name: "ガスト",
    content: "ガストの説明はここガストの説明はここガストの説明はここ",
  }, {
    src: "/icon/brandLogo.png",
    name: "ガスト",
    content: "ガストの説明はここガストの説明はここ",
  }, {
    src: "/icon/brandLogo.png",
    name: "ガスト",
    content: "ガストの説明はここガストの説明はここガストの説明はここガストの説明はここガストの説明はここガストの説明はここ",
  }, {
    src: "/icon/brandLogo.png",
    name: "ガスト",
    content: "ガストの説明はここガストの説明はここガストの説明はここガストの説明はここガストの説明はここガストの説明はここ",
  }];

  return (
    <div
      class={`${props.open ? "fixed w-full" : ""}`}
    >
      <LoginHeader onClick={props.onClick} />
      <Title title="契約中ブランド一覧" />
      <SearchBox />
      <ResultNumber displayNumStart={6} displayNumEnd={10} totalNum={15} />
      <BrandList brandList={contractBrands} />
      <PageNation />
      <WhiteButton name="もっとブランドを探す" />
      <Footer />
    </div>
  );
}
