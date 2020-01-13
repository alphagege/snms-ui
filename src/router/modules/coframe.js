import Layout from '@/views/Layout'

const _import = require('../_import_' + process.env.NODE_ENV)


export default [{
    path: '/system',
    component: Layout,
    redirect: '/system/sys-resource/sys-menu',
    name: 'System',
    meta: {
        title: '系统管理',
        icon: 'nested'
    },
    children: [{
        path: 'sys-resource',
        component: () =>
            import ('@/views/system/sys-resource/index'), // Parent router-view
        name: 'SysResource',
        meta: {
            title: '系统资源'
        },
        redirect: '/system/sys-resource/sys-menu',
        children: [{
                path: 'sys-menu',
                component: () =>
                    import ('@/views/system/sys-resource/sys-menu'),
                name: 'SysMenu',
                meta: {
                    title: '菜单管理'
                }
            },
            {
                path: 'sys-dic',
                component: () =>
                    import ('@/views/system/sys-resource/sys-dic'),
                name: 'SysDic',
                meta: {
                    title: '字典码表'
                }
            }
        ]
    }]
}]
