import MainLayout from '@/layouts/MainLayout'
import BusesPage from '@/pages/BusesPage'
import HomePage from '@/pages/HomePage'
import HotelsPage from '@/pages/HotelsPage'
import Page404 from '@/pages/Page404'
import SummaryPage from '@/pages/SummaryPage'
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
            {
                path: 'buses',
                Component: BusesPage,
                handler: {
                    title: 'Вибір автобуса'
                }
            },
            {
                path: 'hotels',
                Component: HotelsPage,
                handler: {
                    title: 'Вибір готеля'
                }
            },
            {
                path: 'summary',
                Component: SummaryPage,
                handler: {
                    title: 'Підсумок вибору'
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