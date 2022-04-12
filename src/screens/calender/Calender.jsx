import React, { useContext, useEffect } from 'react'
import DashboardHeader from '../../components/dashboardHeader/DashboardHeader'
import DashboardNavbar from '../../components/dashboardNavbar/DashboardNavbar'
import EmailVerificationModal from '../../components/modals/emailVerification/EmailVerificationModal'
import {Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, ViewsDirective, ViewDirective, DragAndDrop, Resize, ResourcesDirective, ResourceDirective} from '@syncfusion/ej2-react-schedule'
import './calender.css'
import { UserInfo } from '../../helpers/ContextApi'
import VerifiedEmailModal from '../../components/modals/verifiedEmailModal/VerifiedEmailModal'



const Calender = () => {
  const {personalData, verifyEmailShow, setVerifyEmailModalShow, verifiedEmailShow, setVerifiedEmailModalShow} = useContext(UserInfo)
  
  useEffect(() => {
    console.log(verifyEmailShow);
    personalData?.verify_otp !== undefined &&
    
    setVerifyEmailModalShow( verifyEmailShow === "false" ? false : personalData?.verify_otp ===  "yes" ? false : true)
  
  }, [personalData?.verify_otp])
  
  
  

  const localData = [{
    Id: 1,
    Subject: "one",
    StartTime: new Date(2022, 2, 15, 6 ,0),
    EndTime: new Date(2022, 2, 15, 12,0),
    Location: "msaken",
    ResourceId: 1

  },
  {
    Id: 2,
    Subject: "two",
    StartTime: new Date(2022, 2, 13, 6 ,0),
    EndTime: new Date(2022, 2, 13, 12,0),
    Location: "msaken",
    ResourceId: 2


  }];

  const ResourceDataSource = [
    {Name: 'red', Id: 1, color: '#B15059'},
    {Name: 'green', Id: 2, color: '#49A85E'}
  ]

   const eventTemplate = (prop) => {
     return <div className='template-wrap'>{prop.Subject}</div>
   }

   
  
  return (
    <>
      <DashboardNavbar />
      <DashboardHeader />
      <EmailVerificationModal
          show={verifyEmailShow}
          onHide={() => setVerifyEmailModalShow(false)}
                    />
      <VerifiedEmailModal
          show={verifiedEmailShow}
          onHide={() => setVerifiedEmailModalShow(false)}
                    />
      <div className='container_calender'>
        <div></div>
        <div id='calender' className='calender'>
          <p >Hi {personalData?.first_name}</p>
          <h2 >Welcome to Toptalent!</h2>
            <ScheduleComponent currentView='Month' eventSettings={{dataSource: localData}}>
            <ResourcesDirective>
              <ResourceDirective field='ResourceId' idField='Id' colorField='color' title='Resources Name' name='Resources' textField='Name' dataSource={ResourceDataSource}/>
            </ResourcesDirective>
              <ViewsDirective>
                <ViewDirective option='Day'></ViewDirective>
                <ViewDirective option='Week'></ViewDirective>
                <ViewDirective option='Month' eventTemplate={eventTemplate}></ViewDirective>

              </ViewsDirective>
            <Inject services={[Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Resize ]} />
            </ScheduleComponent>
        </div>
    </div>
    </>
  )
}

export default Calender