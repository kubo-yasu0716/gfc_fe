interface Props {
  contents: string;
}

//「特集コンテンツをもっと見る」の白いボタン
export function WhiteButton(props: Props) {
  return (
    <div class="flex justify-center">
      <button class="flex flex-row bg-[#ffffff] border-[#947771] border py-2.5 rounded-[5px]
        w-[18rem] h-12  text-[#947771] text-xs mb-8">
        <p class="m-auto pl-5">{props.contents}</p>
        <img
          src="/icon/brownRightArrow.png"
          alt="茶色の右矢印"
          class="h-3 w-3 my-auto mr-2 text-right"
        />
      </button>
    </div>
  );
}
