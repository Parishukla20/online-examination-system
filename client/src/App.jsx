import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate }
  from 'react-router';
import Register from './pages/Register';
import Session from './pages/admin/Session';
import AdminDashboard from './pages/admin/AdminDashboard';
import UserDashboard from './pages/user/UserDashboard'
import Subject from './pages/admin/Subject';
import Examination from './pages/admin/Examination';
import Examinee from './pages/admin/Examinee';
import AdminLogin from './pages/admin/AdminLogin';
import Login from './pages/Login'
import QuestionBank from './pages/admin/QuestionBank';
import MyResult from './pages/user/MyResult';
import Myexams from './pages/user/Myexams';
import Getexam from './pages/user/Getexam'
import Message from './pages/user/Message';
import DashboardHome from './pages/user/DashboardHome';
import ChangePassword from './pages/user/ChangePassword';
import DashboardAdmin from './pages/admin/DashboardAdmin';
import ReportGeneration from './pages/admin/ReportGeneration';
import AdminChangepassword from './pages/admin/AdminChangepassword';
import MessageReply from './pages/admin/MessageReply';


function App() {

  return (

    <Router>
      <Routes>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/admindashboard' element={<AdminDashboard />}>
          <Route index element={<DashboardAdmin />}></Route>
          <Route path='session' element={<Session />}></Route>
          <Route path='subject' element={<Subject />}></Route>
          <Route path='examination' element={<Examination />}></Route>
          <Route path='questionbank' element={<QuestionBank />}></Route>
          <Route path='examinee' element={<Examinee />}></Route>
          <Route path='reportgeneration' element={<ReportGeneration />}></Route>
          <Route path='adminchangepassword' element={<AdminChangepassword />}></Route>
          <Route path='messagereply' element={<MessageReply />}></Route>
        </Route>

        {/* <Route path='/' element={<Login />} ></Route> */}
        <Route path='/' element={<Navigate to="/admindashboard" replace />} />
        <Route path='/adminlogin' element={<AdminLogin />}></Route>

        {/* {user route start} */}
        <Route path='/userdashboard' element={<UserDashboard />}>
          <Route index element={<DashboardHome />}></Route>
          <Route path='myexams' element={<Myexams />}></Route>
          <Route path='myresult' element={<MyResult />}></Route>
          <Route path='getexam/:id' element={<Getexam />}></Route>
          <Route path='message' element={<Message />}></Route>
          <Route path='changepassword' element={<ChangePassword />}></Route>
        </Route>
        {/* user route end */}
      </Routes>
    </Router>

  )
}

export default App
