import React, { Component } from 'react';
import './Company.css';
// import Data from './Data';

    const Company=({companyDetail})=>
                <div className="div-Company">This is the description of a company:
                <h3> 
                <p>Company Name:{companyDetail.name}</p>
                <p>Company Logo: {companyDetail.picture}</p>
                <p>Summary:{companyDetail.summary}</p>
                <p>Industry:{companyDetail.industry}</p>
                <p>Stage:{companyDetail.stage}</p>
                <p>Product and Services:{companyDetail.productAndServices}</p>
                <p>Top Three needs:
                <ul>
                <li> {companyDetail.needs[0]}</li>
                <li>{companyDetail.needs[1]}</li>
                <li>{companyDetail.needs[2]}</li>
                </ul>
                </p>
                <p>Website:{companyDetail.website}</p>
                <p>Email:{companyDetail.email}</p>
                <p>Phone Numbers:{companyDetail.phone}</p>
                <p>YouTube:{companyDetail.youtubeLine}</p>
                <p>Paypal:{companyDetail.paypalLink}</p>
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
                    needs:'',
                    needs:'',
                    needs:'',
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
                    })
                })
        }
        
        render(){
        return(
            <Company companyDetail={this.state.company}/>
        )
    }
    }
    

export default API;