import { useState } from "preact/hooks";

//todo:レビュー、会社概要の作成
export function Tab() {
  const [tabNumber, setTabNumber] = useState(0);
  const tabs = ["ブランド説明", "レビュー", "会社概要"];
  const getClass = (i: number) =>
    "list-none w-1/3 text-center " +
    (tabNumber === i
      ? "border-b border-[#FF6B00]"
      : "hover:border-b hover:border-blue-500");
  return (
    <>
      <ul class="border-b mx-5 my-4 flex flex-row text-xs">
        {tabs.map((tab, i) => (
          <li
            class={getClass(i)}
            onClick={() => {
              setTabNumber(i);
            }}
          >
            <label>
              {tab}
            </label>
          </li>
        ))}
      </ul>
    </>
  );
}
