


let fetchData=async()=>{
    let url='http://localhost:3000/car';
    let res = await fetch(url,{method:"GET"});
    let data = await res.json();
    console.log(data);

    paginationData(data);

    
}


let Searchhh=async()=>{
    let inpsearch=document.querySelector("#inpsearch").value.toLowerCase();

    let url='http://localhost:3000/car';

    let res=await fetch(url,{method:"GET"});

    let data= await res.json();

    let filterData= data.filter((e)=>{
        return e.name.toLowerCase().includes(inpsearch) ;
    }
)

paginationData(filterData);
}


let paginationData=(data)=>{

    $('#pagin').pagination({
        dataSource: data,
        pageSize: 4,
        showPageNumbers: true,
        showNavigator: true,
        callback: function(data, pagination) {
          DataShow(data);
        }
    })
}


let DataShow=(data)=>{
    let display=document.querySelector("#display");
    display.innerHTML=""

    data.map((e)=>{
        display.innerHTML+= `
                             <tr id="TROW">
                             <td>${e.name}</td>
                             <td>${e.number}</td>
                             <td>${e.email}</td>
                             <td>${e.chooseCar}</td>
                             <td>${e.pickUp}</td>
                             <td>${e.dropOff}</td>
                             <td>${e.pickUpDate}</td>
                             <td>${e.returnDate}</td>
                             <td onclick="deletee('${e.id}')">Delete Data</td>
                             <td onclick="formFill('${e.id}')">Update</td>

                             </tr>
                             
        `                      
    }

    )
}


let deletee=(id)=>{
    let url=`http://localhost:3000/car/${id}`;

    fetch(url,{method:"DELETE"});
 
}

let formFill=async(id)=>{
    
    let url=`http://localhost:3000/car/${id}`;

    let res=await fetch(url,{method:"GET"});

    let data=await res.json();

    console.log(data);

   

    let formData = `
    
     <form>
     <h1> Update here </h1>
        <div class="container">
            <div class="container1">
                <input type="text" id="upname" placeholder="Name*"> <br> <br>

                <input type="number" id="upnumber" placeholder="Phone*"> <br> <br>

                <select id="uppickUp">
                    <option value="Pick up location">Pick up location</option>
                    <option value="Bhopal" >Bhopal</option>
                    <option value="Sagar" >Sagar</option>
                    <option value="Indore" >Indore</option>
                    <option value="Jabalpur" >Jabalpur</option>
                    <option value="Vidisha" >Vidisha</option>
                </select>
                <br> <br>

                <select id="updropOff">
                    <option value="Drop off location" selected>Drop off location</option>
                    <option value="Bhopal" >Bhopal</option>
                    <option value="Sagar" >Sagar</option>
                    <option value="Indore" >Indore</option>
                    <option value="Jabalpur" >Jabalpur</option>
                    <option value="Vidisha" >Vidisha</option>
                </select>
                <br> <br>
                
            </div>

            <div class="container2">
                <input type="email" id="upemail" placeholder="Email*"> <br> <br>
                
                <select id="upchooseCar">
                    <option value="Choose Car" selected>Choose Car</option>
                    <option value="All" >All</option>
                    <option value="Luxury Cars" >Luxury Cars</option>
                    <option value="Sport Cars" >Sport Cars</option>
                    <option value="SUVs" >SUVs</option>
                    <option value="Convertible" >Convertible</option>
                </select>
                <br> <br>
                       <!-- doubt -->
                <input type="date" id="uppickDate" placeholder="Pick up date">     <br> <br>         

                <input type="date" id="upreturnDate" placeholder="Return date"> <br> <br>
            </div>
        </div>

        <div class="additionalNote">
            <input type="text"  id="upadditionalNote" placeholder="Additional Note">
        </div>
        <br> <br>

        <div class="rentNow">
            <input type="submit" value="Rent now" id="rentNow" onclick="finalUpdate('${data.id}')">
        </div>
    </form> `

    document.querySelector("#showData").innerHTML=formData;
    document.querySelector("#pagin").style.display="none" ;
    document.querySelector("#display").style.display="none" ;
    

}


let finalUpdate=(id)=>{
    
    

    let upname=document.querySelector("#upname").value;
    let upnumber=document.querySelector("#upnumber").value;
    let uppickup=document.querySelector("#uppickUp").value;
    let updropoff=document.querySelector("#updropOff").value;
    let upemail=document.querySelector("#upemail").value;
    let upchoosecar=document.querySelector("#upchooseCar").value;
    let uppickdate=document.querySelector("#uppickDate").value;
    let upreturndate=document.querySelector("#upreturnDate").value;

    
    let url= `http://localhost:3000/car/${id}`;
    fetch(url,{
        method:"PUT",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(
            {
                name:upname,
                number:upnumber,
                pickUp:uppickup,
                dropOff:updropoff,
                email:upemail,
                chooseCar:upchoosecar,
                pickUpDate:uppickdate,
                returnDate:upreturndate
            }
           

        )
    });
    
    location.href="Table.html";
    return false;
}







let rentt=()=>{
    let inpname=document.querySelector("#name").value;
    let inpnumberr=document.querySelector("#numberr").value;
    let inppickup=document.querySelector("#pickUp").value;
    let inpdropoff=document.querySelector("#dropOff").value;
    let inpemail=document.querySelector("#email").value;
    let inpchoosecar=document.querySelector("#chooseCar").value;
    let inppickdate=document.querySelector("#pickDate").value;
    let inpreturndate=document.querySelector("#returnDate").value;

    

        let url= 'http://localhost:3000/car';
        fetch(url,{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(
                {
                    name:inpname,
                    number:inpnumberr,
                    pickUp:inppickup,
                    dropOff:inpdropoff,
                    email:inpemail,
                    chooseCar:inpchoosecar,
                    pickUpDate:inppickdate,
                    returnDate:inpreturndate
                }
               

            )
        });

        location.href="Table.html";

        return false;
        
    }
    
       



