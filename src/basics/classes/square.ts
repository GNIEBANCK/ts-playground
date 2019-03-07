import {IShape} from '../interfaces/iShape';
import {Rectangle} from './rectangle';
export class Square extends Rectangle implements IShape
{
    constructor(side:number)
    {
        super(side,side);    
    }
}