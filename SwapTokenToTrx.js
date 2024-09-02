import { TronWeb } from "tronweb";


export const SwapTokenToTrx = async () => {
    try {
        const privateKey = process.env.TRON_PRIVATE_KEY;
        const proApiKey = process.env.TRON_PRO_API_KEY;

        const tron = new TronWeb({
            fullHost: "https://api.trongrid.io",
            headers: { "TRON-PRO-API-KEY": proApiKey },
            privateKey: privateKey,
        });

        let contract = await tron.contract().at('TKzxdSv2FZKQrEqkKVgp5DcwEXBEKMg2Ax');
        await contract
            .swapExactTokensForETH(1000000,1000000,['TXYZopYRdj2D9XRtbG411XZZ3kM5VkAeBf','TYsbWxNnyTgsZaTFaue9hqpxkU3Fkco94a'],'TF5MekHgFz6neU7zTpX4h2tha5miPDUj3z',1662825600);

        console.log("Done");
    } 
    
    catch (error) {
        console.log(error);
    }
}