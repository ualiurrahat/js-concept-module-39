// we will learn error handling here

let age;


try{
    age = prompt("enter age: ");
    age = parseInt(age);
    if(isNaN(age))
    {
        throw "invalid age";
    }
    else{
        if(age < 18)
        {
            throw "you are a minor";
        }
        else if(age > 50)
        {
            throw "old guy not allowed";
        }
        
    }
   console.log("you are welcome");
}
catch(err)
{
    console.log("Error: ", err);
}
finally
{
    console.log("thank you");
}