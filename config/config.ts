import dotenv from "dotenv"

dotenv.config()

const NODE_ENV = process.env.NODE_ENV || "development"

const SERVER = {
  env: NODE_ENV,
  colDataString: process.env.COLLECTION_DATASTRING,
  colLinkUrl: process.env.COLLECTION_LINKURL,
  dataBase: process.env.DATABASE_MONGO_NAME,
  dataBaseUrl: process.env.DATABASE_MONGO_URL,
  appName: process.env.APP_NAME,
  cloudinary_name: process.env.CLOUDINARY_NAME,
  cloudinary_api_secret: process.env.CLOUDINARY_API_SECRET,
  cloudinary_api_key: process.env.CLOUDINARY_API_KEY
}

const config = { server: SERVER }

export default config