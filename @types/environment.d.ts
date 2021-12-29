declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: string
    DATABASE_MONGO_URL: string
    DATABASE_MONGO_NAME: string
    COLLECTION_DATASTRING: string
    COLLECTION_LINKURL: string
    APP_NAME: string
    CLOUDINARY_NAME: string
    CLOUDINARY_API_SECRET: string
    CLOUDINARY_API_KEY: string
  }
}