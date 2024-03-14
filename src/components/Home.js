import { useNavigate } from 'react-router-dom'
export const Home = () => {
    const navigate = useNavigate()
    return (
        <>
            <div>Home Page</div>
            <button onClick={() => navigate('orderSummary')}>Place Order!</button>
        </>
    )
}