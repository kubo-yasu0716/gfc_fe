import { Head } from "$fresh/runtime.ts";
import { useState } from "preact/hooks";
import { DrawerMenu } from "../components/common/drawerMenu/DrawerMenu.tsx";
import { ApplicationHistory } from "../components/ApplicationHistory.tsx";
import { MypageNarrowDown } from "../components/common/narrow-down/NarrowDown.tsx";

export default function islands() {
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
      {visibleNarrowDown || visibleMenu ? null : (
        <ApplicationHistory
          open={visibleMenu}
          display={visibleNarrowDown}
          onClick={DrawerToggleFunction}
          onClickButton={NarrowToggleFunction}
        />
      )}
      {visibleNarrowDown
        ? (
          <MypageNarrowDown
            open={display}
            onClickButton={NarrowToggleFunction}
          />
        )
        : null}

      {visibleMenu
        ? <DrawerMenu open={open} onClick={DrawerToggleFunction} />
        : null}
    </div>
  );
}
