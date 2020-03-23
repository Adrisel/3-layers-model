import { IRoomsService } from "./IRoomsService";
import { Room } from '../../Dao/models/IRoom';
import { RoomsStorage } from '../../Dao/RoomsStorage'

export class RoomsService implements IRoomsService{

    constructor(private roomStore:RoomsStorage){}

    createRoom(room:Room): Room {
        return this.roomStore.createRoom(room);
    }
    getRoom(id: string):Room | undefined {
        return this.roomStore.getRoom(id);
    }
    updateRoom(id: string, room:Room): boolean {
        const result = !!this.getRoom(id);
        if(!result){
            return false;
        }
         return this.roomStore.updateRoom(room);
    }
    deleteRoom(id: string): boolean {
        return this.roomStore.deleteRoom(id);
    }
    getRooms():Room[] {
        return this.roomStore.getRooms();
    }

}