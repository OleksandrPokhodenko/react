import MainLayout from '@/layouts/MainLayout'
import InfinityScroll from '@/pages/InfinityScroll'
import Page404 from '@/pages/Page404'
import PostsPage from '@/pages/postsPage'
import { createBrowserRouter } from 'react-router'
export const routes = [
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                path: '',
                Component: PostsPage,
                handler: {
                    title: 'Список постів'
                }
            },
            {
                path: 'scroll',
                Component: InfinityScroll,
                handler: {
                    title: 'Нескінченний скрол'
                }
            }
        ]
    },
    {
        path: '*',
        Component: Page404,
    }
]
const router = createBrowserRouter(routes)
export default router