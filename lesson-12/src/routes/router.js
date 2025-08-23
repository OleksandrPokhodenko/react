import MainLayout from '@/layouts/MainLayout'
import Page404 from '@/pages/Page404'
import Posts from '@/pages/Posts'
import { createBrowserRouter } from 'react-router'
export const routes = [
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                path: '',
                Component: Posts,
                handler: {
                    title: 'Список постів'
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