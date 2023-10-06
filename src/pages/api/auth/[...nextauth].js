import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth"
// import { unstable_renderSubtreeIntoContainer } from "react-dom/cjs/react-dom.production.min";
export default  NextAuth({
    providers: [
        CredentialsProvider({
          name: "Credentials",
          
          credentials: {
            email: { label: "Email", type: "email", placeholder: "jsmith@sa" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials, req) {
            const { email, password } = credentials;
        
            const res = await fetch("http://localhost:3000/api/sigLogin", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
        
         
        
            const user = await res.json();
            // console.log(user,"El usuario desde [...next-aut]")
         
        
            return user;
        }
        
       
        })
      ], callbacks:{
        // se guarda el user en el token, es decir se guarda en el navegador pero no en el front
        jwt({token,user}){
         
          if(user) token.user= user;
          // guarda el dato del usuario en el token
          return token;
        },
        // se guardad en el front
        session({session,token}){
          console.log(session,token)
          session.user = token.user;
          return session;
        }
        
      }
      
      , pages: {
            signIn: '/login',
      
        }
})
