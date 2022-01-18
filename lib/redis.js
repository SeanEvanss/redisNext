import { Client, Entity, Schema, Repository } from 'redis-om';

const client = new Client();
const url= process.env.REDIS_URL;

async function connect() {    
    if (!client.isOpen()) {
        await client.open(url);
        console.log("Connected");

    }
}

class Car extends Entity{}
let schema = new Schema(
    Car,
    {
      make: { type: 'string' },
      model: { type: 'string' },
      image: { type: 'string' },
      description: { type: 'string', textSearch: true },
    },
    {
      dataStructure: 'JSON',
    }
);

export async function createCar(data){
    await connect();
    
    const repository = new Repository(schema, client);
    const car= repository.createEntity(data);
    const id= await repository.save(car);
    return id;
}