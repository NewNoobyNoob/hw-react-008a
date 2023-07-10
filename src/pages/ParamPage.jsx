import { useParams } from "react-router-dom";

const data = [
    {id: 1, name: "გიორგი ანწუხელიძე", info: "IV ქვეითი ბრიგადა"},
    {id: 2, name: "ვახტანგ გზირიშვილი", info: "IV ქვეითი ბრიგადა"},
    {id: 3, name: "კობა წურწუმია", info: "IV ქვეითი ბრიგადა"}


]

const ParamPage = () => {
    const param = useParams()

    const hero = data.find(hero => hero.id == param.id)
    if(!hero){
        return <div style={{fontSize: "50px", textAlign:"center", fontWeight:"bold"}}>
            <p>Look for Heroes!</p>
            <p>დიდება გმირებს!</p>
            </div>
    }
    return (
        <div>
            <h1 style={{fontSize: "50px", textAlign:"center"}}>{hero.name}</h1>
            <h1 style={{fontSize: "50px", textAlign:"center"}}>{hero.info}</h1>
            <h2 style={{fontSize: "50px", textAlign:"center"}}>დიდება გმირებს!</h2>

        </div>
    )
}

export default ParamPage; //! all routes should be registered within router.js file!
