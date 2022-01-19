import { searchCars } from "../../lib/redis";

//export async handler
export default async function handler(req, res) {
    const query= req.query.q;
    const cars= await searchCars(query);
    res.status(200).json({cars});
}