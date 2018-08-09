import React from 'react';
import axios from 'axios';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

class EditPage extends React.Component {
    constructor(){
        super();
        this.state={
            form:{
                name: '',
                website: '',
                summary: '',
                need1: '',
                need2: '',
                need3: '',
                youtubeLink: '',
                productsAndServices: '',
                phone: '',
                email: '',
                companyImageForAdmin: '',
                industry: '',
                stage: '',
                BusinessLocationForAdmin: '',
                picture: null,
                location: '',
            }
        }
    }

    componentDidMount() {
    fetch(`http://localhost:4000/api/companies/${this.props.match.params.id}`)
    .then(res => res.json())
    .then(companyData => {
        this.setState({
            form: companyData
        });
        })  
    }

    handlename= (event) => {
        this.setState({
            form: {
                ...this.state.form, 
                name: event.target.value
            }
        })
    }

    handlewebsite= (event) => {
        this.setState({
            form: {
                ...this.state.form, 
                website: event.target.value
            }
        })
    }
    handlesummary= (event) => {
        this.setState({
            form: {
                ...this.state.form, 
                summary: event.target.value
            }
        })
    }
    handleneed1= (event) => {
        this.setState({
            form: {
                ...this.state.form, 
                need1: event.target.value
            }
        })
    }
    handleneed2= (event) => {
        this.setState({
            form: {
                ...this.state.form, 
                need2: event.target.value
            }
        })
        console.log(this.state.form)
    }
    handleneed3= (event) => {
        this.setState({
            form: {
                ...this.state.form, 
                need3: event.target.value
            }
        })
        console.log(this.state.form)
    }
    handleyoutubeLink= (event) => {
        this.setState({
            form: {
                ...this.state.form, 
                youtubeLink: event.target.value
            }
        })
        console.log(this.state.form)
    }
    
    handleproductsAndServices =(event) => {
        this.setState({
            form: {
                ...this.state.form, 
                productsAndServices: event.target.value
            }
        })
        console.log(this.state.form)
    }

    handlephone =(event) => {
        this.setState({
            form: {
                ...this.state.form, 
                phone: event.target.value
            }
        })
        console.log(this.state.form)
    }

    handleemail =(event) => {
        this.setState({
            form: {
                ...this.state.form, 
                email: event.target.value
            }
        })
        console.log(this.state.form)
    }

    handlePicture =(event) => {
        this.setState({
            form: {
                ...this.state.form, 
                picture: event.target.files[0]
            }
        })
        console.log(this.state.form)
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onloadend = (e) => {
                this.setState({
                    imagePreview: e.target.result
                });
            };
            reader.readAsDataURL(event.target.files[0]);
        };
    }

    handleindustry =(event) => {
        this.setState({
            form: {
                ...this.state.form, 
                industry: event.target.value
            }
        })
        console.log(this.state.form)
    }

    handlestage =(event) => {
        this.setState({
            form: {
                ...this.state.form, 
                stage: event.target.value
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

    updateCompany = (event) => {
        event.preventDefault()
        let needs = [];
        if (this.state.form.need1 !== '') {
            needs.push(this.state.form.need1);
        };
        if (this.state.form.need2 !== '') {
            needs.push(this.state.form.need2);
        };
        if (this.state.form.need3 !== '') {
            needs.push(this.state.form.need3);
        }; 

        let companyObject = {
            name: this.state.form.name,
            summary: this.state.form.summary,
            industry: this.state.form.industry,
            stage: this.state.form.stage,
            productAndServices: this.state.form.productAndServices,
            needs: needs,
            website: this.state.form.website,
            email: this.state.form.email,
            phone: this.state.form.phone,
            youtubeLink: this.state.form.youtubeLink,
            paypalLink: this.state.form.paypalLink,
        }
        axios.post(`http://localhost:4000/api/updatecompany/${this.props.match.params.id}`, companyObject)
            .then(res => {
                console.log(res);
                // return r
            })
        // fetch(`http://localhost:4000/api/updatecompany/${this.props.match.params.id}`,
        // {
        //     method: 'POST',
        //     body: JSON.stringify(companyObject)
        //     })
        // .then(res => (res.json()))
            // .then(res => console.log(res.data._id))
            // .then(console.log(res.data._id))
    }
        deleteCompany = (event) => {
            event.preventDefault()
            axios.post(`http://localhost:4000/api/deletecompany/${this.props.match.params.id}`, this.props.match.params.id)
            .then(res => {
               console.log(res);
            //    return res.data._id;
             })
        }

    render() {
        return (
            <div>
            <form onSubmit={(e) => {this.updateCompany(e)}} >
            

                <label htmlFor='Company Name'>Company</label>
                <input value={this.state.form.name} type='text'
                onChange={this.handlename}/>


                <label htmlFor='Website Data'>Enter Company Website</label>
                <input value={this.state.form.website} type='url'
                onChange={this.handlewebsite}/>

                <label htmlFor='summary of company'>Company Summary</label>
                <input value={this.state.form.summary} type='text'
                onChange={this.handlesummary}/>

                <label htmlFor='Company Needs 1'>Need 1</label>
                <input value={this.state.form.need1} type='text'
                onChange={this.handleneed1}/>
                
                <label htmlFor='Company Needs 2'>Need 2</label>
                <input value={this.state.form.need2} type='text'
                onChange={this.handleneed2}/>
                
                <label htmlFor='Company Needs 3'>Need 3</label>
                <input value={this.state.form.need3} type='text'
                onChange={this.handleneed3}/>
                
                <label htmlFor='Youtube Video'>Youtube Link</label>
                <input value={this.state.form.youtubeLink} type='url'
                onChange={this.handleyoutubeLink}/>
                
                <label htmlFor='Companies Products and Services'>Products and Services</label>
                <input value={this.state.form.companyProductsandServices} type='text'
                onChange={this.handleCompanyProductsAndServices} />

                <label htmlFor='Company Phone Number'>Company Phone Number</label>
                <input value={this.state.form.phone} type='tel'
                onChange={this.handlephone}/>

                <label htmlFor='Company Email'>Company Email</label>
                <input value={this.state.form.email} type='email'
                onChange={this.handleemail}/>
                
                <label htmlFor='Industry'>Industry</label>
                <input value={this.state.form.industry} type='text'
                onChange={this.handleindustry}/>
                
                <label htmlFor='Stage of Business'>Stage of Company</label>
                <input value={this.state.form.stage} type='text'
                onChange={this.handlestage}/>
                
                <label htmlFor='Business Location'>Business Location</label>
                <input value={this.state.form.BusinessLocationForAdmin} type='text'
                onChange={this.handleBusinessLocationForAdmin}/>
                
                <label htmlFor=''>Company Image</label>
                <input type='file' name='poi-thumbnail'
                        accept='.png, .jpg, .jpeg'
                onChange={this.handlePicture}/>
                
                <input type='submit' value='Save Changes' />
                <button onClick={this.deleteCompany}>Delete Company</button>
            </form>

            {/* <Cropper
                ref='cropper'
                src={this.state.imagePreview}
                style={{height: 400, width: '100%'}}
                // Cropper.js options
                aspectRatio={16/9}
                guides={false}
                autoCropArea={0}
                strict={false}
                highlight={false}
                dragCrop={true}
                cropBoxMovable={true}
                cropBoxResizable={false}
                crop={this._crop.bind(this)} /> */}
                <br/>
            </div>
        );
}
}


export default EditPage;