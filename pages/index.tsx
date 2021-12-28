import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { FormEvent, useState } from "react";
import Input from "../components/Input";
import { hasImageExtension } from "../helpers/HasImageExtension";
import { imgUrlToDataString } from "../helpers/ImgUrlToDataString";
import { validURL } from "../helpers/ValidUrl";

const handleSubmit = (url: string, currency: string) => {
  return async (e: FormEvent) => {
    e.preventDefault();
    //verif URL
    if (validURL(url)) {
      if (hasImageExtension(url)) {
        let dataImg = "no image";
        try {
          dataImg = await imgUrlToDataString(url);
        } catch (error) {
          dataImg = "error";
        }

        console.log(url, currency, "yes EXT", dataImg);
      } else {
        console.log(url, currency, "yes NO EXT");
      }
    } else {
      console.log(url, currency, "no");
    }
    //transform link image in dataString
  };
};
const Home: NextPage = () => {
  const [url, setUrl] = useState("");
  const [currency, setCurrency] = useState("");
  return (
    <div className="container">
      <form onSubmit={handleSubmit(url, currency)}>
        <Input
          name="url"
          label="Image Link"
          type="text"
          placeholder=" "
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          autoComplete="off"
          required
        />
        <Input
          name="currency"
          label="Currency name"
          type="text"
          placeholder=" "
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          autoComplete="off"
          required
        />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default Home;
