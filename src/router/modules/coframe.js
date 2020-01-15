import Layout from '@/views/layout'


export default [{
        path: '/system-resource',
        component: Layout,
        name: 'SystemResource',
        meta: {
            title: '系统资源',
            icon: 'system-resource'
        },
        children: [{
                path: 'system-menu',
                component: () =>
                    import ('@/views/system-resource/system-menu'),
                name: 'SystemMenu',
                meta: {
                    title: '菜单管理',
                    icon: 'system-menu'
                }
            },
            {
                path: 'system-dic',
                component: () =>
                    import ('@/views/system-resource/system-dic'),
                name: 'SystemDic',
                meta: {
                    title: '字典码表',
                    icon: 'system-dic'
                }
            }
        ]
    },
    {
        path: '/auth-manage',
        component: Layout,
        name: 'AuthManage',
        meta: {
            title: '权限管理',
            icon: 'auth-manage'
        },
        children: [{
                path: 'system-user',
                component: () =>
                    import ('@/views/system-auth/system-user'),
                name: 'SystemUser',
                meta: {
                    title: '用户管理',
                    icon: 'system-user'
                }
            },
            {
                path: 'system-role',
                component: () =>
                    import ('@/views/system-auth/system-role'),
                name: 'SystemRole',
                meta: {
                    title: '角色管理',
                    icon: 'system-role'
                }
            },
            {
                path: 'system-auth',
                component: () =>
                    import ('@/views/system-auth/system-auth'),
                name: 'SystemAuth',
                meta: {
                    title: '授权管理',
                    icon: 'system-auth'
                }
            }
        ]
    },
    {
        path: '/org-manage',
        component: Layout,
        name: 'OrgManage',
        meta: {
            title: '组织机构',
            icon: 'org-manage'
        },
        children: [{
            path: 'system-org',
            component: () =>
                import ('@/views/system-org/system-org'),
            name: 'SystemOrg',
            meta: {
                title: '机构管理',
                icon: 'system-org'
            }
        }]
    }
]
