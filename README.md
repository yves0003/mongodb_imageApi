# Create your own Image API

This repository is a good starting point to create an Image collection where
everyone can contribute and access it through an API.

the tools i use to create this repository are:

- Next.js for the front end
- Cloudinary to save the file (even if you can save file string directly in
  mongoDB)
- MongoDb to save all the links and create an API

If you want you can disabled the cloudinary part and save the image string
directly (your choice!!!).

For this example, i choosed to create an API for cryptocurrency logo. But you
can imagine something like this for:

- holidays where you replace in the code the input text by an input file
- Seminar

## Where to start

### 1. Clone the repository

\
 Go to my github account and clone.

    gh repo clone yves0003/mongodb_imageApi

### 2. Modify .env.local.example

\
 Next.js use .env.local, replace .env.local.example by .env.local and add your
credentials

    COLLECTION_DATASTRING=XXXXX
    COLLECTION_LINKURL=XXXXXX
    DATABASE_MONGO_URL=mongodb+srv://xxxxx
    DATABASE_MONGO_NAME=database_name

\
 if you decide to use cloudinary (**_if not : Do not forget to modify the
code_**)

    CLOUDINARY_NAME=XXXXXX
    CLOUDINARY_API_SECRET=XXXXXX
    CLOUDINARY_API_KEY=XXXXXX

### 3. Install all dependencies

\
Execute the command in the directoty

    yarn

### 4. Launch the app 🎉🎊

\
Command:

    yarn dev

\
**Enjoy!!!**

## Next

If you don't want the Api, just delete the section.

You can contact me on my [twitter account](https://twitter.com/yveslez) for any
question

\
🔥🔥 Idea: If you are a big fan of cryptocurrency, you can save these files using
the [Permaweb - Arweave project](https://www.arweave.org/) with ArDrive :) and let
the data available forever. 🔥🔥

\
Aurevoir, Goodbye :)
