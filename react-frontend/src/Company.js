import React from 'react';
import './Company.css';

    function renderneed2(need2) {
        if (need2 !== null && need2 !== ''){
            return (
                <li>
                    {need2}
                </li>
            )
        } else {
            return null
        }
    }

    function renderneed3(need3) {
        if (need3 !== null && need3 !== ''){
            return (
            <li>
                {need3}
            </li>
            )
        } else {
            return null
        }
    }

    function renderwebsite(website) {
        if (website !== null && website !== ''){
            return (
                <div>
                    {website}
                </div>
            )
        } else {
            return null
        }
    }

    function renderyoutubelink(youtubelink) {
        if (youtubelink !== null && youtubelink !== ''){
            return (
                <div>{youtubelink}</div>
            )
        } else {
            return null
        }
    }

    function renderpaypallink(paypallink) {
        if (paypallink !== null && paypallink !== ''){
            return (
                <div>
                    {paypallink}
                </div>
            )
        } else {
            return null
        }
    }

    function renderlinkedin(linkedin) {
        if (linkedin !== null && linkedin !== ''){
            return (
                <div>
                    {linkedin}
                </div>
            )
        } else {
            return null
        }
    }
    
    function renderprofile(picture) {
        if (picture) {
            return (
                <div>
                    <img src={`http://localhost:4000/${picture}`} alt=""/>
                </div>
            )
        } else {
            return (
                <div>
                    <img src={`http://localhost:4000/images/noprofileimage2.png`} alt=""/>
                </div>
            )
        }
    }

    function renderLogo(logo) {
        if (logo) {
            return (
                <div>
                <img src={`http://localhost:4000/${logo}`} alt=""/>
                </div>
            )
        } else {
            return (
                <div>
                <img src={`http://localhost:4000/images/noimageavailable.jpg`} alt=""/>
                </div>
            )
        }
    }


    const Company=({companyDetail})=>
                <div className="div-Company">This is the description of a company:
                {renderLogo(companyDetail.picture)}
                <br/>               
                <p>Company Name:{companyDetail.name}</p>
                <p>Summary:{companyDetail.summary}</p>
                <p>Industry:{companyDetail.industry}</p>
                <p>Stage:{companyDetail.stage}</p>
                {/* <p>Product and Services:{companyDetail.productAndServices}</p> */}
                <p>Company Needs:
                </p>
                <ul>
                <li>{companyDetail.need1}</li>
                {renderneed2(companyDetail.need2)}
                {renderneed3(companyDetail.need3)}
                </ul>
                {/* </p> */}
                {renderwebsite(companyDetail.website)}
                <p>Email:{companyDetail.email}</p>
                <p>Phone:{companyDetail.phone}</p>
                {renderyoutubelink(companyDetail.youtubelink)}
                {/* Donate to this business - legal review/disclaimer needed? */}
                {renderpaypallink(companyDetail.paypallink)}
                {renderprofile(companyDetail.profile)}
                {renderlinkedin(companyDetail.linkedin)}
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
                    paypalLink:'',
                    profile: '',
                    linkedIn: ''
                }
            }
        }

        componentDidMount(){
            const url=`http://localhost:4000/api/companies/${this.props.match.params.id}`;
            // console.log(url);
            fetch(url)
                .then(company=>company.json())
                .then(company=>{
                    this.setState({
                        company: {
                                _id: company._id,
                                name: company.name,
                                picture: company.picture,
                                summary: company.summary,
                                industry: company.industry,
                                stage: company.stage,
                                productAndServices: company.productAndServices,
                                need1: company.needs[0],
                                need2: company.needs[1],
                                need3: company.needs[2],
                                website: company.website,
                                email: company.email,
                                phone: company.phone,
                                youtubeLine: company.youtubeLine,
                                PaypalLink: company.paypalLink,
                                profile: company.profile,
                                linkedIn: company.linkedIn
                        }
                    })
                });
        }
        
        render(){
        return(
            <Company companyDetail={this.state.company}/>
        )}
    }
    

export default API;