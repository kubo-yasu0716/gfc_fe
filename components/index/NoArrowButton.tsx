interface Props {
  contents: string;
}

export function NoArrowButton(props: Props) {
  return (
    <div class="flex justify-center">
      <button class="flex flex-row bg-[#947771] py-2.5 rounded-[5px]
          w-[18rem] h-10  text-[#ffffff] text-xs mb-8">
        <p class="m-auto pl-5">{props.contents}</p>
        <img
          src="/icon/whiteRightArrow.png"
          alt="白い右矢印"
          class="h-3 w-3 my-auto mr-2 text-right"
        />
      </button>
    </div>
  );
}
