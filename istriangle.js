const angleInput=document.querySelectorAll(".angle-input");
const isTriangleButton=document.querySelector("#is-triangle-button");
const output=document.querySelector("#output");
const errorBox=document.querySelector("#error-box");
  
isTriangleButton.addEventListener("click",isTriangle);

function calculateSumOfAngles(angle1,angle2,angle3)
{
    const sumOfAngles=angle1+angle2+angle3;
    return sumOfAngles;
}

function isTriangle()
{
    const angle1=Number(angleInput[0].value);
    const angle2=Number(angleInput[1].value);
    const angle3=Number(angleInput[2].value);
    if(angle1>0 && angle2>0 && angle3>0){
        const sumOfAngles=calculateSumOfAngles(angle1,angle2,angle3);

        output.style.display="block";
        errorBox.style.display="none";
        if(sumOfAngles===180)
        {
            output.innerText="The angles form a triangle";
        }
        else
        {
            output.innerText="The angles don't form a triangle"
        }
    }
    else
    {
        output.style.display="none";
        errorBox.style.display="block";
        errorBox.innerText="**Please enter all inputs and all inputs must be greater than zero**";

    }
    
}
