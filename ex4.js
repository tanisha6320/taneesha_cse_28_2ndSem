function calculate(){
            let n = 5
            document.getElementById("subjects").value;
            let total=0;
            for(let i=1;i<=5;i++){
                let marks = parseFloat(prompt("enter marks of subject "+i));
                total=total+marks;
            }
        
         let average = total /n;
         let grade;
         let result;
            if(average>=90)
            grade = "A+";
            else if(average>=75)
             grade = "A";
             else if(average>=60)
             grade = "B";
            else if(average>=50)   
             grade = "C";
            else
            grade = "D"; 
        if(average>=40)
            result = "Pass";
        else
            result = "Fail";
        document.getElementById("result").innerHTML=
        "Total Marks: " + total + "<br>" +
        "Average Marks: " + average + "<br>" + 
        "Grade: "+grade + "<br>" +
        "Result: " + result;
        }