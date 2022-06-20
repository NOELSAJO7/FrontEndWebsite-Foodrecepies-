let updateRatings=(n)=>{
    switch(n)
    {
        case 1:
        if(document.querySelector('.c2').classList.contains("checkedorange"))
        {   document.querySelector('.c2').classList.remove("checkedorange");
            document.querySelector('.c3').classList.remove("checkedorange");
            document.querySelector('.c4').classList.remove("checkedorange");
            document.querySelector('.c5').classList.remove("checkedorange");
        }
        document.querySelector('.c1').classList.add("checkedorange");
            break;
        case 2:
            if(document.querySelector('.c3').classList.contains("checkedorange"))
        {
            document.querySelector('.c3').classList.remove("checkedorange");
            document.querySelector('.c4').classList.remove("checkedorange");
            document.querySelector('.c5').classList.remove("checkedorange");
        }
               
               document.querySelector('.c1').classList.add("checkedorange");
               document.querySelector('.c2').classList.add("checkedorange");
            break;
        case 3:if(document.querySelector('.c4').classList.contains("checkedorange"))
        {
            document.querySelector('.c4').classList.remove("checkedorange");
            document.querySelector('.c5').classList.remove("checkedorange");
        }
               document.querySelector('.c1').classList.add("checkedorange");
               document.querySelector('.c2').classList.add("checkedorange");
               document.querySelector('.c3').classList.add("checkedorange");
            break;
        case 4:if(document.querySelector('.c5').classList.contains("checkedorange"))
                {
                    document.querySelector('.c5').classList.remove("checkedorange");
                }
               document.querySelector('.c1').classList.add("checkedorange");
               document.querySelector('.c2').classList.add("checkedorange");
               document.querySelector('.c3').classList.add("checkedorange");
               document.querySelector('.c4').classList.add("checkedorange");
            break;
        case 5:document.querySelector('.c1').classList.add("checkedorange");
               document.querySelector('.c2').classList.add("checkedorange");
               document.querySelector('.c3').classList.add("checkedorange");
               document.querySelector('.c4').classList.add("checkedorange");
               document.querySelector('.c5').classList.add("checkedorange");
            break;
    }
}
