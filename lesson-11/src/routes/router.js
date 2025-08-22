import MainLayout from '@/layouts/MainLayout'
import HomePage from '@/pages/HomePage'
import Page404 from '@/pages/Page404'
import { createBrowserRouter } from 'react-router'
export const routes = [
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: HomePage,
                handler: {
                    title: 'Головна'
                }
            },
        ]
    },
    {
        path: '*',
        Component: Page404,
    }
]
const router = createBrowserRouter(routes)
export default router