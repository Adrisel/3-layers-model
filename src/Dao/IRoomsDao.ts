import { Room }from './models/IRoom'
export interface IRoomsDao{
       createRoom(room:Room):Room;
       getRoom(id:string):Room | undefined;
       updateRoom(room:Room):boolean;
       deleteRoom(id:string):boolean;
       getRooms():Room[];
       
}