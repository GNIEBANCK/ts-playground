import * as pcai from './parseConsecutiveAndIslands';
export default class Algorithms
{
  
    constructor()
    {

    }

    static async PCAI(possible:string[],chosen:string[])
    {
        return await pcai.parseConsecutiveAndIslands(possible,chosen);
    }
   

}