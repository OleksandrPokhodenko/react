import Layout from '@/layouts/Layout'
import BusesPage from '@/pages/BusesPage'
import ErrorPage from '@/pages/ErrorPage'
import HomePage from '@/pages/HomePage'
import HotelsPage from '@/pages/HotelsPage'
import Page404 from '@/pages/Page404'
import { createBrowserRouter } from 'react-router'
const routes = [
    {
        path: '/',
        Component: Layout,
        errorElement: ErrorPage,
        children: [
            {
                index: true,
                Component: HomePage,
            },
            {
                path: 'buses',
                Component: BusesPage,
            },
            {
                path: 'hotels',
                Component: HotelsPage
            },
            {
                path: '*',
                Component: Page404,
            }
        ]
    }
]
const router = createBrowserRouter(routes)
export default router