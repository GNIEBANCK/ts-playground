// IMPORT STUFF YOU WANT TO PLAY WITH
//import Algorithms from './algorithms/algorithms';
import {Rectangle} from '../src/basics/classes/rectangle';
import {Square} from '../src/basics/classes/square'


//********************************************/
async function tester()
{
  // let result = await Algorithms.PCAI(["beta","zebra","charlie","island","alpha","gamma"],["zebra","beta","charlie","alpha","island"]);
   let r = new Rectangle(4,7);
   let s = new Square(3)

   console.log(r.area)
   console.log(r.perimeter)
   console.log(s.area);
   console.log(s.perimeter);
}
//run the test script, print complete, or log an error that occured
tester().then(()=>console.log("script complete.")).catch((e)=>console.log(e))