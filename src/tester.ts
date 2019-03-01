// IMPORT STUFF YOU WANT TO PLAY WITH
import Algorithms from './algorithms/algorithms';



//********************************************/
async function tester()
{
   let result = await Algorithms.PCAI(["beta","zebra","charlie","island","alpha","gamma"],["zebra","beta","charlie","alpha","island"]);
   console.log(result);
}
//run the test script, print complete, or log an error that occured
tester().then(()=>console.log("script complete.")).catch((e)=>console.log(e))