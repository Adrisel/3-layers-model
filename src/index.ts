import express from 'express';
import { RoomsController } from './Api/controllers/RoomsController';
import { RoomsService } from './Core/services/RoomsService'
import { RoomsStorage } from './Dao/RoomsStorage'
const app = express();

class Server{
    init():void{
        app.use(express.json());
        app.listen('3000', () =>{
            console.log('listening on port 3000');
        });

        app.get('/', (req, res) => {
             res.send('HERE IS THE HELL');
        });

        //adding the route
        let roomService= new RoomsService(new RoomsStorage())
        new RoomsController(app, roomService);
    }
}

export default Server;

const server=new Server;
server.init();
