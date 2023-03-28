
export class Roller {
    private _distribution: Map<number, number>;
    private _last: number;
    private _faces: number;

    // specifies the number of faces the die has. It must have at least 2 faces
    // so any invalid values should default to 6 to represent the common 
    // six-sided die.
    constructor(faces: number) {
        if(faces>=2)
            this._faces=faces;
        else 
            this._faces=6;
    }

    // specifies which number should be rolled and returns the recorded roll. 
    // If the value provided is not valid for the number of faces the die has,
    // no record of the roll should be made and 0 should be returned. However,
    // if the value provided is between 1 and the number of faces (inclusive),
    // then:
    //   1. that same value should be returned,
    //   2. that value should be stored as the last roll, and
    //   3. the distribution should update the distribution record so that the
    //      key (value rolled) has an updated value that increases the number
    //      of rolls for that face by 1
    roll(value: number): number{
        let flag=false;
        if(value>=1 && value<=this._faces){
            this._last=value;
            // for (let i=0;i<this._distribution.size;i++){
            //     if(this._distribution.get.first==value)
            //         x.second+=1;
            //     else
            //         this._distribution.set(value,1);
            // }
            if(this._distribution){
                this._distribution.forEach((val: number, key: number) => {
                    //console.log(key, value);
                    if(key==value){
                        this._distribution.set(key,val+1);
                        flag=true;
                    }
                        
                        //val+=1;
                    // else
                    //     this._distribution.set(value,1);

                });
                if(flag==false)
                    this._distribution.set(value,1);
            }
            // else
            //     this._distribution.set(value,1);
            return value;

        }
        else
            return 0;
            
    }

    // returns the value of the latest die roll. If no rolls have been made
    // yet, then it should return 0.
    last(): number {
        if(this._last>0)
            return this._last;
        else
            return 0;
    }

    // returns a Map that represents the current distribution of rolls for each
    // possible face that can be rolled. The map's key should be the face
    // value and its value should be the number of times that face has been
    // rolled. Even if a face has not yet been rolled, its key should have a
    // value of 0.
    distribution(): Map<number, number>{
        return new Map<number, number>();
    }
} // end of Roller class