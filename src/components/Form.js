import React, { useState, useEffect } from 'react'

export default function Form() {
  const [meme, setmeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://i.imgflip.com/26jxvz.jpg',
  })

  const [allMemes, setAllMemes] = useState([])

  useEffect(() => {
    fetch('https://api.imgflip.com/get-memes')
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes))
  }, [])

  function getMemeImage() {
    const random = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[random].url
    setmeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }))
  }
  function handelChange(e) {
    setmeme((prevset) => ({
      ...prevset,
      [e.target.name]: e.target.value,
    }))
  }
  return (
    <section>
      <div className="form">
        <input
          type="text"
          placeholder="Top-text"
          value={meme.topText}
          name="topText"
          onChange={handelChange}
        />
        <input
          type="text"
          placeholder="Bottom-text"
          value={meme.bottomText}
          name="bottomText"
          onChange={handelChange}
        />
        <button onClick={getMemeImage}>Get a new meme image 🖼</button>
      </div>
      <div className="tc">
        <img src={meme.randomImage} alt="img" className="imgmeme" />
        <h2 className="top-text f3">{meme.topText}</h2>
        <h2 className="bottom-text f3">{meme.bottomText}</h2>
      </div>
    </section>
  )
}
