export default class Overloader
{
    organizationAsString:string;
    organizationAsOrganizationObjbect:object

    constructor()
    {

    }

    async overloadedFunction(organizationStringOrObject:string|object)
    {
    
        console.log(typeof organizationStringOrObject);
    }  
}