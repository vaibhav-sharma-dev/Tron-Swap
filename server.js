import express from "express";
import dotenv from "dotenv";


dotenv.config({
    path: "./.env",
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

import { SwapTrxToToken } from "./SwapTrxToToken.js";
import { SwapTokenToTrx } from "./SwapTokenToTrx.js";

app.get("/api/v1/swapTrxToToken", SwapTrxToToken);
app.get("/api/v1/swapTokenToTrx", SwapTokenToTrx);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`TRON Swap Server is running on port ${port}!`));