class NT extends Special {
    constructor(number, suit, active){
    if(number != "nine" && number != "ten") {
        throw new error("NT Must be a nine or a ten!!");
            }
            super(number, suit, active);
    
        }
        
    }