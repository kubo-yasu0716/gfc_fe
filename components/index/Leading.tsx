interface Props {
  title: string;
  more?: string;
  mandatory?: boolean;
}

export function Leading(props: Props) {
  return (
    <div class="mx-5 mb-2 mt-8 flex flex-row items-center">
      <h3 class="text-sm font-medium">{props.title}</h3>
      <div class="flex-1" />
      {props.mandatory
        ? (
          <p class="text-[#0085FF] text-[0.625rem]">
            <a href="#">{props.more}</a>
          </p>
        )
        : null}
    </div>
  );
}
