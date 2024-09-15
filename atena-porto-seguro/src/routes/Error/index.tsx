import NotFound from "../../components/NotFound/NotFound";



export default function Error() {

  document.title = "Erro 404";

  return (

    <>
      <NotFound/>
    </>
  )
}
