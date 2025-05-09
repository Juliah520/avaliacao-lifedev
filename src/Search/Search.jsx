import styles from "./Search.module.css"

import {useQuerry} from "../hooks/useQuery"
import {Link} from "react-router-dom"
import { useFetchDocuments } from "../hooks/useFetchDocuments"
import PostDetail from "../components/PostDetail"
const Search = () => {
  const querry = useQuerry()
  const search = querry.get("q")

  const {documents: posts} = useFetchDocuments("posts", search)
  return (
    <div className={styles.search_container}>
     <h1>Resultados encontrados de : {search}</h1>
     <div className="post-list">
        {posts && posts.length === 0 && (
            <>
            <p>
                Nao foram encontrados posts a partir da sua busca
            </p>
            <Link to="/"className="btn btn-dark">
                voltar
            </Link>
            </>
        )}
        {posts && posts.map((post)=><PostDetail key={post.id}post={post}/>)}
     </div>
    </div>
  )
}

export default Post