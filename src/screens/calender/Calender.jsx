import React from 'react'
import DashboardHeader from '../../components/dashboardHeader/DashboardHeader'
import DashboardNavbar from '../../components/dashboardNavbar/DashboardNavbar'
import {Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, ViewsDirective, ViewDirective, DragAndDrop, Resize, ResourcesDirective, ResourceDirective} from '@syncfusion/ej2-react-schedule'
import './calender.css'


const Calender = () => {
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

   const eventTemplate = (props) => {
     return <div className='template-wrap'>{props.Subject}</div>
   }
  
  return (
    <>
        <DashboardNavbar />
      <DashboardHeader />
      <div className='container_calender'>
        <div></div>
        <div id='calender' className='calender'>
          <p>Hi Justin Nguyen</p>
          <h2>Welcome to Toptalent!</h2>
            <ScheduleComponent currentView='Week' eventSettings={{dataSource: localData}}>
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