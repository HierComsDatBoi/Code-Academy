import { createContext } from "react";
import { FormProvider } from "react-hook-form";

type ChildrenType = { children: React.ReactElement};

type UserType = { 
  id: string,
  username: string,
  password: string
}

type ContextTypes = {
  users: UserType[]
}

const UsersContext = createContext<ContextTypes | undefined>(undefined);

const UsersProvider = ({children}: ChildrenType) => {


  // return (
  //   <UsersContext.Provider
  //   value={[]}
  //   >
  //     {children}
  //   </UsersContext.Provider>
  // )
}


// 1. createContext(undefined)
// 2. provider children
// 3. return userscontextprovider
// 4.export FormProvider
// 5.export default context
// 6. ChildrenType
// 7. reducer users,dispatch
// 8. useeffect fetch data=>dispatch
// 9. reducer state action => switch action type. return action alldata
// 10. type usertype id username password role 
// 11. type usersreduceractiontypes : type setusers alldata: usertype[]
// 12. provider value is reducerio
// 13.export type userscontexttypes users: usertype[]
// 14. priskirti createkontext -> usercontexttyper ir palikt undefined
// 15. uestate loggedinuser
// 16. login func -> setloggedinuser(user)
// 17. logout func -> setlogedinuser(undefined)
// 18. provider values users loggedinuser login logout
// 19. context type irasyt provider values
// 
// 
// 
// 

