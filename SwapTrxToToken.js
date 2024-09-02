import { TronWeb } from "tronweb";


export const SwapTrxToToken = async () => {
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
            .swapExactETHForTokens(100000000, ['TYsbWxNnyTgsZaTFaue9hqpxkU3Fkco94a','TXYZopYRdj2D9XRtbG411XZZ3kM5VkAeBf'], 'TF5MekHgFz6neU7zTpX4h2tha5miPDUj3z', 1662825600)
            // .send({
            //     feeLimit: 1000000000, // Set fee limit
            //     callValue: 0, // Set the TRX amount to send
            // });

        console.log("Done");
    } 
    
    catch (error) {
        console.log(error);
    }
}