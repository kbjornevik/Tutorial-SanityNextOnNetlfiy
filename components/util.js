
const  getFormattedDate = (props) => {
    console.log("date..:", props)
    const date = new Date(props)
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
  
    return day + '/' + month + '/' + year;
   // return "10.jan.2021"
}
export default getFormattedDate