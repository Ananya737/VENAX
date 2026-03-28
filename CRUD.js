


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

    let formFill = async (id) => {
        let res = await fetch(`http://localhost:3000/car/${id}`);
        let data = await res.json();

        let formData = `
        <div>
            <h1>Update Here</h1>

            <input type="text" id="upname" value="${data.name}"><br><br>
            <input type="number" id="upnumber" value="${data.number}"><br><br>

            <input type="text" id="uppickUp" value="${data.pickUp}"><br><br>
            <input type="text" id="updropOff" value="${data.dropOff}"><br><br>

            <input type="email" id="upemail" value="${data.email}"><br><br>
            <input type="text" id="upchooseCar" value="${data.chooseCar}"><br><br>

            <input type="date" id="uppickDate" value="${data.pickUpDate}"><br><br>
            <input type="date" id="upreturnDate" value="${data.returnDate}"><br><br>

            <button onclick="finalUpdate(${data.id})">Update</button>
        </div>
        `;

        document.querySelector("#showData").innerHTML = formData;
    }


    let finalUpdate = (id) => {

        let url = `http://localhost:3000/car/${id}`;

        fetch(url, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                name: document.querySelector("#upname").value,
                number: document.querySelector("#upnumber").value,
                pickUp: document.querySelector("#uppickUp").value,
                dropOff: document.querySelector("#updropOff").value,
                email: document.querySelector("#upemail").value,
                chooseCar: document.querySelector("#upchooseCar").value,
                pickUpDate: document.querySelector("#uppickDate").value,
                returnDate: document.querySelector("#upreturnDate").value
            })
        })
        .then(res => res.json())
        .then(() => {
            alert("Updated Successfully!");
            location.href = "Table.html";
        });
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
        
        



