import Button from "../../shared/ui/button";
import SpeechBubbleMenu from "../../shared/ui/speech-bubble";
import { GradientBar } from "../gradient-bar";
import MenuList from "../menu-list/menu-list";
import "./styles.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <GradientBar width={74} height={21} boxProperties={{
        margin: "36px 0px 51px 32px"
      }} />
      <MenuList />
      <div className="sidebar-footer">
        <SpeechBubbleMenu
          items={["Upload Files", "Upload folder", "New folder", "More"]}
          classNames="mb-20"
        ></SpeechBubbleMenu>
        <Button>Create New</Button>
      </div>
    </div>
  );
};

export default Sidebar;
