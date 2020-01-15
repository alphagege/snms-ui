import ajaxUtil from '@/libs/ajaxUtil'

export function login (user) {
    return ajaxUtil.ajax({
        url: 'login',
        method: 'post',
        data: user,
        headers: {}
    })
}
export function logout () {
    return ajaxUtil.ajax({
        url: '/logout',
        method: 'post'
    })
}
