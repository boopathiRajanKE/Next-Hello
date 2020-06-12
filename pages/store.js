import Layout from "../comps/layout"
import StoreView from "../comps/store"

function StoreContent() {
  return (
    <div>
      <div className="test1">StoreContent One</div>
      <div className="test1">StoreContent Two</div>
    </div>
  )
}

const Store = (props) => {
  const [content, setContent] = React.useState(false)

  console.log("Store called")
  const handleClick = (_) => {
    const a = { a: true }
    const b = { b: false }
    console.log({ ...a, ...b })
  }
  //localStorage.setItem('a', 'boopathi')

  console.log(typeof localStorage)

  /* React.useEffect(() => {
    setContent(true)
  }, []) */

  return (
    <Layout>
      <h1 onClick={handleClick}>Store Page</h1>
      <StoreView />
      <StoreContent />
      {content ? (
        <div>Hey content is showing</div>
      ) : (
        <div> Hey content is not showing</div>
      )}
    </Layout>
  )
}

export default Store
