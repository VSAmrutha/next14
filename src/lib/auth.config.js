export const authConfig={
    pages:{
        signIn:"/login"
    },
    providers:[],
    callbacks:{
        async jwt({token,user}){
            if(user){
                token.id=user.id;
                token.isAdmin=user.isAdmin;
            }
            return token
        },
        async session({session,token}){
            if(token){
                session.user.id=token.id;
                session.user.isAdmin=token.isAdmin;
            }
           
            return session;

        },
        authorized({auth,request}){
            const user=auth?.user;
            const isOnAdminPanel=request.nextUrl?.pathname.startsWith('/admin');
            const isOnBlogPanel=request.nextUrl?.pathname.startsWith('/blog');
            const isOnLoginPanel=request.nextUrl?.pathname.startsWith('/login')
            //only admin can react admin dashboard
            if(isOnAdminPanel && !user?.isAdmin){
                return false;
            }
            //only auth users can react blog page 
            if(isOnBlogPanel && !user){
                return false;
            }
            //only unauth  can react login page 
            if(isOnLoginPanel && user){
                return Response.redirect(new URL('/',request.nextUrl));
            }
            return true


            console.log(auth)
            return true
        }
    }
}