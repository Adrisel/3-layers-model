import { Room } from './models/IRoom'
import { IRoomsDao } from './IRoomsDao';
export class RoomsStorage implements IRoomsDao {

    storage: Room[] = [];

    createRoom(room: Room): Room {
        this.storage.push(room);
        return room;
    }
    getRoom(id: string): Room | undefined {
        return this.storage.find(room => room.id === id);
    }
    updateRoom(room: Room): boolean {
        let resToSend = false;
        this.storage = this.storage.map(roomOld => {
            if (roomOld.id === room.id) {
                resToSend = true;
                return { ...room }
            }

            return roomOld;
        });
        return resToSend;
    }
    deleteRoom(id: string): boolean {
          let resTosend = false;
         this.storage = this.storage.filter( (item, index) => {
             if(item.id !== id){
                  return item;
             }else{
                 resTosend = true;
             }
 
        });
        return resTosend; 
    }
    getRooms(): Room[] {
        return this.storage;
    }

}