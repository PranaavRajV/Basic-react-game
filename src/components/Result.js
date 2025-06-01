import react from "react"

function Result({orginalnum,term}){
  let result;
  if(term){
  if (term > orginalnum)
  {
    result = "Higher";
  }
  else if (term < orginalnum)
    {
      result = "Lower";
    }
  else if (term == orginalnum)
  {
     result = "GBU MAAME! GOD BLESS YOU!"
  }
  else{
    result = "-- ENTER VALID INPUT -- "
  }
}


  return <>
    <h3>YOU GUESSED : {result} </h3>

  </>
}

export default Result