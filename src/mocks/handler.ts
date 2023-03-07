import {rest} from "msw";

export const handlers = [
    // 用于登录
    rest.post('/login',(req,res,context) => {
        sessionStorage.setItem('is-authenticated','true');//设置登录状态为真

        return res(
            context.status(200)
        )
    }),

    // 用于获取用户信息
    rest.get('/user',(req, res, context) => {
        const isAuthenticated = sessionStorage.getItem('is-authenticated');
        //未认证的用户
        if(!isAuthenticated){
            return res(context.status(403),context.json({
                errorMessage:'未进行认证'
            }))
        }
        // 已经认证的用户
        return res(context.status(200),context.json({
            username:'admin',
            address:'dreamlove.top'
        }))
    }),
]
