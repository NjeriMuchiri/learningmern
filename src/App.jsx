     const contentNode = document.getElementById('contents');

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
                     <IssueRow issue_id={1} 
                     issue_title = "Error in console when clicking Add"
                     />
                      <IssueRow issue_id={2} 
                     issue_title = "Missing bottom border on panel"
                     />
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
                     <td style={borderedStyle}>{this.props.issue_id}</td>
                     <td style={borderedStyle}>{this.props.issue_title}</td>
                 </tr>
             )
         }
     }
     class IssueList extends React.Component{
         render() {
             return(
                 <div>
                     <h1>Issue Tracker</h1>
                    
                     <IssueTable />
                     <IssueRow />
                     <hr />
                     <h1>This is a placeholder for an issue Add Entry form</h1>
                 </div>
             )
         }
     }

     ReactDOM.render(<IssueList />, contentNode);