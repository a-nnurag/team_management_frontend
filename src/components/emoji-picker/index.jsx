// EmojiPickerComponent.jsx
import React from "react";
import { Picker } from "emoji-mart";
// import "emoji-mart/css/emoji-mart.css";
// import data from "emoji-mart/data/apple"; // Fixed import path
// import { customEmojis } from "./custom-emojis";

const EmojiPickerComponent = ({ onSelectEmoji }) => {
  // Handle emoji selection
  // const handleEmojiSelect = (emoji) => {
  //   console.log(emoji, "emoji");
  //   onSelectEmoji(emoji.native); // Pass the selected emoji to parent component
  // };

  return (
    <div className="relative w-full !max-w-8">
      {/* <Picker
        data={data}
        custom={customEmojis}
        include={[
          "activity",
          "objects",
          "people",
          "places",
        ]}
        onSelect={handleEmojiSelect}
        emojiSize={20}
        showPreview={false}
        showSkinTones={false}
        theme="light"
        set="apple"
        title="Pick an emoji"
        className="h-[40px]"
      /> */}
      Emoji
    </div>
  );
};

export default EmojiPickerComponent;
