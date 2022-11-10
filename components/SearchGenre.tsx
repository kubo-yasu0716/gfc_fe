//ジャンル検索の要素をまとめたコンポーネント

import { SearchBoxHeader } from "../components/common/Header.tsx";
import { ResultNumber } from "../components/common/others/ResultNumber.tsx";
import { ResultBrand } from "../components/common/Brand.tsx";
import {
  AccodionButton,
  FreeWhiteButton,
} from "../components/common/Button.tsx";
import { PageNation } from "../components/common/others/PageNation.tsx";
import { LongFooter } from "../components/common/Footer.tsx";

interface Props {
  open: boolean;
  display: boolean;
  onClick: (e: Event) => void;
  onClickButton: (e: Event) => void;
  Accodion?: (e: Event) => void;
}

const brandList = [{
  name: "オリジン弁当",
  genre: "和食、洋食、中華",
  price: "500円 〜 2,000円",
}, {
  name: "オリジン弁当",
  genre: "和食、洋食、中華",
  price: "500円 〜 2,000円",
}, {
  name: "オリジン弁当",
  genre: "和食、洋食、中華",
  price: "500円 〜 2,000円",
}, {
  name: "オリジン弁当",
  genre: "和食、洋食、中華",
  price: "500円 〜 2,000円",
}, {
  name: "オリジン弁当",
  genre: "和食、洋食、中華",
  price: "500円 〜 2,000円",
}, {
  name: "オリジン弁当",
  genre: "和食、洋食、中華",
  price: "500円 〜 2,000円",
}, {
  name: "オリジン弁当",
  genre: "和食、洋食、中華",
  price: "500円 〜 2,000円",
}, {
  name: "オリジン弁当",
  genre: "和食、洋食、中華",
  price: "500円 〜 2,000円",
}, {
  name: "オリジン弁当",
  genre: "和食、洋食、中華",
  price: "500円 〜 2,000円",
}, {
  name: "オリジン弁当",
  genre: "和食、洋食、中華",
  price: "500円 〜 2,000円",
}];

const imgs = [
  "/icon/brand-detail/brandPhoto0.png",
  "/icon/brand-detail/brandPhoto1.jpeg",
  "/icon/brand-detail/brandPhoto2.jpeg",
  "/icon/brand-detail/brandPhoto3.jpeg",
  "/icon/brand-detail/brandPhoto4.jpeg",
  "/icon/brand-detail/brandPhoto5.jpeg",
];

const sortOrders = ["おすすめ", "人気順", "新着順", "価格帯（安い）", "価格帯（高い）"];

export function SearchGenre(props: Props) {
  return (
    <div class={`${props.display || props.open ? "fixed w-full" : ""}`}>
      <SearchBoxHeader onClick={props.onClick} />
      <ResultNumber
        displayNumStart={11}
        displayNumEnd={20}
        totalNum={275}
        genre={true}
      />
      <div class="flex mx-5 mb-5">
        {
          /* todo:アコーディオンを押すとHalfWhiteButtonまで下に行く（Half
        WhiteButtonの一番上のdivに高さを設定すると動かない） */
        }
        <FreeWhiteButton
          name="絞り込む"
          onClickButton={props.onClickButton}
          klass="h-[42px] w-1/2 mr-2 text-xs"
        />
        <AccodionButton
          name="表示順"
          list={sortOrders}
          Accodion={props.Accodion}
        />
      </div>
      <ResultBrand brandList={brandList} imgs={imgs} />
      <PageNation displayNumStart={2} displayNumEnd={28} />
      <LongFooter />
    </div>
  );
}
