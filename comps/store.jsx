import React from "react"

function StoreView(props) {
  const [data, setData] = React.useState("")

  /* React.useEffect(() => {
    console.log("React use Effect called")
    setData("Store list data rendered from API")
  }, []) */

  return (
    <div>
      Store page Data: <br />
      <p>
        <strong>{data ? data : "Loading.."}</strong>
      </p>
    </div>
  )
}

export default StoreView
