import { Header } from '../components/Header'
import './ErrPage.css'

export function ErrPage({cart}) {
    return (
        <>
            <title>Error Page</title>

            <Header cart={cart}/>

            <div className ="not-found-message">
                The Page not found
            </div>
        </>
    );
}