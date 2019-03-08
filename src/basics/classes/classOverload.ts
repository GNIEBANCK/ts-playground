export default class Overloader
{
    paramAsAstring:string;
    paramAsAnObject:object

    constructor(private something:string)
    {

    }

    async overloadedFunction(paramAsAStringOrObject:string|object)
    {
        if(typeof paramAsAStringOrObject === "string")
        {            
            console.log("this is a string!")
            this.paramAsAstring = paramAsAStringOrObject;
        }
        else if(typeof paramAsAStringOrObject === "object")
        {
            console.log("this is an object!")
            this.paramAsAnObject = paramAsAStringOrObject;
        }
    }  

    async saysomthing()
    {
        console.log(this.something);
    }
}