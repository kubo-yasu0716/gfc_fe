interface Props {
  label: string;
  name: string;
  checked?: boolean;
  onClick?: () => void;
}

export function RadioButton(props: Props) {
  return (
    <>
      <label class="flex flex-row mt-4 mr-6 mb-7 ml-[8%] cursor-pointer relative">
        <input
          type="radio"
          name={props.name}
          class="w-[0.875rem] h-[0.875rem] rounded-[0.875rem]
                    border-[#C3C3C3] border-[1px] mr-2"
          required
          checked={props.checked}
          onClick={props.onClick}
        />
        {props.label}
      </label>
    </>
  );
}
