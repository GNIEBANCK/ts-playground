// inspiration - sorting possible key values alphabetically in order to
// create more efficient querying on range keys in dynamoDB
// i.e multiple list values where rangekey === value is slower than a single where < value and > value
// goal is to 

export async function parseConsecutiveAndIslands(possibleValues:string[],queryValues:string[]):Promise<string[][]>
{
    let results:string[][]=[];
    let currentValue;
    let finished = false;
    let sortedPossible = possibleValues.sort();
    let sortedQueryValues = queryValues.sort();
    let lastEvaluatedIndex;
    while(!finished)
    {        
        currentValue = sortedQueryValues[0];
        let currentChunk = [currentValue];
        lastEvaluatedIndex = sortedPossible.indexOf(currentValue)+1;
        while(sortedQueryValues.includes(sortedPossible[lastEvaluatedIndex]) && !((lastEvaluatedIndex == (possibleValues.length))))
        {
            currentChunk.push(sortedPossible[lastEvaluatedIndex]);
            lastEvaluatedIndex++;
        }    
        results.push([...new Set([currentChunk[0],currentChunk[currentChunk.length -1]])]);
        sortedQueryValues.splice(0,currentChunk.length);
        finished = (lastEvaluatedIndex >= (possibleValues.length - 1));

    }
    return results;
}