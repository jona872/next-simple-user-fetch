// import styles from './User.module.css'
import Router from 'next/router'

function User(props) {
   // console.log(props.users);

   // const vUser = props.users.map((user) => {
   //    return (
   //       <ul key={user.id} >
   //          <li>{user.name}</li>
   //          <li>{user.username}</li>
   //          <li>{user.email}</li>
   //          <li>{user.phone}</li>
   //          <li>{user.website}</li>
   //       </ul>
   //    )
   // }
   // );
   //{vUser}

   return (
      <ul className="list-group">
         {
            props.users.map((user) => (
               <li className="list-group-item list-group-item-action d-flex 
               justify-content-between align-items-center" key={user.id} 
               onClick={(e) => {Router.push('/users/[id]',`/users/${user.id}` ) }} >
                  <div>
                     <h5>{user.first_name}</h5>
                     <h5>{user.last_name}</h5>
                     <p>Email: {user.email}</p>
                  </div>
                  <img src={user.avatar} alt="avatar"
                     style={{ borderRadius: '50%' }} />
               </li>
            ))
         }

      </ul>

   );
}

export default User;