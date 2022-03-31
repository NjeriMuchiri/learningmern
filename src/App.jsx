     const contentNode = document.getElementById('contents');

  const issues = [
      {
          id:1, status: 'Open', owner: 'Ravan',
          created:new Date('2016-08-15'), effort: 5, completionDate:undefined,
          title: 'Error in console when clicking Add',
      },
      {
          id:2, status: 'Assigned', owner: 'Eddie',
          created: new Date('2016=08-16'), effort:14, completionDate: new Date('2016-08-30'),
          title: 'Missing bottom border on panel',
      },
  ];
          class IssueTable extends React.Component{
         render() {
             const borderedStyle = {border:"1px solid silver", padding:6}
             return(
                 <table style={{borderCollapse:"collapse"}}>
                     <thead>
                         <tr>
                             <th style={borderedStyle}>Id</th>
                             <th style={borderedStyle}>Title</th>
                         </tr>
                     </thead>
                <tbody>
                     <IssueRow issue_id={1}>
                         Error in console when clicking Add
                         </IssueRow> 
                      <IssueRow issue_id={2}> 
                     Missing bottom <b>border</b> on panel</IssueRow>
                     </tbody>
                 </table>
             );
         }
     }
    
     class IssueRow extends React.Component{
         render(){
             const borderedStyle = {border:"1px solid silver", padding:4}
             return(
                 <tr>
                     <td style={borderedStyle}>{this.props.children}</td>
                     <td style={borderedStyle}>{this.props.children}</td>

                 </tr>
             )
         }
     }
     class IssueList extends React.Component{
         render() {
             return(
                 <div>
                     <h1>Issue Tracker</h1>
                    <hr />
                     <IssueTable issues={issues}/>
                    <hr />
                     <IssueRow />
                     <hr />
                     <h1>This is a placeholder for an issue Add Entry form</h1>
                 </div>
             )
         }
     }

     ReactDOM.render(<IssueList />, contentNode);