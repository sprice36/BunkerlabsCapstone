import React from 'react';
import './Company.css';
import { Timeline } from 'react-twitter-widgets';
import YoutubeEmbedVideo from 'youtube-embed-video';
import ReactPlayer from 'react-player';


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

    function renderowner(owner) {
        if (owner !== null && owner !== ''){
            return (
            <div>
                {owner}
            </div>
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
    const opts ={
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1
        }
    }

    function renderyoutubelink(youtubelink) {
        if (youtubelink !== null && youtubelink !== ''){
            return (
                <div className='youtube-embed'>
                   <ReactPlayer
                   url='https://www.youtube.com/watch?v=Ez5-7yozuNg'
                   width='100%'
                   height='420px'
                   
                   />
                   
                   
                   
                   
                    {/* <YoutubeEmbedVideo 
                    videoId='jgsPJVZY5pM'
                    suggestions={false}
                    height='350px'
                    width='300px'
                    /> */}
                    </div>
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
    
    function renderprofile(picture) {
        if (picture) {
            return (
                <div className="container-image">
                    <img className="company-picture" src={`http://localhost:4000/${picture}`} alt=""/>
                </div>
            )
        } else {
            return (
                <div className="container-image">
                    <img className="company-picture" src={`http://localhost:4000/images/default/noprofileimage2.png`} alt=""/>
                </div>
            )
        }
    }

    function renderLogo(logo) {
        if (logo) {
            return (
                <div >
                <img className="company-renderLogo" src={`http://localhost:4000/${logo}`} alt=""/>
                </div>
            )
        } else {
            return (
                <div>
                  <img className="company-renderLogo" src={`http://localhost:4000/images/default/noimageavailable.jpg`} alt=""/>
                </div>
            )
        }
    }

   
    const Company=({companyDetail})=>
            <div className="company-outercontainer">
                <div className='please'>
                <div className="div-Company"> {renderLogo(companyDetail.picture)}
                <div className="company-name">{companyDetail.name}</div>
                <div className='owner-name'> {renderowner(companyDetail.owner)}</div>
                <div className="company-box">           
                <div className='summary-border'>
                <div className="company-summary">{companyDetail.summary}</div>
                <div className="company-industry">{companyDetail.industry}</div>
                <div className="company-stage">{companyDetail.stage}</div>
                {/* <p>Product and Services:{companyDetail.productAndServices}</p> */}
                <div className="company-needs">Company Needs:
                </div>
                <ul>
                <li>{companyDetail.need1}</li>
                {renderneed2(companyDetail.need2)}
                {renderneed3(companyDetail.need3)}
                </ul>
                {/* </p> */}
               
                <div className="company-website"><a href={`${companyDetail.website}`}> {renderwebsite(companyDetail.website)}</a></div>
                <div className="company-email"><a href={`mailto:${companyDetail.email}`}>{companyDetail.email}</a></div>
                <div className="company-phone"><a href={`tel:${companyDetail.phone}`}>Phone:{companyDetail.phone}</a></div>
                </div>
                {/* Donate to this business - legal review/disclaimer needed? */}
                <div className="company-paypal"> <a href={`${companyDetail.paypallink}`}>{renderpaypallink(companyDetail.paypallink)}</a></div>
                <div className="company-linkedin"><a href={`${companyDetail.linkedin}`}>{renderlinkedin(companyDetail.linkedin)}</a></div>
                </div>
                </div>
                </div>
                <div className='column-video'>
                <div className="company-profile"> {renderprofile(companyDetail.profile)}</div>
                <div className="company-youtube">{renderyoutubelink(companyDetail.youtubelink)}</div>
                </div>
                <div className="twitter-biggersize">
                
                <Timeline className='twitter-feed'
                    dataSource={{
                        sourceType: 'profile',
                        screenName: 'TheBunkerLabs'
                    }}
                    options={{
                        username: 'TheBunkerLabs',
                        height: '800',
                        
                        
                    }}
                        onLoad={() => console.log('Timeline is loaded')}
                        />

                </div>
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

    // const resize=()=>{
    //     if($(window).width()>480){
    //         $("company-profile").insertAfter("company-renderLogo");
    //     }

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