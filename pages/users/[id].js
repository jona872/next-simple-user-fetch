import { useRouter } from 'next/router'
import Container from '../../components/Container/Container';

export default function User(props) {
    console.log(props);

    const router = useRouter();
    const { id } = router.query;
    if (router.isFallback) return <h1>Loading fallback router...</h1>
    console.log("Router ID: ", id);

    return (
        <Container>
            <div className="row">
                <div className="cold-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-header text-center">
                            <img src={props.avatar} alt="avatar" />
                        </div>
                        <div className="card-body text-center">
                            <h3>{props.id} . {props.first_name}, {props.last_name} </h3>
                            <p  >{props.email}</p >
                        </div>
                    </div>
                </div>
            </div>

        </Container>
    )

}

// This gets called on every request
export async function getServerSideProps(context) {
    //context = params, response, query
    const { params, res } = context;
    const { id } = params;
    const apiResponse = await fetch(`https://reqres.in/api/users/${id}`);

    if (apiResponse.ok) {
        const props = await apiResponse.json();
        return { props: props.data }
    }
    if (res) {
        res.writeHead(301, { Location: "/" }).end();
    }
}

// export async function getStaticPaths (){
//     //le pongo 1 por defecto, pero va generando todas dinamicamente la primera vez que entra
//     return {
//         paths: [ {params: {id: "1"}} ],
//         fallback: true,
//     }
// }

// export async function getStaticProps(context) {
//     //context = params, response, query
//     const { params } = context;
//     const { id } = params;  
//     const apiResponse = await fetch(`https://reqres.in/api/users/${id}`);

//     if (apiResponse.ok) {
//         const props = await apiResponse.json();
//         return { props: props.data }
//     }
// }








