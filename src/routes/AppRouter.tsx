import { Layout } from '@/app/Layout';
import { Home, NewTask, NoMatch } from '@/pages';
import {  Route, Routes } from 'react-router-dom';

export const AppRouter = () => {
    return (
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/add" element={<NewTask />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
        </Routes>
    )
}
