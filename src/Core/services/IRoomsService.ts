import { Room } from '../../Dao/models/IRoom'
export interface IRoomsService{

    createRoom(room:Room):Room;
    getRoom(id:string):Room | undefined;
    updateRoom(id:string, room:Room):boolean;
    deleteRoom(id:string):boolean;
    getRooms():Room[];
}