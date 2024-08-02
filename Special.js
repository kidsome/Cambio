class Special extends Card {
constructor(number, suit, active){

        super(number, suit);
        this.active = active;
    }
    getActive(){
        return this.active;
    }
    setActive(newState) {
        this.active = newState;
    }
}