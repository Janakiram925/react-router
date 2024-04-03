import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home';
// import { About } from './components/About';
import Navbar from './components/Navbar';
import OrderSummary from './components/OrderSummary';
import Nomatch from './components/Nomatch';
import ProductsPage from './components/Products';
import FeaturedProducts from './components/FeaturedProducts';
import NewProducts from './components/NewProducts';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import { Admin } from './components/Admin';
import React from 'react';
// const LazyAbout = React.lazy(('./components/About'))
import About from './components/About';
import Profile from './components/Profile';
import { AuthProvider } from './components/auth';
import Login from './components/Login';
import RequireAuth from './components/RequireAuth';
import FormInput from './components/prac/FormInput';
import HookUseRef from './components/prac/HookUseRef';
import DropDowns from './components/prac/DropDowns';
import DemoUseCallback from './components/prac/HookUsecallBack/DemoUseCallback';
import EmptyDepUsecallBack from './components/prac/HookUsecallBack/EmptyDepUsecallBack';
import AddToList from './components/prac/AddToList';
import StopWatch from './components/prac/StopWatch';
import Parent from './components/prac/CompCommunication/Parent';
import { DataProvider } from './components/prac/CompCommunication/Context';
import ClickCounter from './components/prac/HOCExample/ClickCounter';
import HoverCounter from './components/prac/HOCExample/HoverCounter';
import ParentComponent from './components/prac/UseCallBack/ParentComponent';
import ActionAfterStateUpdate from './components/prac/ActionAfterStateUpdate';
import TaskForm from './components/Task-Management-app/TaskForm';
import Airlines from './components/Valuelabs-task/Airlines';
import Data from './Task/Data.js';
//Dynamic Routes -- userDetails
//searchParams -- users.js

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <></>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        {/* <Route path='about' element={<React.Suspense fallback= 'Loading...'><LazyAbout /></React.Suspense>}></Route> */}
        <Route path='orderSummary' element={<OrderSummary />}></Route>
        <Route path='products' element={<ProductsPage />}>
          <Route index element={<FeaturedProducts />}></Route>
          <Route path='featuredProducts' element={<FeaturedProducts />}></Route>
          <Route path='newProducts' element={<NewProducts />}></Route>
        </Route>
      
        <Route path='users' element={<Users />}>
          <Route path=':userId' element={<UserDetails />}></Route>
          <Route path='admin' element={<Admin />}></Route>
        </Route>
        <Route path='profile' element={<RequireAuth><Profile /></RequireAuth>}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='*' element={<Nomatch />}></Route>

      </Routes>
      {/* <FormInput />
      <HookUseRef />
      <DropDowns /> */}
      {/* <DemoUseCallback />
      <EmptyDepUsecallBack /> */}
      {/* <AddToList />
      <StopWatch />
      <DataProvider value={'data from context'}>
        <Parent />
      </DataProvider>
      <ClickCounter />
      <HoverCounter />
      <ParentComponent />
      <ActionAfterStateUpdate />
      <TaskForm />
      <Airlines /> */}
      <Data />

      
    </AuthProvider>
  );
}

export default App;
