import {IShape} from '../interfaces/iShape';
import { Quadrilateral } from './quad';
export class Rectangle extends Quadrilateral implements IShape
{
    length:number;
    width:number;

    constructor(length:number,width:number)
    {
        super();
        this.length = length;
        this.width = width;
        this.setArea();
        this.setPerimeter();
    }

    private setArea()
    {
        this.area = this.length * this.width; 
    }

    private setPerimeter()
    {
        this.perimeter = 2 * this.length + 2 * this.width;
    }

    

    
}