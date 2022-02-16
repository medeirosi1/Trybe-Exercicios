const url = `https://api.coincap.io/v2/assets`;

const cryptoFetch = async () => {
   const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
   }; 
   try { 
   const response = await fetch(url,myObject);
   const data = await response.json();
   console.log(data);
   }
   catch (error) {
       console.log(error);
   }
}

cryptoFetch();