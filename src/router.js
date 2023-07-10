import HomePage from "./pages/HomePage";
import Besiki from "./pages/Besiki";
import Ilia from "./pages/Ilia";
import Vazha from "./pages/Vazha";
import Shota from "./pages/Shota";
import LinkLayout from "./layouts/LinkLayout";
import ParamPage from "./pages/ParamPage";
import ErrorPage from "./pages/ErrorPage";


const router = [
    // Regular React Routes are placed inside Layout Route as children
    {
        element: <LinkLayout />,
        path: '/',
        children: [
            {
                element: <HomePage />,
                index: true
            },
            {
                element: <Besiki />,
                path: 'besiki'
            },
            {
                element: <Ilia />,
                path: 'ilia'
            },
            {
                element: <Vazha />,
                path: 'vazha'
            },
            {
                element: <Shota />,
                path: 'shota'
            }
        ]},
        // again regular route
        {
            element: <ParamPage />,
            // path: '/dynamyc/:name'
            path: '/hero/:id'

        },
        //wildcard route:
        {
            element: <ErrorPage />,
            path: '*'
        }
]

export default router;
