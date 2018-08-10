import React from 'react';
import './Company.css';

    const Company=({companyDetail})=>
                <div className="div-Company">This is the description of a company:
                <h3> 
                <img src={`http://localhost:4000/${companyDetail.picture}`} alt=""/> 
                <br/>               
                <p>Summary:{companyDetail.summary}</p>
                <p>Company Name:{companyDetail.name}</p>
                <p>Industry:{companyDetail.industry}</p>
                <p>Stage:{companyDetail.stage}</p>
                <p>Product and Services:{companyDetail.productAndServices}</p>
                <p>Top Three needs:
                <ul>
                <li>{companyDetail.needs}</li>
                <li>{companyDetail.needs}</li>
                <li>{companyDetail.needs}</li>
                </ul>
                </p>
                <p>Website:{companyDetail.website}</p>
                <p>Email:{companyDetail.email}</p>
                <p>Phone:{companyDetail.phone}</p>
                <p>YouTube:{companyDetail.youtubeLine}</p>
                {/* Donate to this business - legal review/disclaimer needed? */}
                <p>Donate to this business:{companyDetail.paypalLink}</p>
                </h3>
                </div>
    

    //currying  pattern-to customize and preset a component
    
    // const withRouter=(Component)=>(props)=>{
    //     const id=props.match.params.id;
    //     console.log(id);
    //     const oneCompanyMatch= Component.find(company=>company._id===id);
    //     return (

    // // recomposed as it passes the props invisibly
    // //as all the props from the parent to child will be passed no matter what
    //          <Component {...props} companyDetail={oneCompanyMatch}/>
    //     )

    // }
    class API extends React.Component{
        constructor(props){
            super(props);
            this.state={
                company: {
                    _id:'',
                    name:'',
                    picture:'',
                    summary:'',
                    industry:'',
                    stage:'',
                    productAndServices:'',
                    need1:'',
                    need2:'',
                    need3:'',
                    website:'',
                    email:'',
                    phone:'',
                    youtubeLine:'',
                    PaypalLink:''
                }
            }
        }

        componentDidMount(){
            const url=`http://localhost:4000/api/companies/${this.props.match.params.id}`;
            console.log(url);
            fetch(url)
                .then(company=>company.json())
                .then(company=>{
                    this.setState({
                        company
                    });
                    console.log(company);
                });
        }
        
        render(){
        return(
            <Company companyDetail={this.state.company}/>
        )}
    }
    

export default API;