import React, {useState} from "react";
import Data from "./Data";

export default function Form() {
  // const [link, setLink] = useState("https://i.imgflip.com/26jxvz.jpg");
  const [meme, setmeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/26jxvz.jpg",
  });

  const [allMemesImage, setAllMemesImage] = useState(Data);

  function getMemeImage() {
    const memesArray = allMemesImage.data.memes;
    const random = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[random].url;
    console.log(url)

    setmeme(prevmeme => ({
      ...prevmeme,
      randomImage: url,
    }));
  }

  return (
    <section>
      <div className="form">
        <input type="text" placeholder="Top-text" />
        <input type="text" placeholder="Bottom-text" />
        <button onClick={getMemeImage}>Get a new meme image 📚</button>
      </div>
      <img src={meme.randomImage} alt="img" className="imgmeme" />
    </section>
  );
}
