class Emitter {
    constructor(){
        this._subscription = new Map()
    }

    subscribe(eventName, callback){

        if(!callback || typeof callback !== 'function'){
            throw new TypeError("callback is not proper")
        }

        if(!this._subscription.has(eventName)){
            this._subscription.set(eventName, new Map())
        }

        const event = this._subscription.get(eventName);
        const eventId = Symbol();
        event.set(eventId, callback);


        return {
            release: function(){
                if(!event.has(eventId)){
                   throw new Error("event already released")
                }
                event.delete(eventId);
            }
        }
    }

    emit(eventName, ...args){
        const event = this._subscription.get(eventName);
        event.forEach(value => value(...args));
    }

}


const emitter = new Emitter();

const subscription = emitter.subscribe('modify', (val) => console.log(val));

emitter.emit('modify', 'new')

subscription.release();

emitter.emit('modify', 'fdg')
subscription.release();