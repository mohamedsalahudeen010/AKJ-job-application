import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landing/LandingPage';
import StudentSignUpPage from './pages/studentSignUp/StudentSignUp';
import CompanyLogInPage from './pages/companyLogin/CompanyLoginPage';
import CompanySignUpPage from './pages/companySignUp/CompanySignUp';
import StudentLogInPage from './pages/studentLogin/StudentLoginPage';
import MainStudent from './pages/mainStudent/MainStudent';
import JobsStudent from './pages/jobsStudent/JobsStudent';
import { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchJobs } from './redux/Jobs/jobsAction';
import { AKJContext } from './Context';
import { fetchStudent } from './redux/student/studentAction';
import { fetchCompanies } from './redux/Companies/companyAction';
import MainCompany from './pages/mainCompany/MainCompany';
import CompanyPage from './pages/companyPage/CompanyPage';
import AddJob from './pages/addJobs/AddJobs';
import JobsCompany from './pages/jobsCompany/JobsCompany';
import ApplicationPage from './pages/applicationPage/ApplicationPage';
import MyApplications from './pages/myApplications/MyApplications';
import { fetchAddApplication, fetchApplications } from './redux/Application/applicationAction';


function App() {
  const{baseUrl}=useContext(AKJContext)
  const dispatch=useDispatch()
  
  useEffect(()=>{
    if(localStorage.getItem("email")){
      dispatch(fetchJobs(baseUrl))
      dispatch(fetchStudent(baseUrl,{email:localStorage.getItem("email")}))
      dispatch(fetchCompanies(baseUrl))
      dispatch(fetchApplications(baseUrl,localStorage.getItem("email")))
      
    }
    
  },[])
  return (
    <div className="App">
       <Routes>
     <Route exact path="/" element={<LandingPage/>}/>
     <Route path="/loginStudent" element={<StudentLogInPage/>}/>
     <Route path="/signUpStudent" element={<StudentSignUpPage/>}/>
     <Route path="/loginCompany" element={<CompanyLogInPage/>}/>
     <Route path="/signUpCompany" element={<CompanySignUpPage/>}/>
     <Route path="/studentMain" element={<MainStudent/>}/>
     <Route path="/jobs" element={<JobsStudent/>}/>
     <Route path="/companies" element={<MainCompany/>}/>
     <Route path="/mainCompany" element={<CompanyPage/>}/>
     <Route path="/companyJobs" element={<JobsCompany/>}/>
     <Route path="/addJobs" element={<AddJob/>}/>
     <Route path="/application/:id" element={<ApplicationPage/>}/>
     <Route path="/myApplications" element={<MyApplications/>}/>
     <Route path='*' element={<LandingPage/>} />        
     </Routes>
    </div>
  );
}

export default App;
