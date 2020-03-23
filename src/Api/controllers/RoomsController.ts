import { Room } from '../../Dao/models/IRoom'
import { RoomsService } from '../../Core/services/RoomsService'
import { Application } from 'express'
import express from 'express';

export class RoomsController {


    constructor(private app: Application, private roomsService: RoomsService ){

        app.get('/rooms',(req,res) =>{
            const rooms = this.roomsService.getRooms();
            res.status(200).send(rooms)
    
        });
        
        app.post('/rooms', (req:express.Request,res:express.Response) =>{
            const room: Room = req.body; 
            const rooms =  this.roomsService.createRoom(room); 
            res.status(200).send(room);
        });

        app.put('/rooms/:id', (req,res) =>{
            const id: string = req.params.id;
            const room: Room = req.body;
            const result = this.roomsService.updateRoom(id,room);
            if (!result) {
              res.send('User not found');
            }else{res.send(room)};
        });

        app.delete('/rooms/:id', (req,res) => {
            const result = this.roomsService.deleteRoom(req.params.id);
            if(result){
                res.send('room deleted');
            }else{res.send('room not found').status(404)};
        });

        app.get('/rooms/:id', (req,res)=>{
            const room:any = this.roomsService.getRoom(req.params.id);
            if(!room){res.send('Room not found').status(404);}
            else{res.send(room).status(200)}
        });
    }
}