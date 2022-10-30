import { Head } from "$fresh/runtime.ts";
import { DrawerMenu } from "../components/index/DrawerMenu.tsx";
import { useState } from "preact/hooks";
import { Freeword } from "../components/freeword/Freeword.tsx";
import { NarrowDown } from "../components/freeword/NarrowDown/NarrowDown.tsx";

export default function searchGenre() {
  const [open, setOpen] = useState(false);
  const [visibleMenu, setVisibleMenu] = useState(false);
  const [display, setDisplay] = useState(false);
  const [visibleNarrowDown, setVisibleNarrowDown] = useState(false);
  const sec = 200;

  const DrawerToggleFunction = () => {
    if (open) {
      setOpen(false);
      setTimeout(() => {
        setVisibleMenu(false);
      }, sec);
    } else {
      setOpen(true);
      setVisibleMenu(true);
    }
  };

  const NarrowToggleFunction = () => {
    if (display) {
      setDisplay(false);
      setTimeout(() => {
        setVisibleNarrowDown(false);
      }, sec);
    } else {
      setDisplay(true);
      setVisibleNarrowDown(true);
    }
  };

  return (
    <div>
      <Head>
        <link href="/style.css" rel="stylesheet" />
      </Head>
      {visibleNarrowDown || visibleMenu ? null : (
        <Freeword
          open={visibleMenu}
          display={visibleNarrowDown}
          onClick={DrawerToggleFunction}
          onClickButton={NarrowToggleFunction}
        />
      )}

      {visibleNarrowDown
        ? <NarrowDown open={display} onClickButton={NarrowToggleFunction} />
        : null}

      {visibleMenu
        ? <DrawerMenu open={open} onClick={DrawerToggleFunction} />
        : null}
    </div>
  );
}
