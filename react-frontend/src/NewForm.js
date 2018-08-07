import React from 'react';


class NewForm extends React.Component {
    constructor(){
        super();
        this.handleEntry = this.handleEntry.bind()
        this.state={
            form:{
                companyNameForAdmin: '',
                websiteDataForAdmin: '',
                CompanySummaryForAdmin: '',
                companyNeedNumOne: '',
                companyNeedNumTwo: '',
                companyNeedNumThree: '',
                companyYoutubeLink: '',
                companyProductssandServices: '',
                companyPhoneNumber: '',
                companyEmailForAdmin: '',
                companyImageForAdmin: '',
                companyIndustryForAdmin: '',
                companyStageForAdmin: '',
                BusinessLocationForAdmin: ''
            }
        }
        
    }
    handleCompanyNameForAdmin= (event) => {
        this.setState({
            form: {
                ...this.state.form, 
                companyNameForAdmin: event.target.value
            }
        })
    }

    handleWebsiteDataForAdmin= (event) => {
        this.setState({
            form: {
                ...this.state.form, 
                WebsiteDataForAdmin: event.target.value
            }
        })
    }
    handleCompanySummaryForAdmin= (event) => {
        this.setState({
            form: {
                ...this.state.form, 
                companySummaryForAdmin: event.target.value
            }
        })
    }
    handleCompanyNeedNumOne= (event) => {
        this.setState({
            form: {
                ...this.state.form, 
                companyNeedNumOne: event.target.value
            }
        })
    }
    handleCompanyNeedNumTwo= (event) => {
        this.setState({
            form: {
                ...this.state.form, 
                companyNeedNumTwo: event.target.value
            }
        })
        console.log(this.state.form)
    }
    handleCompanyNeedNumThree= (event) => {
        this.setState({
            form: {
                ...this.state.form, 
                companyNeedNumThree: event.target.value
            }
        })
        console.log(this.state.form)
    }
    handleCompanyYoutubeLink= (event) => {
        this.setState({
            form: {
                ...this.state.form, 
                companyYoutubeLink: event.target.value
            }
        })
        console.log(this.state.form)
    }
    
    handleCompanyProductssAndServices =(event) => {
        this.setState({
            form: {
                ...this.state.form, 
                companyProductssandServices: event.target.value
            }
        })
        console.log(this.state.form)
    }
    handleCompanyPhoneNumber =(event) => {
        this.setState({
            form: {
                ...this.state.form, 
                companyPhoneNumber: event.target.value
            }
        })
        console.log(this.state.form)
    }
    handleCompanyEmailForAdmin =(event) => {
        this.setState({
            form: {
                ...this.state.form, 
                companyEmailForAdmin: event.target.value
            }
        })
        console.log(this.state.form)
    }
    handleCompanyImageForAdmin =(event) => {
        this.setState({
            form: {
                ...this.state.form, 
                companyImageForAdmin: event.target.value
            }
        })
        console.log(this.state.form)
    }
    handlecompanyIndustryForAdmin =(event) => {
        this.setState({
            form: {
                ...this.state.form, 
                companyIndustryForAdmin: event.target.value
            }
        })
        console.log(this.state.form)
    }
    handlecompanyStageForAdmin =(event) => {
        this.setState({
            form: {
                ...this.state.form, 
                companyStageForAdmin: event.target.value
            }
        })
        console.log(this.state.form)
    }
    handleBusinessLocationForAdmin =(event) => {
        this.setState({
            form: {
                ...this.state.form, 
                BusinessLocationForAdmin: event.target.value
            }
        })
        console.log(this.state.form)
    }

    handleEntry(event){
        event.preventDefault();
        const form = event.target.value;
        const data = new FormData(event.target);


       fetch('/form-submit', {
           method: 'POST',
           body: data,
       });
    }

    render() {
        return (
            <form onSubmit={this.handleEntry} >
            

                <label htmlFor='Company Name'>Company</label>
                <input value={this.state.form.companyNameForAdmin} type='text'
                onChange={this.handleCompanyNameForAdmin}/>


                <label htmlFor='Website Data'>Enter Company Website</label>
                <input value={this.state.form.WebsiteDataForAdmin} type='url'
                onChange={this.handleWebsiteDataForAdmin}/>

                <label htmlFor='summary of company'>Company Summary</label>
                <input value={this.state.form.companySummaryForAdmin} type='text'
                onChange={this.handleCompanySummaryForAdmin}/>

                <label htmlFor='Company Needs 1'>Need 1</label>
                <input value={this.state.form.companyNeedNumOne} type='text'
                onChange={this.handleCompanyNeedNumOne}/>
                
                <label htmlFor='Company Needs 2'>Need 2</label>
                <input value={this.state.form.companyNeedNumTwo} type='text'
                onChange={this.handleCompanyNeedNumTwo}/>
                
                <label htmlFor='Company Needs 3'>Need 3</label>
                <input value={this.state.form.companyNeedNumThree} type='text'
                onChange={this.handleCompanyNeedNumThree}/>
                
                <label htmlFor='Youtube Video'>Youtube Link</label>
                <input value={this.state.form.companyYoutubeLink} type='url'
                onChange={this.handleCompanyYoutubeLink}/>
                
                <label htmlFor='Companies Products and Services'>Products and Services</label>
                <input value={this.state.form.companyProductsandServices} type='text'
                onChange={this.handleCompanyProductsAndServices} />

                <label htmlFor='Company Phone Number'>Company Phone Number</label>
                <input value={this.state.form.companyPhoneNumber} type='tel'
                onChange={this.handleCompanyPhoneNumber}/>

                <label htmlFor='Company Email'>Company Email</label>
                <input value={this.state.form.companyEmailForAdmin} type='email'
                onChange={this.handleCompanyEmailForAdmin}/>
                
                <label htmlFor='Industry'>Industry</label>
                <input value={this.state.form.companyIndustryForAdmin} type='text'
                onChange={this.handlecompanyIndustryForAdmin}/>
                
                <label htmlFor='Stage of Business'>Stage of Company</label>
                <input value={this.state.form.companyStageForAdmin} type='text'
                onChange={this.handleCompanyStageForAdmin}/>
                
                <label htmlFor='Business Location'>Business Location</label>
                <input value={this.state.form.BusinessLocationForAdmin} type='text'
                onChange={this.handleBusinessLocationForAdmin}/>
                
                <label htmlFor=''>Company Image</label>
                <input value={this.state.form.companyImageForAdmin}type='file' name='poi-thumbnail'
                       accept='.png, .jpg, .jpeg, .gif'
                       encType='multipart/form-data' 
                onChange={this.handleCompanyImageForAdmin}/>
                
               


                <input type='submit' value='Create Entry' />
                <input type='clear' value='Clear Fields' />
                
                
                
                
                
                <button>Delete Company</button>
            </form>
        );
}
}

export default NewForm;