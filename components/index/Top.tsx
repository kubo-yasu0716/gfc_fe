//トップページの要素をまとめたコンポーネント

import { SearchBoxHeader } from "../common/Header.tsx";
import { FourIcons } from "../common/others/FourIcons.tsx";
import MainBanners from "../../components/Banner.tsx";
import { Leading } from "../common/others/Leading.tsx";
import { Genre } from "./Genre.tsx";
import { BrandList, BrandRanking } from "../common/Brand.tsx";
import { WhiteButton } from "../common/Button.tsx";
import { Info } from "./Info.tsx";
import { Inquiry } from "../common/others/Inquiry.tsx";
import { SNSAccount } from "../common/others/SNSAccount.tsx";
import { Footer } from "../common/Footer.tsx";
import { FeatureContents } from "./FeatureContentsBar.tsx"; //todo:このコンポーネントは未着手
import { genre, TopInfo } from "../../shared/sever/top.ts";
import { useEffect, useState } from "preact/hooks";
import { Component } from "preact";

interface Props {
  open: boolean;
  info: TopInfo;
  onClick: (e: Event) => void;
}

function creatPair(genres: genre[], n: number) {
  const pair: genre[][] = [];
  for (let i = 0; i < genres.length; i += n) {
    pair.push(genres.slice(i, i + n));
  }
  return pair;
}

export class Top extends Component<Props, TopInfo> {
  async componentDidMount() {
    const res = await fetch("api/brand-ranking");
    const json = await res.json();

    this.setState({ ...this.state, brandRanking: json });

    // const state: TopInfo = {
    //   mainBanners: this.state.mainBanners,
    //   allGenres: this.state.allGenres,
    //   recentGenres: this.state.recentGenres,
    //   brandRanking: json,
    //   newBrands: this.state.newBrands,
    //   info: this.state.info,
    // };

    // this.setState(state);
  }

  render() {
    const props = this.props;
    const info = props.info;
    const allGenres = creatPair(info.allGenres, 2);
    const recentGenres = creatPair(info.recentGenres, 2);
    return (
      <div class={`${props.open ? "fixed w-full" : ""}`}>
        <SearchBoxHeader onClick={props.onClick} />
        <main>
          <FourIcons />
          <MainBanners banners={info.mainBanners} />

          <Leading title="ジャンルから探す" linkName="ジャンル一覧" more={true} />
          <Genre genres={allGenres} />

          <Leading title="最近チェックしたジャンル" />
          <Genre genres={recentGenres} />

          <Leading title="人気ブランド総合ランキング" linkName="すべて見る" more={true} />
          <BrandRanking brandList={this.state.brandRanking} />

          <Leading title="新着ブランド" linkName="すべて見る" more={true} />
          <BrandList brandList={info.newBrands} />

          <Leading title="特集コンテンツ" />
          <FeatureContents />
          <WhiteButton name="特集コンテンツをもっと見る" arrow="right" klass="mt-4" />

          <Leading title="お知らせ" linkName="新着情報一覧" more={true} />
          <Info info={info.info} />
          <Inquiry />
          <SNSAccount />
        </main>
        <Footer />
      </div>
    );
  }
}

// export function Top(props: Props) {
//   const info = props.info;
//   const allGenres = creatPair(info.allGenres, 2);
//   const recentGenres = creatPair(info.recentGenres, 2);

//   useEffect(() => {
//     // Update the document title using the browser API
//     fetch("api/brand-ranking").then(res => {
//       res.json().then(json => setBrandRanking(json));
//     })
//   });

//   const [brandRanking, setBrandRanking] = useState([]);

//   return (
//     <div class={`${props.open ? "fixed w-full" : ""}`}>
//       <SearchBoxHeader onClick={props.onClick} />
//       <main>
//         <FourIcons />
//         <MainBanners banners={info.mainBanners} />

//         <Leading title="ジャンルから探す" linkName="ジャンル一覧" more={true} />
//         <Genre genres={allGenres} />

//         <Leading title="最近チェックしたジャンル" />
//         <Genre genres={recentGenres} />

//         <Leading title="人気ブランド総合ランキング" linkName="すべて見る" more={true} />
//         <BrandRanking brandList={brandRanking} />

//         <Leading title="新着ブランド" linkName="すべて見る" more={true} />
//         <BrandList brandList={info.newBrands} />

//         <Leading title="特集コンテンツ" />
//         <FeatureContents />
//         <WhiteButton name="特集コンテンツをもっと見る" arrow="right" klass="mt-4" />

//         <Leading title="お知らせ" linkName="新着情報一覧" more={true} />
//         <Info info={info.info} />
//         <Inquiry />
//         <SNSAccount />
//       </main>
//       <Footer />
//     </div>
//   );
// }
